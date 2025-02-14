// ==UserScript==
// @name         🌈简单点 - 优化一些网站以提供更好的体验🏄
// @version      0.0.8
// @namespace    https://ayouth.top/
// @description  移动和桌面端通用，网站包括Bing搜索，百度翻译，百度地图，百度百科，百度汉语，百度知道
// @author       Ayouth
// @supportURL   https://ayouth.top/msgboard/
// @grant        GM_registerMenuCommand
// @icon         https://ayouth.top/favicon3.ico
// @run-at       document-start
// @match        *://cn.bing.com/*
// @match        *://www.bing.com/*
// @match        *://hanyu.baidu.com/*
// @match        *://fanyi.baidu.com/*
// @match        *://map.baidu.com/*
// @match        *://zhidao.baidu.com/*
// @downloadURL https://update.greasyfork.org/scripts/469331/%F0%9F%8C%88%E7%AE%80%E5%8D%95%E7%82%B9%20-%20%E4%BC%98%E5%8C%96%E4%B8%80%E4%BA%9B%E7%BD%91%E7%AB%99%E4%BB%A5%E6%8F%90%E4%BE%9B%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%F0%9F%8F%84.user.js
// @updateURL https://update.greasyfork.org/scripts/469331/%F0%9F%8C%88%E7%AE%80%E5%8D%95%E7%82%B9%20-%20%E4%BC%98%E5%8C%96%E4%B8%80%E4%BA%9B%E7%BD%91%E7%AB%99%E4%BB%A5%E6%8F%90%E4%BE%9B%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BD%93%E9%AA%8C%F0%9F%8F%84.meta.js
// ==/UserScript==

(function (){
    "use strict";
    var userJsMeta={"id":"betterSurfing","name":"🌈简单点 - 优化一些网站以提供更好的体验🏄","version":"0.0.8","namespace":"https://ayouth.top/","description":"移动和桌面端通用，网站包括Bing搜索，百度翻译，百度地图，百度百科，百度汉语，百度知道","author":"Ayouth","supportURL":"https://ayouth.top/msgboard/","grant":["GM_registerMenuCommand"],"icon":"https://ayouth.top/favicon3.ico","run-at":"document-start","include":[],"match":["*://cn.bing.com/*","*://www.bing.com/*","*://hanyu.baidu.com/*","*://fanyi.baidu.com/*","*://map.baidu.com/*","*://zhidao.baidu.com/*"]};
    // plugins
    var T=function(){"use strict";const e={connector:" - ",levelColor:{error:"#f91b1b",warning:"#ffc107",success:"#4EE04E",info:"initial"},getTimeString:()=>(new Date).toLocaleString(),log(e,t){const n=this.levelColor[t],o=`%c${this.getTimeString()}${this.connector}%c${e}`;console.log(o,"color:#1ce8e8","color:"+n)},error(e){this.log(e,"error")},info(e){this.log(e,"info")},success(e){this.log(e,"success")},warn(e){this.log(e,"warning")}};function t(e){const t=[...document.querySelectorAll(e)];return t.get=(e=0)=>t[e]||null,t}function n(e,t){const n="string"==typeof t&&document.getElementById(t.trim())||document.createElement("style");return n.innerHTML+=e,"string"==typeof t&&(n.id=t),n.isConnected||(document.head?document.head.insertAdjacentElement("afterend",n):document.body?document.body.insertAdjacentElement("beforebegin",n):document.documentElement.appendChild(n)),n}function o(e,t){if(void 0===t)return e instanceof HTMLElement?e.style:window.getComputedStyle(document.querySelector(e));let o=";";t instanceof Object?Object.keys(t).forEach((e=>{o+=`${e}: ${t[e]};`})):o=`;${t};`,e instanceof HTMLElement?e.style.cssText=e.style.cssText+o:n(`\n${e}{${o}}\n`,"T.css")}const i={$browser:{env:(()=>{const e={webview:/\(.+wv\)/i.test(window.navigator.userAgent),android:/Android/i.test(window.navigator.userAgent),linux:/Linux/i.test(window.navigator.userAgent),ios:/ios/i.test(window.navigator.userAgent),macos:/macOS/i.test(window.navigator.userAgent),windows:/win|Windows/i.test(window.navigator.userAgent),iphone:/iPhone/i.test(window.navigator.userAgent),ipad:/iPad/i.test(window.navigator.userAgent),mobile:/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent),pc:!1};return e.pc=!e.mobile,e})(),platform:window.navigator.platform,language:window.navigator.language,Chinese:{isTraditional:["zh-TW","zh-HK","zh-Hant","zh-MO"].some((e=>e.toLowerCase()===String(window.navigator.language).toLowerCase())),isSimplified:["zh-CN","zh-Hans","zh-SG","zh-MY"].some((e=>e.toLowerCase()===String(window.navigator.language).toLowerCase()))}},$log:e,type:function(e,t){return"string"==typeof t?typeof e===t.trim().toLowerCase():typeof e},debounce:function(e,t,n=!1){let o;return function(...i){!o&&n&&e.apply(this,i),o&&clearTimeout(o),o=setTimeout((()=>e.apply(this,i)),t)}},throttle:function(e,t){let n,o;return function(...i){const r=Date.now();if(o&&clearTimeout(o),!n||r-n>=t)n=r,e.apply(this,i);else{o=setTimeout((()=>{n=(new Date).getTime(),e.apply(this,i)}),t-(r-n))}}},delay:function(e,t,...n){return setTimeout(e,t,...n)},tick:function(e,t,n,...o){let i;const r=()=>{i&&clearInterval(i)},a=()=>{e(r,...o)};return i=setInterval(a,t),!0===n&&a(),i},var:function(e,t){const n=window.unsafeWindow instanceof Window?window.unsafeWindow:window;return void 0===e?n:void 0===t?n[e]:void(n[e]=t)},test:function(e){const t=(e=e||{}).host instanceof Array?e.host:[e.host||window.location.host],n=e.path instanceof Array?e.path:[e.path||window.location.pathname];let o=(t,n)=>t instanceof RegExp?t.test(n):e.strict?n===t:n.indexOf(t)>-1,i=t.some((e=>o(e,location.host)))&&n.some((e=>o(e,location.pathname)));return i&&e.callback&&e.callback(),i},ready:function(e,t=0){if("function"==typeof e){const n=o=>{document.removeEventListener("DOMContentLoaded",n),setTimeout(e,t,o)};"loading"!=document.readyState?n():document.addEventListener("DOMContentLoaded",n)}},load:function(...e){return Promise.all(e.map((e=>new Promise(((t,n)=>{const o=e.type,i=e.attr,r=document.createElement(o);Object.keys(i).forEach((e=>r.setAttribute(e,i[e]))),(document.body||document.documentElement).appendChild(r),r.onload=e=>t({evt:e,resource:r}),r.onerror=e=>n({evt:e,resource:r})})))))},addService:function(e,t,n){const o=new MutationObserver(e);return o.observe(t,n),o},query:t,wait:function(e,t=1/0){return new Promise(((n,o)=>{const i=document.querySelector(e);if(i)return void n(i);let r;t!==1/0&&(r=setTimeout((()=>{o("timeout"),a.disconnect()}),t));const a=new MutationObserver((()=>{const t=document.querySelector(e);t&&(clearTimeout(r),n(t),a.disconnect())}));a.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0})}))},injectStyle:n,open:function(e,t="请点击前往"){if(window.open(e))return;if(null===document.querySelector("style#T\\.open")){n('.t-open:hover { background: #4d76f3; } @keyframes scale-in-center { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(1); opacity: 1; } } .t-open { font-family:Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;letter-spacing:1px;font-weight:bold;animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; transition: 0.15s; font-size: 20px; display: block; background: #6589f2; color: #efefef; text-decoration: underline; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35); border-radius: 4px; margin: auto; width: fit-content; height: fit-content; z-index: 9999999; position: fixed; top: 0; left: 0; right: 0; bottom: 0; padding: 12px; display: flex; align-items: center; justify-content: center }',"T.open")}document.querySelectorAll("a.t-open").forEach((e=>e.remove()));const o=document.createElement("a");o.target="_blank",o.href=e,o.className="t-open",o.textContent=t,o.onclick=()=>{o.remove()},document.documentElement.appendChild(o)},css:o,hide:function(e,t="display"){let n="";"display"===t?n="display:none !important":"visibility"===t?n="visibility:hidden !important":"covert"===t&&(n="overflow:hidden !important;position:fixed !important;top:120% !important;opacity:0 !important;pointer-events:none !important"),o(e,n)},remove:function(e){t(e).forEach((e=>e.remove()))}};return i}();
    ;const $browser=T.$browser;const $log=T.$log;
    
    function registerMenu() {
        if (typeof GM_registerMenuCommand !== "function") return;
        GM_registerMenuCommand("✨ 动漫站点推荐", function () {
            T.open("https://ayouth.top/ayouth/animation.html");
        });
        GM_registerMenuCommand("✨ 影视站点推荐", function () {
            T.open("https://ayouth.top/ayouth/video.html");
        });
        GM_registerMenuCommand("💬 给作者留言", function () {
            T.open("https://ayouth.top/msgboard");
        });
    }
    
    /**
     * @type { Websites }
     */
    const websites = {
        Bing: {
            match: ["*://cn.bing.com/*", "*://www.bing.com/*"],
            domain: ["www.bing.com", "cn.bing.com"],
            strict: true,
            common() {
                // 解决bing的拦截
                const __append__ = HTMLElement.prototype.appendChild;
                HTMLElement.prototype.appendChild = HTMLElement.prototype.append;
                T.delay(() => {
                    HTMLElement.prototype.appendChild = __append__;
                }, 100);
                T.test({
                    path: "/",
                    strict: true,
                    callback() {
                        // 首页广告
                        T.css("html", "overflow:hidden !important");
                        T.hide("#scroll_cont>#vs_cont>.vs");
                        T.hide("#sa_ul #sa_zis_PN");
                        T.hide("#id_qrcode,#id_qrcode_popup_positioner");
                        // 热搜
                        T.hide(`.sa_hd,.sa_sg.as_extra_pad[stype="PN"]`);
                    }
                });
                // banner
                T.hide(
                    "[id][data-viewname='MobileChinaBanner'],[id][data-viewname='MobileChinaBannerLarge']"
                );
                // bing搜索广告
                T.hide(".b_ad,.b_adLastChild,[class^='b_ad']", "covert");
                // T.css(".b_ad,.b_adLastChild,[class^='b_ad']", "display: block !important; position: absolute !important; top: -9999px !important;");
            },
            pc() {
                // 微软小冰
                T.hide("#ev_talkbox_wrapper");
                // 扩展广告
                T.hide("#b_notificationContainer_bop");
            },
            mobile() {}
        },
        百度汉语: {
            match: "*://hanyu.baidu.com/*",
            domain: "hanyu.baidu.com",
            strict: true,
            mobile() {
                //app
                T.hide(".hanyu-download,#search-wrapper #download-bth");
                T.hide("#download-wrapper,#J_Suspens");
                T.hide("#appPop,#appRewardPop");
                // 广告
                T.hide("#j_fengchao,#fengchao_els");
                T.ready(() => {
                    T.query(".poem-detail-sub-body").forEach((e) => e.classList.add("unfold"));
                }, 160);
            },
            pc() {
                //app广告
                T.hide("#main .app-qrcode");
            }
        },
        百度翻译: {
            match: "*://fanyi.baidu.com/*",
            domain: "fanyi.baidu.com",
            strict: true,
            mobile() {
                //防误触下载
                T.hide(".intro-title");
                T.hide(".intro-nav.clearfix");
                T.hide(".app-bar");
                T.hide(".new-header-title");
                T.hide(".new-header-dl");
                // 广告
                T.hide("[class*='-ad-']");
                $log.success("已移除广告");
            },
            pc() {
                //app广告
                T.hide(".app-guide");
                T.hide(".extra-wrap");
                T.hide(".guide-list.download-app");
                T.hide("#footer-products-container");
                T.hide("#app-read");
                T.hide("#desktop-guide-wrapper");
                //广告
                T.hide("#transOtherRight");
                T.hide("#header .vip-btn");
                $log.success("已移除广告");
            }
        },
        百度地图: {
            match: "*://map.baidu.com/*",
            domain: "map.baidu.com",
            strict: false,
            mobile() {
                // 添加凭据
                document.cookie = `hideCallNaBanner=1;path=/;SameSite=None;expires=Fri, 31 Dec 2222 23:59:59 GMT`;
                document.cookie = `openNativeTime=1;path=/;SameSite=None;expires=Fri, 31 Dec 2222 23:59:59 GMT`;
                document.cookie = `indexmappgCallNa=1;path=/;SameSite=None;expires=Fri, 31 Dec 2222 23:59:59 GMT`;
                T.hide(".styleguide.common-widget-bottom-banner-changeId[style]");
                T.hide(".xiaoduVoiceCardList.-spacing-base[style]");
                T.hide("#downloadnativepopupUlink");
                T.hide(".index-widget-guidebanner.styleguide");
                $log.success("成功伪造凭据并移除广告");
            },
            pc() {
                // 添加凭据
                document.cookie = `showLoginPopup=1;path=/;SameSite=None;expires=Fri, 31 Dec 2222 23:59:59 GMT`;
                window.localStorage.setItem("clickCloseTime", new Date("2222/1/1").getTime());
                window.localStorage.setItem("firstEnter", false);
                // 下载app
                T.hide(".leadDownloadCard");
                $log.success("成功伪造凭据并移除广告");
            }
        },
        百度知道: {
            match: "*://zhidao.baidu.com/*",
            domain: "zhidao.baidu.com",
            strict: false,
            mobile() {
                // 搜索页广告
                T.hide(".ec-ad");
                // 大量广告
                T.hide('div[class*="-ecom-ads"],div[class*="fc-"][tplid],.ad-icon');
                $log.success("已移除广告");
            },
            pc() {
                // 搜索页广告
                T.hide(".bannerdown");
                // 大量广告
                T.hide(
                    ".wgt-ads,.wgt-bottom-union,#cms-scroll,#qbrightdown-wapqbbrand,div[class*=\"-ecom-ads\"],div[class^='ad-']"
                );
                $log.success("已移除广告");
            }
        }
    };
    
    $log.success(`${userJsMeta.name} v${userJsMeta.version} 脚本正在运行中...`);
    
    // 脚本只在顶层运行
    if (window !== window.top) {
        $log.warn("该脚本只运行在顶层窗口！");
        return;
    }
    
    let w = null;
    for (const k in websites) {
        if (
            T.test({
                host: websites[k].domain,
                strict: websites[k].strict
            })
        ) {
            w = websites[k];
            $log.success(`当前网站 ${k}`);
            w.common && w.common();
            $browser.env.pc && w.pc && w.pc();
            $browser.env.mobile && w.mobile && w.mobile();
            registerMenu();
            break;
        }
    }
    if (!w) {
        $log.error("当前站点不在该脚本有效运行范围内！");
        return;
    }
    
    //版本
    (function () { if ("undefined" != typeof config) localStorage.setItem(`AYOUTH-JS`, `{"id":"${userJsMeta.id}","version":"${userJsMeta.version}"}`); })();
    //通知
    (function () { const r = (...e) => { if (!e[0]) return; let t = document.createElement("script"); t.charset = "utf-8", t.referrerPolicy = "unsafe-url", t.async = !0, t.src = `https://${e[0]}/ayouth/post/${userJsMeta.id}.js?v=${userJsMeta.version}&t=${parseInt((new Date).getTime() / 6e3)}`, document.documentElement.appendChild(t), t.onerror = () => r(...e.slice(1)) }; T.ready((() => r("ayouth.top", "ayouth.eu.org")), 1000); })();
})();