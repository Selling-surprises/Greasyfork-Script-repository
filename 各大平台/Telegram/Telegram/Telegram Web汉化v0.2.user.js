// ==UserScript==
// @name         Telegram Web汉化
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动实时汉化Telegram网页版，无需界面操作
// @author       Your name
// @match        https://web.telegram.org/*
// @match        https://web.telegram.org/k/*
// @match        https://web.telegram.org/z/*
// @match        https://web.telegram.org/a/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      api.cognitive.microsofttranslator.com
// @connect      edge.microsoft.com
// @connect      api.translator.azure.cn
// @connect      translate.googleapis.com
// @connect      *
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';

    // 全局状态变量
    let originalTexts = new Map();
    let translatedTexts = new Map();
    let nodesToTranslate = new Set();
    let isTranslating = false;
    let detectedLanguage = '';
    let currentTranslateEngine = 'microsoft'; // 当前使用的翻译引擎：'microsoft' 或 'google'

    // 添加命名空间前缀，避免与其他脚本冲突
    const NAMESPACE = 'tg-translator';

    // 目标语言设置
    const TARGET_LANGUAGE = 'zh-Hans'; // 微软翻译使用的语言代码
    const GOOGLE_TARGET_LANGUAGE = 'zh-CN'; // 谷歌翻译使用的语言代码

    // 需要过滤的选择器
    const IGNORED_SELECTORS = [
        'script', 
        'style', 
        '.reaction-emoji', 
        'code',
        'time',
        'svg',
        '[contenteditable="true"]',
        'input',
        'textarea'
    ].join(', ');

    // 不需要翻译的文本内容正则
    const IGNORED_TEXT_PATTERNS = [
        /^\d+$/,           // 纯数字
        /^[\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2300-\u23FF]|[\u2500-\u26FF]|\p{Emoji}$/u, // emoji
        /^https?:\/\//,    // URL
        /^@[\w]+$/,        // 用户名 @xxx
        /^#[\w]+$/,        // 标签 #xxx
        /^$/               // 空文本
    ];

    // 添加CSS样式
    GM_addStyle(`
        .${NAMESPACE}-progress-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(240, 240, 240, 0.5);
            z-index: 10000;
            pointer-events: none;
        }
        
        .${NAMESPACE}-progress-bar {
            height: 100%;
            width: 0;
            background: #3390EC; /* Telegram主题蓝色 */
            transition: width 0.2s ease;
        }
        
        .${NAMESPACE}-status {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(51, 144, 236, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 10000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .${NAMESPACE}-status.show {
            opacity: 1;
        }
    `);

    // 在页面加载完成后初始化
    window.addEventListener('load', () => {
        console.log('Telegram Web汉化脚本已启动');
        
        // 初始翻译
        setTimeout(() => {
            translateVisibleContent();
            
            // 设置观察器监控DOM变化
            setupMutationObserver();
        }, 1500);
    });

    // 创建进度条
    function createProgressBar() {
        // 检查是否已存在进度条
        if (document.querySelector(`.${NAMESPACE}-progress-container`)) {
            return document.querySelector(`.${NAMESPACE}-progress-container`);
        }
        
        const progressContainer = document.createElement('div');
        progressContainer.className = `${NAMESPACE}-progress-container`;
        
        const progressBar = document.createElement('div');
        progressBar.className = `${NAMESPACE}-progress-bar`;
        
        progressContainer.appendChild(progressBar);
        document.body.appendChild(progressContainer);
        
        return progressContainer;
    }
    
    // 创建状态指示器
    function createStatusIndicator() {
        // 检查是否已存在状态指示器
        if (document.querySelector(`.${NAMESPACE}-status`)) {
            return document.querySelector(`.${NAMESPACE}-status`);
        }
        
        const status = document.createElement('div');
        status.className = `${NAMESPACE}-status`;
        document.body.appendChild(status);
        
        return status;
    }
    
    // 更新进度条
    function updateProgress(percent, statusText) {
        const progressContainer = document.querySelector(`.${NAMESPACE}-progress-container`);
        const progressBar = progressContainer?.querySelector(`.${NAMESPACE}-progress-bar`);
        const statusIndicator = document.querySelector(`.${NAMESPACE}-status`);
        
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        
        if (statusIndicator && statusText) {
            statusIndicator.textContent = statusText;
            statusIndicator.classList.add('show');
            
            // 3秒后自动隐藏状态指示器
            setTimeout(() => {
                statusIndicator.classList.remove('show');
            }, 3000);
        }
    }

    // 设置DOM变化监听
    function setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldTranslate = false;
            
            mutations.forEach(mutation => {
                // 检查节点添加
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE && !shouldIgnore(node)) {
                            collectTextNodes(node);
                            shouldTranslate = true;
                        }
                    });
                }
                
                // 检查文本变化
                if (mutation.type === 'characterData' && 
                    mutation.target.nodeType === Node.TEXT_NODE && 
                    !shouldIgnoreNode(mutation.target)) {
                    nodesToTranslate.add(mutation.target);
                    shouldTranslate = true;
                }
            });
            
            if (shouldTranslate && nodesToTranslate.size > 0) {
                // 使用防抖动方式处理翻译，避免频繁翻译
                debounceTranslate();
            }
        });
        
        // 监听整个文档的变化
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        console.log('DOM变化监听已设置');
    }
    
    // 防抖动翻译函数
    const debounceTranslate = (() => {
        let timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                processTranslationQueue();
            }, 300);
        };
    })();

    // 判断节点是否应该被忽略
    function shouldIgnore(element) {
        if (!(element instanceof Element)) return false;
        
        // 检查是否匹配忽略选择器
        if (element.matches && element.matches(IGNORED_SELECTORS)) {
            return true;
        }
        
        // 检查父元素是否匹配忽略选择器
        if (element.closest && element.closest(IGNORED_SELECTORS)) {
            return true;
        }
        
        return false;
    }
    
    // 判断文本节点是否应该被忽略
    function shouldIgnoreNode(node) {
        if (node.nodeType !== Node.TEXT_NODE) return true;
        
        const text = node.textContent.trim();
        
        // 忽略空文本或只有空白字符的文本
        if (!text) return true;
        
        // 忽略匹配正则模式的文本
        for (const pattern of IGNORED_TEXT_PATTERNS) {
            if (pattern.test(text)) return true;
        }
        
        // 忽略特定父元素下的文本
        const parent = node.parentElement;
        if (!parent) return true;
        
        if (shouldIgnore(parent)) return true;
        
        return false;
    }

    // 收集页面中可见的文本节点
    function collectTextNodes(rootNode = document.body) {
        const walker = document.createTreeWalker(
            rootNode,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (shouldIgnoreNode(node)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;
        while (node = walker.nextNode()) {
            // 检查节点是否已经翻译过
            if (!translatedTexts.has(node)) {
                nodesToTranslate.add(node);
            }
        }
        
        return nodesToTranslate.size;
    }

    // 翻译当前可见内容
    function translateVisibleContent() {
        console.log('开始翻译可见内容');
        
        // 清空待翻译节点集合
        nodesToTranslate.clear();
        
        // 收集待翻译节点
        const nodesCount = collectTextNodes();
        console.log(`收集到 ${nodesCount} 个待翻译节点`);
        
        // 如果有节点需要翻译，则处理翻译队列
        if (nodesCount > 0) {
            // 创建进度条和状态指示器
            createProgressBar();
            createStatusIndicator();
            
            // 更新初始进度
            updateProgress(0, `准备翻译 ${nodesCount} 个文本`);
            
            processTranslationQueue();
        }
    }

    // 处理翻译队列
    async function processTranslationQueue() {
        if (isTranslating || nodesToTranslate.size === 0) return;
        
        isTranslating = true;
        
        try {
            const nodes = Array.from(nodesToTranslate);
            const textsToTranslate = nodes.map(node => node.textContent.trim()).filter(text => text);
            const totalTexts = textsToTranslate.length;
            
            if (totalTexts === 0) {
                isTranslating = false;
                nodesToTranslate.clear();
                
                // 翻译完成，隐藏进度条
                updateProgress(100, '翻译完成');
                setTimeout(() => {
                    const progressContainer = document.querySelector(`.${NAMESPACE}-progress-container`);
                    if (progressContainer) {
                        progressContainer.style.opacity = '0';
                        setTimeout(() => {
                            progressContainer.style.display = 'none';
                        }, 500);
                    }
                }, 1000);
                
                return;
            }
            
            // 显示进度条和初始状态
            const progressContainer = createProgressBar();
            progressContainer.style.display = 'block';
            progressContainer.style.opacity = '1';
            
            updateProgress(0, `开始翻译 ${totalTexts} 个文本`);
            console.log(`开始翻译 ${totalTexts} 个文本`);
            
            // 批量翻译
            const batchSize = 50;
            let processedCount = 0;
            
            for (let i = 0; i < nodes.length; i += batchSize) {
                const batchNodes = nodes.slice(i, i + batchSize);
                const batchTexts = batchNodes.map(node => node.textContent.trim()).filter(text => text);
                
                if (batchTexts.length === 0) continue;
                
                try {
                    // 更新进度
                    const percent = Math.min(Math.round((processedCount / totalTexts) * 100), 99);
                    updateProgress(percent, `翻译中 ${processedCount}/${totalTexts}`);
                    
                    let translations;
                    
                    // 首先尝试使用微软翻译
                    try {
                        translations = await microsoftTranslate(batchTexts);
                        currentTranslateEngine = 'microsoft';
                    } catch (microsoftError) {
                        console.log('微软翻译失败，尝试使用谷歌翻译:', microsoftError);
                        
                        // 微软翻译失败，尝试使用谷歌翻译
                        try {
                            translations = await googleTranslate(batchTexts);
                            currentTranslateEngine = 'google';
                            console.log('谷歌翻译成功');
                        } catch (googleError) {
                            console.error('谷歌翻译也失败:', googleError);
                            throw new Error('所有翻译服务都失败');
                        }
                    }
                    
                    // 更新节点文本和缓存
                    batchNodes.forEach((node, index) => {
                        const originalText = node.textContent.trim();
                        if (!originalText) return;
                        
                        const translation = translations[index];
                        if (translation && translation !== originalText) {
                            // 保存原始文本和翻译文本
                            originalTexts.set(node, originalText);
                            translatedTexts.set(node, translation);
                            
                            // 更新节点文本
                            node.textContent = translation;
                        }
                        
                        // 从待翻译集合中移除已处理的节点
                        nodesToTranslate.delete(node);
                        processedCount++;
                    });
                    
                    // 更新进度
                    const currentPercent = Math.min(Math.round((processedCount / totalTexts) * 100), 99);
                    const engineName = currentTranslateEngine === 'microsoft' ? '微软' : '谷歌';
                    updateProgress(currentPercent, `${engineName}翻译中 ${processedCount}/${totalTexts}`);
                    
                } catch (error) {
                    console.error('批量翻译出错:', error);
                    updateProgress(100, '翻译出错');
                    break;
                }
            }
            
            // 翻译完成
            const engineName = currentTranslateEngine === 'microsoft' ? '微软' : '谷歌';
            updateProgress(100, `${engineName}翻译完成 (${processedCount}/${totalTexts})`);
            
            // 延迟隐藏进度条
            setTimeout(() => {
                const progressContainer = document.querySelector(`.${NAMESPACE}-progress-container`);
                if (progressContainer) {
                    progressContainer.style.opacity = '0';
                    setTimeout(() => {
                        progressContainer.style.display = 'none';
                    }, 500);
                }
            }, 1000);
            
        } catch (error) {
            console.error('处理翻译队列出错:', error);
            updateProgress(100, '翻译出错');
        } finally {
            isTranslating = false;
            
            // 如果还有未处理的节点，继续处理
            if (nodesToTranslate.size > 0) {
                setTimeout(processTranslationQueue, 100);
            }
        }
    }

    // Microsoft Translator API实现
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

        // 先尝试通过Edge获取免费token
        try {
            const authResponse = await fetch('https://edge.microsoft.com/translate/auth', {
                method: 'GET'
            });

            if (authResponse.ok) {
                const authToken = await authResponse.text();

                if (authToken && authToken.length > 10) {
                    // 使用免费token进行翻译
                    const apiUrl = `https://api-edge.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${TARGET_LANGUAGE}&includeSentenceLength=true`;

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
                    } else {
                        throw new Error(`微软翻译API请求失败: ${response.status} ${response.statusText}`);
                    }
                }
            }

            // 如果免费token方式失败，记录日志并抛出异常
            console.log('Edge免费Token方式失败');
            throw new Error('无法获取Edge翻译Token');
        } catch (error) {
            console.log('微软翻译失败:', error);
            throw error; // 重新抛出错误以便调用者可以尝试备用翻译
        }
    }
    
    // 谷歌翻译API实现 (使用谷歌浏览器的翻译接口)
    async function googleTranslate(texts) {
        // 检查是否为数组，如果不是则转换为数组
        const textArray = Array.isArray(texts) ? texts : [texts];
        
        // 过滤空文本
        const filteredTexts = textArray.filter(text => text && text.trim() !== '');
        if (filteredTexts.length === 0) {
            return Array.isArray(texts) ? Array(texts.length).fill('') : '';
        }
        
        try {
            // 将文本批量处理，每次最多5个请求并行处理
            const maxParallel = 5;
            const results = [];
            
            for (let i = 0; i < filteredTexts.length; i += maxParallel) {
                const batch = filteredTexts.slice(i, i + maxParallel);
                const promises = batch.map(text => translateSingleText(text));
                
                // 并行处理当前批次
                const batchResults = await Promise.all(promises);
                results.push(...batchResults);
            }
            
            // 返回结果，保持原始数组结构
            if (Array.isArray(texts)) {
                return texts.map(text => {
                    if (!text || text.trim() === '') return '';
                    const filteredIndex = filteredTexts.indexOf(text);
                    return filteredIndex !== -1 ? results[filteredIndex] : '';
                });
            } else {
                return results[0] || '';
            }
        } catch (error) {
            console.error('谷歌翻译错误:', error);
            throw error;
        }
        
        // 翻译单个文本的辅助函数
        async function translateSingleText(text) {
            try {
                // 构建谷歌翻译请求URL (模拟浏览器使用的接口)
                const params = new URLSearchParams({
                    client: 'gtx',
                    sl: 'auto', // 源语言自动检测
                    tl: GOOGLE_TARGET_LANGUAGE,
                    dt: 't',    // 要求翻译结果
                    q: text     // 待翻译文本
                });
                
                const url = `https://translate.googleapis.com/translate_a/single?${params.toString()}`;
                
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`谷歌翻译API请求失败: ${response.status} ${response.statusText}`);
                }
                
                const result = await response.json();
                
                // 谷歌翻译API返回的结构是一个嵌套数组，提取翻译结果
                if (result && result[0] && result[0][0] && result[0][0][0]) {
                    return result[0][0][0];
                }
                
                return text; // 如果无法解析结果，返回原文
            } catch (error) {
                console.error(`翻译文本 "${text}" 时出错:`, error);
                return text; // 出错时返回原文
            }
        }
    }
    
    // 备用谷歌翻译方法 - 使用GM_xmlhttpRequest以绕过跨域限制
    async function googleTranslateWithGM(texts) {
        // 检查是否为数组，如果不是则转换为数组
        const textArray = Array.isArray(texts) ? texts : [texts];
        
        // 过滤空文本
        const filteredTexts = textArray.filter(text => text && text.trim() !== '');
        if (filteredTexts.length === 0) {
            return Array.isArray(texts) ? Array(texts.length).fill('') : '';
        }
        
        try {
            // 将文本批量处理，每次最多5个请求并行处理
            const maxParallel = 5;
            const results = [];
            
            for (let i = 0; i < filteredTexts.length; i += maxParallel) {
                const batch = filteredTexts.slice(i, i + maxParallel);
                const promises = batch.map(text => translateSingleTextWithGM(text));
                
                // 并行处理当前批次
                const batchResults = await Promise.all(promises);
                results.push(...batchResults);
            }
            
            // 返回结果，保持原始数组结构
            if (Array.isArray(texts)) {
                return texts.map(text => {
                    if (!text || text.trim() === '') return '';
                    const filteredIndex = filteredTexts.indexOf(text);
                    return filteredIndex !== -1 ? results[filteredIndex] : '';
                });
            } else {
                return results[0] || '';
            }
        } catch (error) {
            console.error('谷歌翻译错误 (GM方式):', error);
            throw error;
        }
        
        // 翻译单个文本的辅助函数，使用GM_xmlhttpRequest
        function translateSingleTextWithGM(text) {
            return new Promise((resolve, reject) => {
                // 构建谷歌翻译请求URL
                const params = new URLSearchParams({
                    client: 'gtx',
                    sl: 'auto', // 源语言自动检测
                    tl: GOOGLE_TARGET_LANGUAGE,
                    dt: 't',    // 要求翻译结果
                    q: text     // 待翻译文本
                });
                
                const url = `https://translate.googleapis.com/translate_a/single?${params.toString()}`;
                
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: url,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
                    },
                    onload: function(response) {
                        if (response.status >= 200 && response.status < 300) {
                            try {
                                const result = JSON.parse(response.responseText);
                                // 谷歌翻译API返回的结构是一个嵌套数组，提取翻译结果
                                if (result && result[0] && result[0][0] && result[0][0][0]) {
                                    resolve(result[0][0][0]);
                                } else {
                                    console.warn('无法从谷歌翻译结果中提取翻译:', result);
                                    resolve(text);
                                }
                            } catch (error) {
                                console.error('解析谷歌翻译响应时出错:', error);
                                resolve(text);
                            }
                        } else {
                            console.error('谷歌翻译请求失败:', response.status, response.statusText);
                            resolve(text);
                        }
                    },
                    onerror: function(error) {
                        console.error('谷歌翻译请求出错:', error);
                        resolve(text);
                    },
                    ontimeout: function() {
                        console.error('谷歌翻译请求超时');
                        resolve(text);
                    }
                });
            });
        }
    }

    // 生成UUID用于微软API请求
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
})();