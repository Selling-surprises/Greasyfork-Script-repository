// ==UserScript==
// @name         微软翻译移动端（不支持Via）
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  支持多语翻译（会智能检测语言），翻译面板默认折叠，优化移动端长按复制体验
// @author       Your name
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @connect      api.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @connect      api.translator.azure.cn
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAMFBMVEUAAAD///8ApO//uQB/ugDyUCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWWinyAAAAAXRSTlNQK42JkgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAABLSURBVGiB7cwxEcAgAASwvytCuFqoBQSw4N8KDn7ukAhITrWTsaoIBAKBQCAQCAQCgUAg6AF/8FYzeb5KIBAIBAKBQCAQCAQCQQ8u/lPCCllcQssAAAAASUVORK5CYII=
// ==/UserScript==

(function() {
    'use strict';

    // 全局状态变量
    let hasTranslated = false;
    let currentDisplayMode = 'original';
    let originalTexts = new Map();
    let translatedTexts = new Map();
    let detectedLanguage = '';

    // 添加命名空间前缀，避免与其他脚本冲突
    const NAMESPACE = 'dp-translator';

    // 添加支持的语言列表
    const SUPPORTED_LANGUAGES = [
        { code: 'zh-Hans', name: '简体中文' },
        { code: 'zh-Hant', name: '繁體中文' },
        { code: 'en', name: '英语' },
        { code: 'ja', name: '日语' },
        { code: 'ko', name: '韩语' },
        { code: 'fr', name: '法语' },
        { code: 'de', name: '德语' },
        { code: 'es', name: '西班牙语' },
        { code: 'it', name: '意大利语' },
        { code: 'ru', name: '俄语' },
        { code: 'pt', name: '葡萄牙语' },
        { code: 'ar', name: '阿拉伯语' },
        { code: 'hi', name: '印地语' },
        { code: 'th', name: '泰语' },
        { code: 'vi', name: '越南语' }
    ];

    // 在页面加载完成后初始化翻译面板
    window.addEventListener('load', () => {
        // 检查是否已存在翻译面板
        if (!document.querySelector(`.${NAMESPACE}-panel`)) {
            createTranslatorPanel();
        }
        // 添加右键菜单
        createContextMenu();
    });

    // 更新默认配置
    const DEFAULT_CONFIG = {
        defaultEngine: 'MICROSOFT',  // 默认翻译引擎
        defaultCollapsed: true,     // 默认面板是否折叠
        panelPosition: 'right',      // 面板位置：'left'或'right'
        targetLanguage: 'zh-Hans',   // 目标语言（微软翻译使用zh-Hans）
        microsoftKey: '',            // 微软翻译API密钥
        microsoftRegion: 'global',   // 微软翻译API区域
        useChineseServer: false,     // 是否使用中国区服务器
        enableFallbackToGoogle: false, // 微软翻译失败时不再尝试谷歌翻译
        enableRightClickMenu: true,  // 是否启用右键菜单
        longPressDelay: 800,         // 移动端长按触发延迟(毫秒)
    };

    // 获取配置
    const CONFIG = GM_getValue('translator_config', DEFAULT_CONFIG);

    // 添加移动检测工具
    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.iOS());
        }
    };

    // 修改样式定义，添加命名空间
    GM_addStyle(`
        .${NAMESPACE}-panel {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);  /* 修改：默认完全展开 */
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px 0 0 8px;
            padding: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 9999;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            transition: transform 0.3s;
            width: 260px;
            font-size: 13px;
            max-height: 80vh;
            overflow-y: auto;
        }

        /* 移除hover相关样式 */
        .${NAMESPACE}-panel.collapsed {
            transform: translate(calc(100% - 24px), -50%);  /* 修改：收起时保持在右侧 */
            width: 24px;
            padding: 8px 0;
            writing-mode: vertical-lr;
            text-align: center;
            cursor: pointer;
            background: #1890ff;
            color: white;
            border-radius: 8px 0 0 8px;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
        }

        @media (max-width: 768px) {
            .${NAMESPACE}-panel {
                top: auto;
                bottom: 20%;
                transform: translateX(0);  /* 修改：移动端默认完全展开 */
                max-height: 300px; /* 限制最大高度 */
                height: auto;
            }

            .${NAMESPACE}-panel.collapsed {
                transform: translateX(calc(100% - 24px));  /* 修改：移动端收起时保持在右侧 */
                height: 40px; /* 减小高度到40px */
                min-height: 40px; /* 最小高度也调整为40px */
                padding: 4px 0; /* 减小内边距 */
                font-size: 16px; /* 调整字体大小 */
            }
        }

        .${NAMESPACE}-panel.collapsed .${NAMESPACE}-title,
        .${NAMESPACE}-panel.collapsed .${NAMESPACE}-controls,
        .${NAMESPACE}-panel.collapsed .${NAMESPACE}-language-info,
        .${NAMESPACE}-panel.collapsed #${NAMESPACE}-display-mode-controls {
            display: none;
        }

        .${NAMESPACE}-panel.collapsed .${NAMESPACE}-collapse-btn {
            display: none;
        }

        .${NAMESPACE}-panel.collapsed .${NAMESPACE}-expand-icon {
            display: flex;
            font-size: 18px;
            font-weight: bold;
        }

        .${NAMESPACE}-collapse-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 16px;
            color: #999;
            background: none;
            border: none;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .${NAMESPACE}-collapse-btn:hover {
            color: #666;
        }

        .${NAMESPACE}-expand-icon {
            display: none;
        }

        .${NAMESPACE}-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
            color: #333;
        }

        .${NAMESPACE}-controls {
            display: flex;
            gap: ${isMobile.any() ? '6px' : '8px'};
            margin-bottom: ${isMobile.any() ? '6px' : '8px'};
            ${isMobile.any() ? 'flex-wrap: wrap;' : ''}
            position: relative;
            z-index: 1;
        }

        .${NAMESPACE}-controls:last-child {
            margin-bottom: 0;
        }

        .${NAMESPACE}-btn {
            padding: ${isMobile.any() ? '8px 16px' : '6px 12px'};
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #fff;
            cursor: pointer;
            font-size: ${isMobile.any() ? '14px' : '13px'};
            min-height: ${isMobile.any() ? '44px' : 'auto'};
            touch-action: manipulation;
            color: #333;
            transition: all 0.2s;
        }

        .${NAMESPACE}-btn:hover {
            background: #f5f5f5;
        }

        .${NAMESPACE}-btn.active {
            background: #e6f7ff;
            border-color: #1890ff;
            color: #1890ff;
        }

        .${NAMESPACE}-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .${NAMESPACE}-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 2px;
            background: #1890ff;
            transition: width 0.3s ease;
            z-index: 10000;
        }

        .${NAMESPACE}-dual-text {
            display: inline;
            margin: 0;
            padding: 0;
        }

        .${NAMESPACE}-dual-text-original {
            color: #666;
            margin-right: 4px;
        }

        .${NAMESPACE}-dual-text-translated {
            color: #1890ff;
        }

        .${NAMESPACE}-language-info {
            font-size: 12px;
            color: #999;
            margin-bottom: 8px;
        }

        .${NAMESPACE}-select {
            padding: ${isMobile.any() ? '8px 16px' : '5px 10px'};
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #fff;
            font-size: ${isMobile.any() ? '14px' : '13px'};
            color: #333;
            margin-right: 8px;
            cursor: pointer;
            min-height: ${isMobile.any() ? '44px' : 'auto'};
            width: ${isMobile.any() ? '100%' : 'auto'};
        }

        .${NAMESPACE}-select:focus {
            outline: none;
            border-color: #1890ff;
        }

        /* 上下文菜单样式 */
        .${NAMESPACE}-context-menu {
            border-radius: 8px;
            overflow: hidden;
            width: 180px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
            background-color: white;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .${NAMESPACE}-context-menu div:not([style*="border-top"]) {
            padding: 12px 20px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .${NAMESPACE}-context-menu div:not([style*="border-top"]):hover,
        .${NAMESPACE}-context-menu div:not([style*="border-top"]):active {
            background-color: #f0f9ff;
        }

        /* 移动端适配 */
        @media (max-width: 768px) {
            .${NAMESPACE}-context-menu {
                width: auto;
                min-width: 200px;
            }
            
            .${NAMESPACE}-context-menu div:not([style*="border-top"]) {
                padding: 14px 20px;
                font-size: 16px;
            }
        }

        /* 设置面板样式 */
        .${NAMESPACE}-settings-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10001;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }

        .${NAMESPACE}-settings-panel h2 {
            margin-top: 0;
            margin-bottom: 16px;
            font-size: 18px;
        }

        .${NAMESPACE}-settings-group {
            margin-bottom: 16px;
            background: #f9f9f9;
            padding: 12px;
            border-radius: 6px;
        }

        .${NAMESPACE}-settings-group h3 {
            margin-top: 0;
            margin-bottom: 12px;
            font-size: 16px;
            color: #333;
        }

        .${NAMESPACE}-settings-item {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }

        .${NAMESPACE}-settings-item label {
            margin-right: 10px;
            min-width: 100px;
        }

        .${NAMESPACE}-settings-item input[type="text"],
        .${NAMESPACE}-settings-item input[type="password"],
        .${NAMESPACE}-settings-item input[type="number"],
        .${NAMESPACE}-settings-item select {
            flex: 1;
            padding: 6px 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        /* 增强移动端点击体验 */
        @media (max-width: 768px) {
            .${NAMESPACE}-settings-item {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .${NAMESPACE}-settings-item label {
                margin-bottom: 6px;
                margin-right: 0;
                font-size: 14px;
            }
            
            .${NAMESPACE}-settings-item input[type="text"],
            .${NAMESPACE}-settings-item input[type="password"], 
            .${NAMESPACE}-settings-item input[type="number"],
            .${NAMESPACE}-settings-item select {
                width: 100%;
                padding: 10px;
                font-size: 16px;
            }
            
            .${NAMESPACE}-settings-item input[type="checkbox"] {
                transform: scale(1.5);
                margin-left: 0;
            }
        }

        .${NAMESPACE}-settings-tip {
            font-size: 12px;
            color: #999;
            margin-top: 8px;
            margin-bottom: 0;
        }

        .${NAMESPACE}-close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 18px;
            cursor: pointer;
            color: #999;
        }

        .${NAMESPACE}-close-btn:hover {
            color: #666;
        }

        @media (max-width: 768px) {
            .${NAMESPACE}-settings-panel {
                width: 95%;
                max-height: 90vh;
            }
        }
    `);

    // Microsoft Translator API实现 (基于沉浸式翻译优化)
    async function microsoftTranslate(texts) {
        // 检查是否为数组，如果不是则转换为数组
        const textArray = Array.isArray(texts) ? texts : [texts];

        // 过滤空文本
        const filteredTexts = textArray.filter(text => text && text.trim() !== '');
        if (filteredTexts.length === 0) {
            return Array.isArray(texts) ? Array(texts.length).fill('') : '';
        }

        // 准备请求数据
        const apiData = filteredTexts.map(text => ({ Text: text }));

        // 设置API参数 - 从下拉菜单获取目标语言
        const targetLang = CONFIG.targetLanguage;

        // 更新语言信息
        updateLanguageInfo();

        // 先尝试通过Edge获取免费token (沉浸式翻译使用的方式)
        try {
            const authResponse = await fetch('https://edge.microsoft.com/translate/auth', {
                method: 'GET'
            });

            if (authResponse.ok) {
                const authToken = await authResponse.text();

                if (authToken && authToken.length > 10) {
                    // 使用免费token进行翻译 (类似沉浸式翻译)
                    const apiUrl = `https://api-edge.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLang}&includeSentenceLength=true`;

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + authToken,
                            'X-ClientTraceId': generateUUID()
                        },
                        body: JSON.stringify(apiData)
                    });

                    if (response.ok) {
                        const result = await response.json();

                        // 检测语言
                        if (!detectedLanguage && result[0]?.detectedLanguage) {
                            detectedLanguage = result[0].detectedLanguage.language;
                            updateLanguageInfo();
                        }

                        // 提取翻译结果
                        const translations = result.map(item =>
                            item.translations[0]?.text || '');

                        // 返回翻译结果
                        if (Array.isArray(texts)) {
                            return texts.map((text, index) => {
                                if (!text || text.trim() === '') return '';
                                const filteredIndex = filteredTexts.indexOf(text);
                                return filteredIndex !== -1 ? translations[filteredIndex] : '';
                            });
                        } else {
                            return translations[0] || '';
                        }
                    }
                }
            }

            // 如果免费token方式失败，尝试使用API密钥
            console.log('Edge免费Token方式失败，尝试使用API密钥');
        } catch (error) {
            console.log('Edge免费Token获取失败:', error);
        }

        // 使用API密钥方式 - 区分中国区和全球区
        const isCN = CONFIG.useChineseServer || false;
        const apiHost = isCN ? 'https://api.translator.azure.cn' : 'https://api.cognitive.microsofttranslator.com';
        const url = `${apiHost}/translate?api-version=3.0&to=${targetLang}`;

        // 重新格式化请求数据
        const data = filteredTexts.map(text => ({ text }));

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': CONFIG.microsoftKey || '',
                    'Ocp-Apim-Subscription-Region': CONFIG.microsoftRegion || 'global'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`翻译请求失败: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();

            // 提取翻译结果
            const translations = result.map(item =>
                item.translations && item.translations[0] ? item.translations[0].text : '');

            // 按照原始输入数组的结构返回结果
            if (Array.isArray(texts)) {
                return texts.map((text, index) => {
                    if (!text || text.trim() === '') return '';
                    const filteredIndex = filteredTexts.indexOf(text);
                    return filteredIndex !== -1 ? translations[filteredIndex] : '';
                });
            } else {
                return translations[0] || '';
            }
        } catch (error) {
            // 翻译失败处理
            console.error('Microsoft翻译API错误:', error);
            throw new Error(`翻译失败: ${error.message}`);
        }
    }

    // 生成UUID用于微软API请求
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // 定义平台
    const platforms = {
        MICROSOFT: {
            func: microsoftTranslate,
            name: '微软翻译'
        }
    };

    // 更新语言信息显示
    function updateLanguageInfo() {
        const langInfo = document.getElementById(`${NAMESPACE}-language-info`);
        if (!langInfo) return;

        // 获取语言名称
        let detectedLangName = '未知';
        if (detectedLanguage) {
            const langObj = SUPPORTED_LANGUAGES.find(lang =>
                lang.code === detectedLanguage);
            detectedLangName = langObj ? langObj.name : detectedLanguage;
        }

        // 获取目标语言名称
        const targetLangObj = SUPPORTED_LANGUAGES.find(lang => lang.code === CONFIG.targetLanguage);
        const targetLangName = targetLangObj ? targetLangObj.name : CONFIG.targetLanguage;

        langInfo.textContent = `源语言: ${detectedLangName} → 目标语言: ${targetLangName}`;
    }

    // 修改创建翻译面板函数，使用命名空间
    function createTranslatorPanel() {
        // 检查是否已存在翻译面板，如存在则返回该面板
        const existingPanel = document.querySelector(`.${NAMESPACE}-panel`);
        if (existingPanel) {
            return existingPanel;
        }

        const panel = document.createElement('div');
        panel.className = `${NAMESPACE}-panel`;
        if (CONFIG.defaultCollapsed) {
            panel.classList.add('collapsed');
        }

        // 折叠/展开按钮
        const collapseBtn = document.createElement('button');
        collapseBtn.className = `${NAMESPACE}-collapse-btn`;
        collapseBtn.innerHTML = '&times;';

        // 展开时显示的图标
        const expandIcon = document.createElement('div');
        expandIcon.className = `${NAMESPACE}-expand-icon`;
        expandIcon.textContent = '译';

        // 面板标题
        const title = document.createElement('div');
        title.className = `${NAMESPACE}-title`;
        title.textContent = '网页翻译';

        // 语言信息显示
        const langInfo = document.createElement('div');
        langInfo.className = `${NAMESPACE}-language-info`;
        langInfo.id = `${NAMESPACE}-language-info`;
        langInfo.textContent = '检测到的语言: 未知';

        // 翻译控制区
        const controls = document.createElement('div');
        controls.className = `${NAMESPACE}-controls`;

        // 翻译按钮
        const translateBtn = document.createElement('button');
        translateBtn.className = `${NAMESPACE}-btn`;
        translateBtn.id = `${NAMESPACE}-translate-btn`;
        translateBtn.textContent = '翻译网页';

        // 添加语言选择下拉菜单
        const languageSelect = document.createElement('select');
        languageSelect.className = `${NAMESPACE}-select`;
        languageSelect.id = `${NAMESPACE}-target-language`;

        // 填充语言选项
        SUPPORTED_LANGUAGES.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = lang.name;
            if (lang.code === CONFIG.targetLanguage) {
                option.selected = true;
            }
            languageSelect.appendChild(option);
        });

        // 显示模式控制区
        const displayControls = document.createElement('div');
        displayControls.className = `${NAMESPACE}-controls`;
        displayControls.id = `${NAMESPACE}-display-mode-controls`;
        displayControls.style.display = 'none';

        // 原文按钮
        const originalBtn = document.createElement('button');
        originalBtn.className = `${NAMESPACE}-btn`;
        originalBtn.id = `${NAMESPACE}-show-original`;
        originalBtn.textContent = '显示原文';

        // 译文按钮
        const translatedBtn = document.createElement('button');
        translatedBtn.className = `${NAMESPACE}-btn`;
        translatedBtn.id = `${NAMESPACE}-show-translated`;
        translatedBtn.textContent = '显示译文';

        // 双语按钮
        const dualBtn = document.createElement('button');
        dualBtn.className = `${NAMESPACE}-btn`;
        dualBtn.id = `${NAMESPACE}-show-dual`;
        dualBtn.textContent = '显示双语';

        // 添加设置按钮
        const settingsBtn = document.createElement('button');
        settingsBtn.className = `${NAMESPACE}-btn`;
        settingsBtn.textContent = '设置';
        settingsBtn.addEventListener('click', () => {
            const settingsPanel = document.querySelector(`.${NAMESPACE}-settings-panel`) || createSettingsPanel();
            settingsPanel.style.display = 'block';
        });

        // 组装面板
        panel.appendChild(collapseBtn);
        panel.appendChild(expandIcon);
        panel.appendChild(title);
        panel.appendChild(langInfo);

        // 第一行控制：仅包含语言选择
        const controlsRow1 = document.createElement('div');
        controlsRow1.className = `${NAMESPACE}-controls`;
        controlsRow1.appendChild(languageSelect);
        panel.appendChild(controlsRow1);

        // 第二行控制：翻译按钮
        controls.appendChild(translateBtn);
        controls.appendChild(settingsBtn);
        panel.appendChild(controls);

        // 显示模式控制
        displayControls.appendChild(originalBtn);
        displayControls.appendChild(translatedBtn);
        displayControls.appendChild(dualBtn);
        panel.appendChild(displayControls);

        document.body.appendChild(panel);

        // 监听事件
        collapseBtn.addEventListener('click', () => {
            panel.classList.add('collapsed');
            // 隐藏显示模式控制区域
            const displayModeControls = document.getElementById(`${NAMESPACE}-display-mode-controls`);
            if (displayModeControls) {
                displayModeControls.style.display = 'none';
            }
        });

        expandIcon.addEventListener('click', () => {
            panel.classList.remove('collapsed');
            // 如果已经翻译过，则显示模式控制区域
            if (hasTranslated) {
                const displayModeControls = document.getElementById(`${NAMESPACE}-display-mode-controls`);
                if (displayModeControls) {
                    displayModeControls.style.display = 'flex';
                }
            }
        });

        // 语言选择变化事件
        languageSelect.addEventListener('change', function() {
            CONFIG.targetLanguage = this.value;
            GM_setValue('translator_config', CONFIG);

            // 如果已经翻译过，显示提示重新翻译
            if (hasTranslated) {
                translateBtn.textContent = '重新翻译';
                // 可选：自动重新翻译
                // translateFullPage();
            }
        });

        translateBtn.addEventListener('click', translateFullPage);

        // 初始化显示模式控制
        initDisplayModeControls();

        if (isMobile.any()) {
            // Add touch event handling
            let touchStartY = 0;
            let originalHeight = 0;

            panel.addEventListener('touchstart', (e) => {
                if (panel.classList.contains('collapsed')) return;
                touchStartY = e.touches[0].clientY;
                originalHeight = panel.offsetHeight;
            }, { passive: true });

            panel.addEventListener('touchmove', (e) => {
                if (panel.classList.contains('collapsed')) return;
                const deltaY = touchStartY - e.touches[0].clientY;
                panel.style.height = `${originalHeight + deltaY}px`;
            }, { passive: true });

            panel.addEventListener('touchend', () => {
                if (panel.classList.contains('collapsed')) return;
                panel.style.height = 'auto';
            });

            // Adjust panel position for Via browser
            if (navigator.userAgent.includes('VIA')) {
                panel.style.bottom = '50px';
            }
        }

        return panel;
    }

    // 显示原文
    function showOriginalText() {
        if (!hasTranslated) return;

        // 如果当前已经是原文模式，不需要重复操作
        if (currentDisplayMode === 'original') return;

        // 如果当前是双语模式，需要先恢复DOM结构
        if (currentDisplayMode === 'dual') {
            for (const node of document.querySelectorAll(`.${NAMESPACE}-dual-text[data-is-dual-view="true"]`)) {
                const originalText = originalTexts.get(node);
                if (!originalText) continue;
                const textNode = document.createTextNode(originalText);
                node.parentNode.replaceChild(textNode, node);
                originalTexts.set(textNode, originalText);
                translatedTexts.set(textNode, translatedTexts.get(node));
            }
        }

        // 恢复所有节点到原始文本
        for (const [node, originalText] of originalTexts.entries()) {
            if (node && node.parentNode && node.nodeType === Node.TEXT_NODE) {
                node.textContent = originalText;
            }
        }

        currentDisplayMode = 'original';

        // 显示模式控制区
        document.getElementById(`${NAMESPACE}-display-mode-controls`).style.display = 'flex';
        updateDisplayModeStatus('original');
    }

    // 显示译文
    function showTranslatedText() {
        if (!hasTranslated) return;

        // 如果当前是双语模式，需要恢复DOM结构
        if (currentDisplayMode === 'dual') {
            restoreFromDualView();
        }

        // 恢复翻译文本
        for (const [node, translatedText] of translatedTexts.entries()) {
            if (node && node.parentNode) {
                node.textContent = translatedText;
            }
        }

        currentDisplayMode = 'translated';

        // 显示模式控制区
        document.getElementById(`${NAMESPACE}-display-mode-controls`).style.display = 'flex';
        updateDisplayModeStatus('translated');
    }

    // 显示双语对照
    function showDualText() {
        if (!hasTranslated) return;

        // 如果当前已经是双语模式，不需要重复操作
        if (currentDisplayMode === 'dual') return;

        // 先恢复到原始状态
        for (const [node, translatedText] of translatedTexts.entries()) {
            if (node && node.parentNode && node.nodeType === Node.TEXT_NODE) {
                const originalText = originalTexts.get(node);
                if (!originalText) continue;

                // 创建双语结构
                const dualContainer = document.createElement('span');
                dualContainer.className = `${NAMESPACE}-dual-text`;
                dualContainer.dataset.isDualView = 'true';

                const originalSpan = document.createElement('span');
                originalSpan.className = `${NAMESPACE}-dual-text-original`;
                originalSpan.textContent = originalText; // 使用原始文本

                const translatedSpan = document.createElement('span');
                translatedSpan.className = `${NAMESPACE}-dual-text-translated`;
                translatedSpan.textContent = translatedText; // 使用翻译文本

                dualContainer.appendChild(originalSpan);
                dualContainer.appendChild(translatedSpan);

                // 记录原始节点，以便恢复
                node.parentNode.replaceChild(dualContainer, node);
                originalTexts.set(dualContainer, originalText);
                translatedTexts.set(dualContainer, translatedText);
            }
        }

        currentDisplayMode = 'dual';
        updateDisplayModeStatus('dual');
    }

    // 从双语视图恢复到普通视图
    function restoreFromDualView() {
        if (currentDisplayMode !== 'dual') return;

        const dualElements = document.querySelectorAll(`.${NAMESPACE}-dual-text[data-is-dual-view="true"]`);
        dualElements.forEach(dualElement => {
            if (dualElement && dualElement.parentNode) {
                // 根据当前要恢复的目标模式选择合适的文本
                // 如果要恢复到原文模式，使用原始文本；否则使用翻译文本
                const textToUse = (currentDisplayMode === 'original' || currentDisplayMode === 'dual' && document.getElementById(`${NAMESPACE}-show-original`).classList.contains('active'))
                    ? originalTexts.get(dualElement)
                    : translatedTexts.get(dualElement);

                const textNode = document.createTextNode(textToUse || '');
                dualElement.parentNode.replaceChild(textNode, dualElement);

                // 恢复原始文本映射
                originalTexts.set(textNode, originalTexts.get(dualElement));
                translatedTexts.set(textNode, translatedTexts.get(dualElement));

                // 删除旧映射
                originalTexts.delete(dualElement);
                translatedTexts.delete(dualElement);
            }
        });
    }

    // 恢复原始状态
    function restoreOriginalText() {
        // 如果当前是双语模式，需要恢复DOM结构
        if (currentDisplayMode === 'dual') {
            restoreFromDualView();
        }

        // 恢复原始文本
        for (const [node, originalText] of originalTexts.entries()) {
            if (node && node.parentNode) {
                node.textContent = originalText;
            }
        }

        // 清空翻译数据
        originalTexts.clear();
        translatedTexts.clear();
        hasTranslated = false;
        currentDisplayMode = 'original';

        // 隐藏模式控制区
        document.getElementById(`${NAMESPACE}-display-mode-controls`).style.display = 'none';

        // 恢复翻译按钮
        const translateBtn = document.getElementById(`${NAMESPACE}-translate-btn`);
        translateBtn.textContent = '翻译网页';
        translateBtn.disabled = false;

        // 清除检测到的语言信息
        detectedLanguage = '';
        const langInfo = document.querySelector(`.${NAMESPACE}-language-info`);
        if (langInfo) {
            langInfo.remove();
        }
    }

    async function translatePage() {
        const progressBar = document.createElement('div');
        progressBar.className = `${NAMESPACE}-progress`;
        document.body.appendChild(progressBar);

        // 重置检测到的语言
        detectedLanguage = '';

        try {
            // 获取所有文本节点
            const elements = [];
            const originalTextsArray = [];
            const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function(node) {
                        const text = node.textContent.trim();
                        const parentElement = node.parentElement;
                        if (text && parentElement &&
                            !['SCRIPT', 'STYLE'].includes(parentElement.tagName) &&
                            !parentElement.closest(`.${NAMESPACE}-panel`)) {
                            return NodeFilter.FILTER_ACCEPT;
                        }
                        return NodeFilter.FILTER_REJECT;
                    }
                }
            );

            let node;
            while (node = walker.nextNode()) {
                elements.push(node);
                originalTextsArray.push(node.textContent.trim());
            }

            // 批量翻译
            const batchSize = 50;
            const translatedTexts = [];
            for (let i = 0; i < originalTextsArray.length; i += batchSize) {
                const batch = originalTextsArray.slice(i, i + batchSize);
                const progress = (i / originalTextsArray.length) * 100;
                progressBar.style.width = `${progress}%`;

                const translations = await microsoftTranslate(batch);
                translatedTexts.push(...translations);
            }

            // 保存翻译状态并初始化显示模式控制
            saveTranslationState(elements, translatedTexts);

            // 更新页面文本
            elements.forEach((element, index) => {
                element.textContent = translatedTexts[index];
            });

            initDisplayModeControls();

            progressBar.style.width = '100%';
            setTimeout(() => progressBar.remove(), 500);
        } catch (error) {
            console.error('翻译失败:', error);
            progressBar.style.backgroundColor = '#ff4d4f';
            setTimeout(() => progressBar.remove(), 2000);
        }
    }

    // 添加右键菜单
    function createContextMenu() {
        if (!CONFIG.enableRightClickMenu) return; // 如果配置为不启用右键菜单，直接返回
        
        // 移动端触摸相关变量
        let touchStartTime = 0;
        let touchTimer = null;
        let touchStartX = 0;
        let touchStartY = 0;
        const TOUCH_MOVE_THRESHOLD = 10; // 移动超过这个像素值则不触发菜单
        
        // 移动端触摸开始事件
        if (isMobile.any()) {
            document.addEventListener('touchstart', function(event) {
                // 记录触摸开始时间和位置
                touchStartTime = Date.now();
                touchStartX = event.touches[0].clientX;
                touchStartY = event.touches[0].clientY;
                
                // 清除之前可能存在的定时器
                if (touchTimer) clearTimeout(touchTimer);
                
                // 设置新的定时器
                touchTimer = setTimeout(function() {
                    const selection = window.getSelection();
                    const selectedText = selection.toString().trim();
                    
                    // 只在有文本选中时显示菜单
                    if (selectedText) {
                        // 显示翻译菜单
                        showTranslateMenu(event.touches[0].clientX, event.touches[0].clientY, selectedText);
                    }
                }, CONFIG.longPressDelay);
            }, { passive: true });
            
            // 触摸移动时，如果移动距离过大，取消菜单
            document.addEventListener('touchmove', function(event) {
                const moveX = Math.abs(event.touches[0].clientX - touchStartX);
                const moveY = Math.abs(event.touches[0].clientY - touchStartY);
                
                // 如果移动距离超过阈值，清除定时器
                if (moveX > TOUCH_MOVE_THRESHOLD || moveY > TOUCH_MOVE_THRESHOLD) {
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                        touchTimer = null;
                    }
                }
            }, { passive: true });
            
            // 触摸结束时清除定时器
            document.addEventListener('touchend', function() {
                if (touchTimer) {
                    clearTimeout(touchTimer);
                    touchTimer = null;
                }
            }, { passive: true });
            
            // 触摸取消时清除定时器
            document.addEventListener('touchcancel', function() {
                if (touchTimer) {
                    clearTimeout(touchTimer);
                    touchTimer = null;
                }
            }, { passive: true });
        }
        
        // 桌面端右键菜单
        if (!isMobile.any()) {
            document.addEventListener('contextmenu', function(event) {
                const selectedText = window.getSelection().toString().trim();
                if (selectedText) {
                    event.preventDefault();
                    showTranslateMenu(event.pageX, event.pageY, selectedText);
                }
            });
        }
        
        // 显示翻译菜单函数
        function showTranslateMenu(x, y, selectedText) {
            // 移除已存在的菜单
            const existingMenu = document.querySelector(`.${NAMESPACE}-context-menu`);
            if (existingMenu) {
                document.body.removeChild(existingMenu);
            }
            
            const contextMenu = document.createElement('div');
            contextMenu.className = `${NAMESPACE}-context-menu`;
            contextMenu.style.cssText = `
                position: fixed;
                z-index: 10000;
                background: white;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 5px 0;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                left: ${x}px;
                top: ${y}px;
            `;
            
            // 翻译选中文本选项
            const item = document.createElement('div');
            item.style.cssText = `
                padding: 10px 20px;
                cursor: pointer;
                font-size: 16px;
                &:hover {
                    background: #f0f0f0;
                }
            `;
            item.textContent = '翻译选中文本';
            item.addEventListener('click', async () => {
                try {
                    const result = await microsoftTranslate(selectedText);
                    alert(`翻译结果：\n${result}`);
                } catch (error) {
                    alert(`翻译失败：${error.message}`);
                }
                document.body.removeChild(contextMenu);
            });
            contextMenu.appendChild(item);
            
            // 添加翻译整页选项
            const separator = document.createElement('div');
            separator.style.borderTop = '1px solid #ccc';
            separator.style.margin = '5px 0';
            contextMenu.appendChild(separator);
            
            const translateFullPageItem = document.createElement('div');
            translateFullPageItem.style.cssText = `
                padding: 10px 20px;
                cursor: pointer;
                font-size: 16px;
                &:hover {
                    background: #f0f0f0;
                }
            `;
            translateFullPageItem.textContent = '翻译整个网页';
            translateFullPageItem.addEventListener('click', () => {
                translateFullPage();
                document.body.removeChild(contextMenu);
            });
            contextMenu.appendChild(translateFullPageItem);
            
            document.body.appendChild(contextMenu);
            
            // 点击其他地方关闭菜单
            const closeMenu = (e) => {
                if (!contextMenu.contains(e.target)) {
                    if (document.body.contains(contextMenu)) {
                        document.body.removeChild(contextMenu);
                    }
                    document.removeEventListener('click', closeMenu);
                    document.removeEventListener('touchstart', closeMenu);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closeMenu);
                document.addEventListener('touchstart', closeMenu, { passive: true });
            }, 0);
        }
    }

    // 注册设置菜单命令
    GM_registerMenuCommand('翻译设置', () => {
        const settingsPanel = document.querySelector(`.${NAMESPACE}-settings-panel`) || createSettingsPanel();
        settingsPanel.style.display = 'block';
    });

    // 翻译整个页面
    async function translateFullPage() {
        const translateBtn = document.getElementById(`${NAMESPACE}-translate-btn`);
        translateBtn.disabled = true;
        translateBtn.textContent = '正在翻译...';

        try {
            // 获取当前选中的目标语言
            const languageSelect = document.getElementById(`${NAMESPACE}-target-language`);
            const selectedLanguage = languageSelect ? languageSelect.value : CONFIG.targetLanguage;

            // 更新配置中的目标语言
            if (selectedLanguage !== CONFIG.targetLanguage) {
                CONFIG.targetLanguage = selectedLanguage;
                GM_setValue('translator_config', CONFIG);
            }

            await translatePage();
            translateBtn.textContent = '重新翻译';
            hasTranslated = true;
            currentDisplayMode = 'translated';
            updateDisplayModeStatus('translated');

            // 确保面板展开显示控制按钮
            const panel = document.querySelector(`.${NAMESPACE}-panel`);
            if (panel.classList.contains('collapsed')) {
                panel.classList.remove('collapsed');
            }

            document.getElementById(`${NAMESPACE}-display-mode-controls`).style.display = 'flex';
        } catch (error) {
            console.error('翻译失败:', error);
            alert('翻译失败：' + error.message);
            translateBtn.disabled = false;
            translateBtn.textContent = '翻译网页';
        }
    }

    // 保存翻译状态
    function saveTranslationState(elements, translations) {
        originalTexts.clear();
        translatedTexts.clear();

        elements.forEach((element, index) => {
            // 保存原始文本（在被翻译前）
            const originalText = element.textContent;
            originalTexts.set(element, originalText);
            translatedTexts.set(element, translations[index]);
        });

        hasTranslated = true;
    }

    // 初始化显示模式控制
    function initDisplayModeControls() {
        const displayModeControls = document.getElementById(`${NAMESPACE}-display-mode-controls`);
        if (!displayModeControls) return;

        const panel = document.querySelector(`.${NAMESPACE}-panel`);
        // 如果面板折叠或者未翻译过，不显示控制区域
        if ((panel && panel.classList.contains('collapsed')) || !hasTranslated) {
            displayModeControls.style.display = 'none';
        } else {
            // 否则显示
            displayModeControls.style.display = 'flex';
        }

        // 移除现有的事件监听器
        const cloneControls = displayModeControls.cloneNode(true);
        displayModeControls.parentNode.replaceChild(cloneControls, displayModeControls);

        // 显示原文按钮
        const originalBtn = cloneControls.querySelector(`#${NAMESPACE}-show-original`);
        if (originalBtn) {
            originalBtn.addEventListener('click', () => {
                showOriginalText();
                updateDisplayModeStatus('original');
            });
        }

        // 显示译文按钮
        const translatedBtn = cloneControls.querySelector(`#${NAMESPACE}-show-translated`);
        if (translatedBtn) {
            translatedBtn.addEventListener('click', () => {
                showTranslatedText();
                updateDisplayModeStatus('translated');
            });
        }

        // 显示双语按钮
        const dualBtn = cloneControls.querySelector(`#${NAMESPACE}-show-dual`);
        if (dualBtn) {
            dualBtn.addEventListener('click', () => {
                showDualText();
                updateDisplayModeStatus('dual');
            });
        }
    }

    // 更新显示模式按钮状态
    function updateDisplayModeStatus(activeMode) {
        const originalBtn = document.getElementById(`${NAMESPACE}-show-original`);
        const translatedBtn = document.getElementById(`${NAMESPACE}-show-translated`);
        const dualBtn = document.getElementById(`${NAMESPACE}-show-dual`);

        if (originalBtn && translatedBtn && dualBtn) {
            originalBtn.classList.toggle('active', activeMode === 'original');
            translatedBtn.classList.toggle('active', activeMode === 'translated');
            dualBtn.classList.toggle('active', activeMode === 'dual');
        }
    }

    // 创建设置面板
    function createSettingsPanel() {
        const existingPanel = document.querySelector(`.${NAMESPACE}-settings-panel`);
        if (existingPanel) {
            return existingPanel;
        }

        const panel = document.createElement('div');
        panel.className = `${NAMESPACE}-settings-panel`;
        panel.style.display = 'none';

        panel.innerHTML = `
            <h2>翻译设置</h2>
            <div class="${NAMESPACE}-close-btn">&times;</div>
            
            <div class="${NAMESPACE}-settings-group">
                <h3>基本设置</h3>
                <div class="${NAMESPACE}-settings-item">
                    <label>默认折叠面板</label>
                    <input type="checkbox" id="${NAMESPACE}-setting-collapsed" ${CONFIG.defaultCollapsed ? 'checked' : ''}>
                </div>
                <div class="${NAMESPACE}-settings-item">
                    <label>目标语言</label>
                    <select id="${NAMESPACE}-setting-target-language">
                        ${SUPPORTED_LANGUAGES.map(lang => 
                           `<option value="${lang.code}" ${lang.code === CONFIG.targetLanguage ? 'selected' : ''}>${lang.name}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="${NAMESPACE}-settings-item">
                    <label>启用右键菜单</label>
                    <input type="checkbox" id="${NAMESPACE}-setting-right-click-menu" ${CONFIG.enableRightClickMenu ? 'checked' : ''}>
                </div>
                <div class="${NAMESPACE}-settings-item">
                    <label>长按响应延迟(毫秒)</label>
                    <input type="number" id="${NAMESPACE}-setting-long-press-delay" value="${CONFIG.longPressDelay}" min="500" max="2000" step="100">
                </div>
            </div>
            
            <div class="${NAMESPACE}-settings-group">
                <h3>微软翻译设置</h3>
                <div class="${NAMESPACE}-settings-item">
                    <label>API 密钥</label>
                    <input type="text" id="${NAMESPACE}-setting-ms-key" value="${CONFIG。microsoftKey || ''}">
                </div>
                <div class="${NAMESPACE}-settings-item">
                    <label>API 区域</label>
                    <input type="text" id="${NAMESPACE}-setting-ms-region" value="${CONFIG。microsoftRegion || 'global'}">
                </div>
                <div class="${NAMESPACE}-settings-item">
                    <label>使用中国区服务器</label>
                    <input type="checkbox" id="${NAMESPACE}-setting-use-cn" ${CONFIG。useChineseServer ? 'checked' : ''}>
                </div>
                <p class="${NAMESPACE}-settings-tip">提示: 微软翻译API密钥可选，若不填写则尝试使用Edge浏览器免费token</p>
            </div>
            
            <div class="${NAMESPACE}-controls">
                <button class="${NAMESPACE}-btn" id="${NAMESPACE}-settings-save">保存设置</button>
            </div>
        `;

        document.body.appendChild(panel);

        // 关闭按钮事件
        panel.querySelector(`.${NAMESPACE}-close-btn`).addEventListener('click', () => {
            panel.style.display = 'none';
        });

        // 保存设置按钮事件
        document.getElementById(`${NAMESPACE}-settings-save`).addEventListener('click', () => {
            // 保存基本设置
            CONFIG.defaultCollapsed = document.getElementById(`${NAMESPACE}-setting-collapsed`).checked;
            CONFIG.targetLanguage = document.getElementById(`${NAMESPACE}-setting-target-language`).value;
            CONFIG.enableRightClickMenu = document.getElementById(`${NAMESPACE}-setting-right-click-menu`).checked;
            CONFIG.longPressDelay = parseInt(document.getElementById(`${NAMESPACE}-setting-long-press-delay`).value) || 800;
            
            // 保存微软翻译设置
            CONFIG.microsoftKey = document.getElementById(`${NAMESPACE}-setting-ms-key`).value;
            CONFIG.microsoftRegion = document.getElementById(`${NAMESPACE}-setting-ms-region`).value || 'global';
            CONFIG.useChineseServer = document.getElementById(`${NAMESPACE}-setting-use-cn`).checked;

            // 保存到存储
            GM_setValue('translator_config', CONFIG);
            
            alert('设置已保存');
            panel.style.display = 'none';
            
            // 刷新页面以应用新设置
            // location.reload();
        });

        return panel;
    }
})();
