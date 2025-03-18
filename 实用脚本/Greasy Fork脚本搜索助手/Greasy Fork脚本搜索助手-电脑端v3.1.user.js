// ==UserScript==
// @name         Greasy Fork脚本搜索助手-电脑端
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  [电脑端专用] 右侧悬浮按钮+智能域名+镜像站支持
// @author       DeepSeek
// @match        *://*/*
// @license      MIT
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    // 配置项 (用户可自定义部分)
    const config = {
        baseUrl: 'https://gfork.dahi.icu/zh-CN',  // 镜像站地址
        buttonIcon: '🔍',                          // 搜索图标
        buttonColor: '#00BCD4',                   // 青色主题色
        hoverDelay: 2000,                         // 自动隐藏延迟(毫秒)
        initialDelay: 1500                        // 初始显示时间(毫秒)
    };

    // 悬浮按钮样式 (电脑端专用)
    GM_addStyle(`
        #scriptSearchBtn {
            position: fixed;
            right: 0;
            bottom: 25px;
            z-index: 2147483647;
            width: 55px;
            height: 55px;
            border-radius: 50% 0 0 50%;
            background: ${config.buttonColor};
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,188,212,0.3);
            font-size: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            transform: translateX(0);
        }
        #scriptSearchBtn.collapsed {
            transform: translateX(40px);
        }
        #scriptSearchBtn:hover {
            transform: translateX(0) scale(1.15);
            box-shadow: 0 6px 16px rgba(0,188,212,0.4);
        }
        #scriptSearchBtn.collapsed:hover {
            transform: translateX(0);
        }
    `);

    // 智能域名处理 (强化去前缀逻辑)
    const getCleanDomain = (hostname) => {
        // 处理IP地址
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) return hostname;

        // 分步处理
        return hostname
            .replace(/^([a-z]+\.)*?(www\d*|m|mobile|web|wap)\./i, '')  // 移除所有前缀
            .split('.')
            .slice(-2)    // 取最后两部分
            .join('.')
            .replace(/\.$/, '');  // 防止空字符
    };

    // 创建按钮 (电脑端优化)
    const createButton = () => {
        const btn = document.createElement('button');
        btn.id = 'scriptSearchBtn';
        btn.title = '点击搜索本站脚本 (' + getCleanDomain(location.hostname) + ')';
        btn.textContent = config.buttonIcon;
        
        // 鼠标事件处理
        let timeout;
        
        btn.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            btn.classList.remove('collapsed');
        });
        
        btn.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                btn.classList.add('collapsed');
            }, config.hoverDelay);
        });
        
        // 点击执行搜索
        btn.addEventListener('click', startSearch);

        // 初始状态设置为显示，然后自动折叠
        setTimeout(() => {
            btn.classList.add('collapsed');
        }, config.initialDelay);
        
        return btn;
    };

    // 执行搜索
    const startSearch = () => {
        const domain = getCleanDomain(location.hostname);
        const searchUrl = `${config.baseUrl}/scripts/by-site/${encodeURIComponent(domain)}`;
        window.open(searchUrl, '_blank');
    };

    // 初始化
    (function init() {
        // 添加悬浮按钮
        const btn = createButton();
        document.body.appendChild(btn);

        // 注册菜单命令
        GM_registerMenuCommand('🔍 搜索 ' + getCleanDomain(location.hostname) + ' 脚本', startSearch);
    })();
})(); 