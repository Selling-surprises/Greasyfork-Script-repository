// ==UserScript==
// @name         网站URL简化|去除杂乱参数
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  自动清理必应搜索、B站视频、百度搜索、KIMI AI和360搜索等的URL中的多余参数，优化浏览体验
// @author       Your name
// @license      MIT
// @match        https://cn.bing.com/search*
// @match        https://www.bilibili.com/video/*
// @match        https://www.baidu.com/s*
// @match        https://kimi.moonshot.cn/*
// @match        https://minecraft.fandom.com/*
// @match        https://www.so.com/s*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-start
// @priority     1
// @icon         data:image/x-icon;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMjIyLjQ0NHEzMzOvMzMz5TMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM+UzMzOuMjIycDMzMy0AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwMDAQNDQ0IjIyMkgzMzOCMzMzszIyMtozMzPxNDQ0/DQ0NPwzMzPxMjIy2jMzM7MzMzODMjIySDQ0NCIwMDAQAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==
// @downloadURL https://update.greasyfork.org/scripts/524527/%E7%BD%91%E7%AB%99URL%E7%AE%80%E5%8C%96%7C%E5%8E%BB%E9%99%A4%E6%9D%82%E4%B9%B1%E5%8F%82%E6%95%B0.user.js
// @updateURL https://update.greasyfork.org/scripts/524527/%E7%BD%91%E7%AB%99URL%E7%AE%80%E5%8C%96%7C%E5%8E%BB%E9%99%A4%E6%9D%82%E4%B9%B1%E5%8F%82%E6%95%B0.meta.js
// ==/UserScript==

/* MIT License

Copyright (c) 2024 Your name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function() {
    'use strict';

    // 默认设置
    const defaultSettings = {
        enableCleaner: true,
        enableBing: true,
        enableBilibili: true,
        enableBaidu: true,
        enableKimi: true,
        enableMinecraft: true,
        enable360: true    // 添加360搜索设置
    };

    // 获取设置
    function getSettings() {
        return {
            enableCleaner: GM_getValue('enableCleaner', defaultSettings.enableCleaner),
            enableBing: GM_getValue('enableBing', defaultSettings.enableBing),
            enableBilibili: GM_getValue('enableBilibili', defaultSettings.enableBilibili),
            enableBaidu: GM_getValue('enableBaidu', defaultSettings.enableBaidu),
            enableKimi: GM_getValue('enableKimi', defaultSettings.enableKimi),
            enableMinecraft: GM_getValue('enableMinecraft', defaultSettings.enableMinecraft),
            enable360: GM_getValue('enable360', defaultSettings.enable360)
        };
    }

    // 切换设置并返回新状态
    function toggleSetting(key) {
        const currentValue = GM_getValue(key, defaultSettings[key]);
        GM_setValue(key, !currentValue);
        return !currentValue;
    }

    // 注册菜单命令
    function registerMenuCommands() {
        const settings = getSettings();
        
        GM_registerMenuCommand(
            `${settings.enableCleaner ? '✅' : '❌'} 启用URL清理`,
            () => {
                toggleSetting('enableCleaner');
                location.reload(); // 重新加载页面来刷新菜单
            }
        );

        GM_registerMenuCommand(
            `${settings.enableBing ? '✅' : '❌'} 必应搜索`,
            () => {
                toggleSetting('enableBing');
                location.reload(); // 重新加载页面来刷新菜单
            }
        );

        GM_registerMenuCommand(
            `${settings.enableBilibili ? '✅' : '❌'} B站视频`,
            () => {
                toggleSetting('enableBilibili');
                location.reload(); // 重新加载页面来刷新菜单
            }
        );

        GM_registerMenuCommand(
            `${settings.enableBaidu ? '✅' : '❌'} 百度搜索`,
            () => {
                toggleSetting('enableBaidu');
                location.reload();
            }
        );

        GM_registerMenuCommand(
            `${settings.enableKimi ? '✅' : '❌'} KIMI AI`,
            () => {
                toggleSetting('enableKimi');
                location.reload();
            }
        );

        GM_registerMenuCommand(
            `${settings.enableMinecraft ? '✅' : '❌'} Minecraft Wiki重定向`,
            () => {
                toggleSetting('enableMinecraft');
                location.reload();
            }
        );

        GM_registerMenuCommand(
            `${settings.enable360 ? '✅' : '❌'} 360搜索`,
            () => {
                toggleSetting('enable360');
                location.reload();
            }
        );
    }

    // 清理URL的函数
    function cleanUrl(url) {
        try {
            const settings = getSettings();
            if (!settings.enableCleaner) {
                return url;
            }

            const urlObj = new URL(url);

            // 处理Minecraft Wiki重定向
            if (settings.enableMinecraft && urlObj.hostname === 'minecraft.fandom.com') {
                const pathParts = urlObj.pathname.split('/');
                let newUrl;
                
                if (pathParts[1] === 'wiki') {
                    const pageName = pathParts.slice(2).join('/');
                    newUrl = `https://en.minecraft.wiki/w/${pageName}`;
                } else if (pathParts[2] === 'wiki') {
                    const lang = pathParts[1];
                    const pageName = pathParts.slice(3).join('/');
                    newUrl = `https://${lang}.minecraft.wiki/w/${pageName}`;
                }

                if (newUrl && newUrl !== url) {
                    window.location.href = newUrl;
                    return url;
                }
            }

            // 处理KIMI AI URL
            if (settings.enableKimi && urlObj.hostname === 'kimi.moonshot.cn') {
                if (urlObj.pathname === '/' || urlObj.pathname === '') {
                    const newUrl = 'https://kimi.moonshot.cn/';
                    if (newUrl !== url) {
                        window.location.href = newUrl;
                        return url;
                    }
                    return newUrl;
                }
            }

            // 处理百度搜索URL
            if (settings.enableBaidu && urlObj.hostname === 'www.baidu.com' && urlObj.pathname === '/s') {
                const wd = urlObj.searchParams.get('wd');
                const pn = urlObj.searchParams.get('pn');

                if (wd) {
                    let newUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(wd)}`;
                    if (pn) {
                        newUrl += `&pn=${pn}`;
                    }
                    if (newUrl !== url) {
                        window.location.href = newUrl;
                        return url;
                    }
                    return newUrl;
                }
            }

            // 处理Bing搜索URL
            if (settings.enableBing && urlObj.hostname === 'cn.bing.com' && urlObj.pathname === '/search') {
                const searchQuery = urlObj.searchParams.get('q');
                const firstParam = urlObj.searchParams.get('first');

                if (searchQuery) {
                    let newUrl = `https://cn.bing.com/search?q=${encodeURIComponent(searchQuery)}`;
                    if (firstParam) {
                        newUrl += `&first=${firstParam}`;
                    }
                    if (newUrl !== url) {
                        window.location.href = newUrl;
                        return url;
                    }
                    return newUrl;
                }
            }

            // 处理B站视频URL
            if (settings.enableBilibili && urlObj.hostname === 'www.bilibili.com' && urlObj.pathname.startsWith('/video/')) {
                const bvMatch = urlObj.pathname.match(/\/video\/(BV[\w]+)/);
                if (bvMatch) {
                    const bvid = bvMatch[1];
                    const newUrl = `https://www.bilibili.com/video/${bvid}`;
                    if (newUrl !== url) {
                        window.location.href = newUrl;
                        return url;
                    }
                    return newUrl;
                }
            }

            // 处理360搜索URL
            if (settings.enable360 && urlObj.hostname === 'www.so.com' && urlObj.pathname === '/s') {
                const q = urlObj.searchParams.get('q');
                const pn = urlObj.searchParams.get('pn');

                if (q) {
                    let newUrl = `https://www.so.com/s?q=${encodeURIComponent(q)}`;
                    if (pn) {
                        newUrl += `&pn=${pn}`;
                    }
                    if (newUrl !== url) {
                        window.location.href = newUrl;
                        return url;
                    }
                    return newUrl;
                }
            }

            return url;
        } catch (error) {
            console.error('URL处理错误:', error);
            return url;
        }
    }

    // 检查并清理当前URL
    function checkAndCleanUrl() {
        const currentUrl = window.location.href;
        const cleanedUrl = cleanUrl(currentUrl);
        
        if (cleanedUrl !== currentUrl) {
            // 使用 history.replaceState 来更新URL而不刷新页面
            window.history.replaceState(null, '', cleanedUrl);
        }
    }

    // 监听URL变化
    let lastUrl = window.location.href;
    new MutationObserver(() => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            checkAndCleanUrl();
        }
    }).observe(document, {subtree: true, childList: true});

    // 处理必应搜索结果中的Minecraft Wiki链接
    function processBingSearchResults() {
        if (!window.location.href.includes('bing.com/search')) return;
        
        // 获取主搜索结果容器
        const mainResults = document.getElementById('b_results');
        if (!mainResults) return;
        
        // 获取所有未处理的搜索结果链接
        const searchResults = mainResults.querySelectorAll('a[href*="minecraft.fandom.com"]:not([data-wiki-processed])');
        
        searchResults.forEach(link => {
            try {
                // 标记该链接已处理
                link.setAttribute('data-wiki-processed', 'true');
                
                const url = new URL(link.href);
                if (url.hostname === 'minecraft.fandom.com') {
                    const pathParts = url.pathname.split('/');
                    let newUrl;
                    
                    // 构建新的Wiki URL
                    if (pathParts[1] === 'wiki') {
                        const pageName = pathParts.slice(2).join('/');
                        newUrl = `https://en.minecraft.wiki/w/${pageName}`;
                    } else if (pathParts[2] === 'wiki') {
                        const lang = pathParts[1];
                        const pageName = pathParts.slice(3).join('/');
                        newUrl = `https://${lang}.minecraft.wiki/w/${pageName}`;
                    }

                    if (newUrl) {
                        // 获取搜索结果容器
                        const resultContainer = link.closest('li') || link.parentElement;
                        
                        // 设置结果容器样式
                        resultContainer.style.position = 'relative';
                        resultContainer.style.color = '#666';
                        resultContainer.style.pointerEvents = 'none';

                        // 创建新链接提示
                        const notice = document.createElement('div');
                        notice.style.cssText = `
                            margin-top: 8px;
                            padding: 8px;
                            background: #f8f8f8;
                            border-radius: 4px;
                            pointer-events: auto;
                        `;
                        notice.innerHTML = `
                            <div style="color: #e74c3c; font-size: 0.9em; margin-bottom: 4px;">
                                ⚠️ 上述链接指向已弃用的旧版Wiki
                            </div>
                            <a href="${newUrl}" style="
                                display: inline-block;
                                color: #2ecc71;
                                font-weight: bold;
                                text-decoration: none;
                            ">
                                👉 访问新版Wiki页面
                            </a>
                        `;

                        // 添加新链接提示
                        resultContainer.appendChild(notice);
                    }
                }
            } catch (error) {
                console.error('处理搜索结果链接时出错:', error);
            }
        });
    }

    // 使用防抖函数来限制处理频率
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 监听页面变化以处理动态加载的搜索结果
    function observeSearchResults() {
        const debouncedProcess = debounce(processBingSearchResults, 300);

        // 创建观察器
        const observer = new MutationObserver(() => {
            if (document.getElementById('b_results')) {
                debouncedProcess();
            }
        });

        // 观察整个body
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // 首次处理
        processBingSearchResults();

        // 监听URL变化
        let lastUrl = location.href;
        const urlChecker = setInterval(() => {
            if (location.href !== lastUrl) {
                lastUrl = location.href;
                processBingSearchResults();
            }
        }, 500);

        // 清理函数
        return () => {
            observer.disconnect();
            clearInterval(urlChecker);
        };
    }

    // 初始化
    function init() {
        registerMenuCommands();
        checkAndCleanUrl();
        
        // 如果是必应搜索页面，处理搜索结果
        if (window.location.href.includes('bing.com/search')) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', observeSearchResults);
            } else {
                observeSearchResults();
            }
        }
    }

    init();
})(); 
