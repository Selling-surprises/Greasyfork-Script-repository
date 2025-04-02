// ==UserScript==
// @name         Greasy Fork脚本搜索助手-移动端
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  [移动端优化] 悬浮按钮+智能域名+镜像站支持
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
        baseUrl: 'https://gf.qytechs.cn/zh-CN',  // 镜像站地址
        buttonIcon: '🔍',                          // 正确显示搜索图标
        buttonColor: '#00BCD4',                   // 青色主题色
        isCollapsed: false,                       // 按钮折叠状态
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  // 检测移动设备
    };

    // 自适应移动设备样式
    GM_addStyle(`
        #scriptSearchBtn {
            position: fixed;
            z-index: 2147483647;
            width: 55px;
            height: 55px;
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
        }
        
        /* 移动设备样式 */
        @media (max-width: 768px) {
            #scriptSearchBtn {
                left: 0;
                bottom: 120px; /* 避开底部导航栏 */
                border-radius: 0 50% 50% 0;
                transform: translateX(0);
            }
            #scriptSearchBtn.collapsed {
                transform: translateX(-40px);
            }
            #scriptSearchBtn:hover, #scriptSearchBtn:active {
                transform: translateX(0) scale(1.05);
                box-shadow: 0 6px 16px rgba(0,188,212,0.4);
            }
            #scriptSearchBtn.collapsed:hover, #scriptSearchBtn.collapsed:active {
                transform: translateX(0);
            }
        }
        
        /* 桌面设备样式 */
        @media (min-width: 769px) {
            #scriptSearchBtn {
                right: 0;
                bottom: 25px;
                border-radius: 50% 0 0 50%;
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

    // 创建按钮 (移动端优化)
    const createButton = () => {
        const btn = document.createElement('button');
        btn.id = 'scriptSearchBtn';
        btn.title = '点击搜索本站脚本 (' + getCleanDomain(location.hostname) + ')';
        btn.textContent = config.buttonIcon;
        
        // 添加事件监听
        if (config.isMobile) {
            // 移动设备上的触摸事件处理
            
            // 通过点击切换显示/隐藏状态
            let isSearchMode = false; // 是否处于搜索模式
            
            btn.addEventListener('click', (e) => {
                if (isSearchMode) {
                    // 如果是搜索模式，执行搜索操作
                    startSearch();
                    isSearchMode = false;
                } else {
                    // 否则切换显示/隐藏状态
                    if (btn.classList.contains('collapsed')) {
                        btn.classList.remove('collapsed');
                        // 显示后进入搜索模式
                        isSearchMode = true;
                    } else {
                        btn.classList.add('collapsed');
                    }
                    
                    // 阻止事件冒泡，避免触发其他点击事件
                    e.stopPropagation();
                }
            });
            
            // 防止滑动误触发
            btn.addEventListener('touchmove', (e) => {
                e.preventDefault();
            }, { passive: false });
            
            // 点击页面其他位置时隐藏按钮
            document.addEventListener('click', () => {
                if (!btn.classList.contains('collapsed')) {
                    btn.classList.add('collapsed');
                    isSearchMode = false;
                }
            });
        } else {
            // 桌面设备的鼠标事件处理
            let timeout;
            btn.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                btn.classList.remove('collapsed');
            });
            
            btn.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    btn.classList.add('collapsed');
                }, 2000);
            });
            
            // 桌面版直接点击执行搜索
            btn.addEventListener('click', startSearch);
        }

        // 初始状态设置为折叠
        setTimeout(() => {
            btn.classList.add('collapsed');
        }, 2000);
        
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