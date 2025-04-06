// ==UserScript==
// @name         蓝奏云链接转换
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将蓝奏云一级域名链接转换为pan.lanzoui.com
// @author       Cursor
// @match        *://*.lanzoua.com/*
// @match        *://*.lanzoub.com/*
// @match        *://*.lanzouc.com/*
// @match        *://*.lanzoud.com/*
// @match        *://*.lanzoue.com/*
// @match        *://*.lanzouf.com/*
// @match        *://*.lanzoug.com/*
// @match        *://*.lanzouh.com/*
// @match        *://*.lanzouj.com/*
// @match        *://*.lanzouk.com/*
// @match        *://*.lanzoul.com/*
// @match        *://*.lanzoum.com/*
// @match        *://*.lanzoun.com/*
// @match        *://*.lanzouo.com/*
// @match        *://*.lanzoup.com/*
// @match        *://*.lanzouq.com/*
// @match        *://*.lanzour.com/*
// @match        *://*.lanzous.com/*
// @match        *://*.lanzout.com/*
// @match        *://*.lanzou.com/*
// @match        *://*.lanzouu.com/*
// @match        *://*.lanzouv.com/*
// @match        *://*.lanzouw.com/*
// @match        *://*.lanzoux.com/*
// @match        *://*.lanzouy.com/*
// @match        *://*.lanzouz.com/*
// @match        *://lanzoua.com/*
// @match        *://lanzoub.com/*
// @match        *://lanzouc.com/*
// @match        *://lanzoud.com/*
// @match        *://lanzouf.com/*
// @match        *://lanzoug.com/*
// @match        *://lanzouh.com/*
// @match        *://lanzouj.com/*
// @match        *://lanzouk.com/*
// @match        *://lanzoul.com/*
// @match        *://lanzoum.com/*
// @match        *://lanzoun.com/*
// @match        *://lanzouo.com/*
// @match        *://lanzoup.com/*
// @match        *://lanzouq.com/*
// @match        *://lanzour.com/*
// @match        *://lanzout.com/*
// @match        *://lanzou.com/*
// @match        *://lanzouu.com/*
// @match        *://lanzouv.com/*
// @match        *://lanzouw.com/*
// @match        *://lanzouy.com/*
// @match        *://lanzouz.com/*
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';

    // 定义需要重定向的域名
    const targetDomains = [
        'lanzoua.com', 'lanzoub.com', 'lanzouc.com', 'lanzoud.com', 'lanzoue.com', 
        'lanzouf.com', 'lanzoug.com', 'lanzouh.com', 'lanzouj.com', 'lanzouk.com', 
        'lanzoul.com', 'lanzoum.com', 'lanzoun.com', 'lanzouo.com', 'lanzoup.com', 
        'lanzouq.com', 'lanzour.com', 'lanzous.com', 'lanzout.com', 'lanzou.com', 
        'lanzouu.com', 'lanzouv.com', 'lanzouw.com', 'lanzoux.com', 'lanzouy.com', 
        'lanzouz.com'
    ];

    // 定义需要排除的域名
    const excludeDomains = [
        'ilanzou.com'
    ];

    // 检查域名是否在排除列表中
    function isExcluded(hostname) {
        return excludeDomains.some(domain => hostname.includes(domain));
    }

    // 检查当前URL是否需要重定向
    const currentHostname = window.location.hostname;
    
    // 如果在排除列表中，则不进行重定向
    if (isExcluded(currentHostname)) {
        return;
    }
    
    const needsRedirect = targetDomains.some(domain => currentHostname.includes(domain));

    if (needsRedirect) {
        // 获取当前路径
        const path = window.location.pathname + window.location.search + window.location.hash;
        // 构建新URL
        const newUrl = 'https://pan.lanzoui.com' + path;
        // 重定向
        window.location.href = newUrl;
        return;
    }

    // 在页面加载完成后执行
    window.addEventListener('load', function() {
        // 替换页面上所有的蓝奏云链接
        replaceLinks();

        // 监听DOM变化，处理动态加载的内容
        const observer = new MutationObserver(function(mutations) {
            replaceLinks();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

    // 替换页面上的链接
    function replaceLinks() {
        // 获取所有的a标签
        const links = document.querySelectorAll('a');

        links.forEach(function(link) {
            const href = link.href;

            // 创建URL对象
            try {
                const url = new URL(href);
                
                // 如果域名在排除列表中，则不替换
                if (isExcluded(url.hostname)) {
                    return;
                }
                
                // 检查链接是否包含任何目标域名
                const needsReplacement = targetDomains.some(domain => url.hostname.includes(domain));

                if (needsReplacement) {
                    // 构建新URL
                    const newUrl = 'https://pan.lanzoui.com' + url.pathname + url.search + url.hash;
                    // 更新链接
                    link.href = newUrl;
                }
            } catch (e) {
                // 忽略无效URL
            }
        });
    }
})();
