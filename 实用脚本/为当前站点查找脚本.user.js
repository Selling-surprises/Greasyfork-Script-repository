// ==UserScript==
// @name         为当前站点查找脚本
// @namespace    http://tampermonkey
// @version      1.1
// @description  在油猴菜单手动执行后跳转到https://greasyfork.org查找脚本，给手机上的套壳浏览器用的
// @author       chatgpt
// @match        *://*/*
// @license MIT
// @grant        GM_registerMenuCommand
// @run-at       document-end
// @noframes
// @downloadURL https://update.greasyfork.org/scripts/468932/%E4%B8%BA%E5%BD%93%E5%89%8D%E7%AB%99%E7%82%B9%E6%9F%A5%E6%89%BE%E8%84%9A%E6%9C%AC.user.js
// @updateURL https://update.greasyfork.org/scripts/468932/%E4%B8%BA%E5%BD%93%E5%89%8D%E7%AB%99%E7%82%B9%E6%9F%A5%E6%89%BE%E8%84%9A%E6%9C%AC.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 定义变量，用于存储脚本是否已经执行
    var isExecuted = false;

    // 定义函数，用于执行脚本代码
    function executeScript() {
        // 获取当前网站的域名
        var domainName = window.location.hostname;
        // 获取IP地址正则表达式
        var IPRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
        // 判断当前域名是否为IP地址，如果是，则直接使用IP地址作为域名
        var topDomainName;
        if (IPRegex.test(domainName)) {
            topDomainName = domainName;
        } else {
            // 定义正则表达式，用于匹配域名
            var domainRegex = /([a-z0-9-]+\.)?([a-z0-9-]+\.[a-z]{2,3}(\.[a-z]{2})?)$/i;
            // 获取顶级域名，如果匹配失败则使用原始域名
            topDomainName = domainRegex.test(domainName) ? domainRegex.exec(domainName)[2] : domainName;
        }
        // 拼接URL地址
        var url = 'https://cn-greasyfork.org/zh-CN/scripts/by-site/' + topDomainName;
        // 页面跳转
        window.location.href = url;
        // 设置标志位为已执行
        isExecuted = true;
    }

    // 创建油猴菜单，当用户点击时执行脚本
    GM_registerMenuCommand('点击查找脚本', function() {
        executeScript();
    });
})();