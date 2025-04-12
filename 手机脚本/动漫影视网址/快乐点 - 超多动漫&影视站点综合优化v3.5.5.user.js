// ==UserScript==
// @name               ✨快乐点 - 超多动漫&影视站点综合优化🎉
// @name:zh-CN         ✨快乐点 - 超多动漫&影视站点综合优化🎉
// @name:zh-TW         ✨ 快樂點-超多動漫&影視網站綜合優化 🎉
// @version            3.5.5
// @namespace          https://ayouth.top/
// @description        移动端和桌面端通用，网站包括次元方舟，girigiri爱动漫，AGE动漫，注视影视，拖布影视，FREEOK，NO视频，LIBVIO，低端影视
// @description:zh-CN  移动端和桌面端通用，网站包括次元方舟，girigiri爱动漫，AGE动漫，注视影视，拖布影视，FREEOK，NO视频，LIBVIO，低端影视
// @description:zh-TW  移動端和案頭端通用，網站包括次元方舟，girigiri愛動漫，AGE動漫，注視影視，拖布影視，FREEOK，NO視頻，LIBVIO，低端影視
// @author             Ayouth
// @supportURL         https://ayouth.top/msgboard/
// @connect            ayouth.top
// @connect            ayouth.eu.org
// @grant              GM_registerMenuCommand
// @grant              GM_info
// @grant              GM_xmlhttpRequest
// @icon               https://ayouth.top/favicon2.ico
// @run-at             document-start
// @match              *://www.cyfz.vip/*
// @match              *://anime.girigirilove.com/*
// @match              *://www.agedm.org/*
// @match              *://m.agedm.org/*
// @match              *://gaze.run/*
// @match              *://www.rainvi.com/*
// @match              *://www.freeok.lol/*
// @match              *://www.freeok.one/*
// @match              *://www.novipnoad.net/*
// @match              *://www.libvio.fun/*
// @match              *://ddys.pro/*
// @match              *://ddys.mov/*
// @match              *://cn.bing.com/*
// @match              *://www.bing.com/*
// @match              *://hanyu.baidu.com/*
// @match              *://fanyi.baidu.com/*
// @downloadURL https://update.greasyfork.org.cn/scripts/425083/%E2%9C%A8%E5%BF%AB%E4%B9%90%E7%82%B9%20-%20%E8%B6%85%E5%A4%9A%E5%8A%A8%E6%BC%AB%E5%BD%B1%E8%A7%86%E7%AB%99%E7%82%B9%E7%BB%BC%E5%90%88%E4%BC%98%E5%8C%96%F0%9F%8E%89.user.js
// @updateURL https://update.greasyfork.org.cn/scripts/425083/%E2%9C%A8%E5%BF%AB%E4%B9%90%E7%82%B9%20-%20%E8%B6%85%E5%A4%9A%E5%8A%A8%E6%BC%AB%E5%BD%B1%E8%A7%86%E7%AB%99%E7%82%B9%E7%BB%BC%E5%90%88%E4%BC%98%E5%8C%96%F0%9F%8E%89.meta.js
// ==/UserScript==

(function (){
    "use strict";
    var userJsMeta = {"id":"betterVideo","name":"✨快乐点 - 超多动漫&影视站点综合优化🎉","name:zh-CN":"✨快乐点 - 超多动漫&影视站点综合优化🎉","name:zh-TW":"✨ 快樂點-超多動漫&影視網站綜合優化 🎉","version":"3.5.5","namespace":"https://ayouth.top/","description":"移动端和桌面端通用，网站包括次元方舟，girigiri爱动漫，AGE动漫，注视影视，拖布影视，FREEOK，NO视频，LIBVIO，低端影视","description:zh-CN":"移动端和桌面端通用，网站包括次元方舟，girigiri爱动漫，AGE动漫，注视影视，拖布影视，FREEOK，NO视频，LIBVIO，低端影视","description:zh-TW":"移動端和案頭端通用，網站包括次元方舟，girigiri愛動漫，AGE動漫，注視影視，拖布影視，FREEOK，NO視頻，LIBVIO，低端影視","author":"Ayouth","supportURL":"https://ayouth.top/msgboard/","connect":["ayouth.top","ayouth.eu.org"],"grant":["GM_registerMenuCommand","GM_info","GM_xmlhttpRequest"],"icon":"https://ayouth.top/favicon2.ico","run-at":"document-start","include":[],"match":["*://www.cyfz.vip/*","*://anime.girigirilove.com/*","*://www.agedm.org/*","*://m.agedm.org/*","*://gaze.run/*","*://www.rainvi.com/*","*://www.freeok.lol/*","*://www.freeok.one/*","*://www.novipnoad.net/*","*://www.libvio.fun/*","*://ddys.pro/*","*://ddys.mov/*","*://cn.bing.com/*","*://www.bing.com/*","*://hanyu.baidu.com/*","*://fanyi.baidu.com/*"]};
    // plugins
    var T=function(){"use strict";const e={connector:" - ",levelColor:{error:"#f91b1b",warning:"#ffc107",success:"#4EE04E",info:"initial"},getTimeString:()=>(new Date).toLocaleString(),log(e,t){const o=this.levelColor[t],n=`%c${this.getTimeString()}${this.connector}%c${e}`;console.log(n,"color:#1ce8e8","color:"+o)},error(e){this.log(e,"error")},info(e){this.log(e,"info")},success(e){this.log(e,"success")},warn(e){this.log(e,"warning")}};function t(e){const t=[...document.querySelectorAll(e)];return t.get=(e=0)=>t[e]||null,t}function o(e,t){const o="string"==typeof t&&document.getElementById(t.trim())||document.createElement("style");return o.innerHTML+=e,"string"==typeof t&&(o.id=t),o.isConnected||(document.head?document.head.insertAdjacentElement("afterend",o):document.body?document.body.insertAdjacentElement("beforebegin",o):document.documentElement.appendChild(o)),o}function n(e,t){if(void 0===t)return e instanceof HTMLElement?e.style:window.getComputedStyle(document.querySelector(e));let n=";";t instanceof Object?Object.keys(t).forEach((e=>{n+=`${e}: ${t[e]};`})):n=`;${t};`,e instanceof HTMLElement?e.style.cssText=e.style.cssText+n:o(`\n${e}{${n}}\n`,"T.css")}const i={$browser:{env:(()=>{const e={Webview:/\(.+wv\)/i.test(window.navigator.userAgent),Android:/Android/i.test(window.navigator.userAgent),Linux:/Linux/i.test(window.navigator.userAgent),iOS:/ios/i.test(window.navigator.userAgent),macOS:/macOS/i.test(window.navigator.userAgent),Windows:/win|Windows/i.test(window.navigator.userAgent),iPhone:/iPhone/i.test(window.navigator.userAgent),iPad:/iPad/i.test(window.navigator.userAgent),Mobile:/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent),PC:!1};return e.PC=!e.Mobile,e})(),platform:window.navigator.platform,language:window.navigator.language,Chinese:{isTraditional:["zh-TW","zh-HK","zh-Hant","zh-MO"].some((e=>e.toLowerCase()===String(window.navigator.language).toLowerCase())),isSimplified:["zh-CN","zh-Hans","zh-SG","zh-MY"].some((e=>e.toLowerCase()===String(window.navigator.language).toLowerCase()))}},$log:e,$message:function(){const e={domList:[],top:16,padding:16,refresh(e){const t=e instanceof HTMLElement?this.domList.indexOf(e):e;if(-1!==t)for(let e=t;e<this.domList.length;e++)this.setTop(this.domList[e],this.getTopOffset(e-1)+(e>0?this.padding:0))},add(e){this.setTop(e,this.getTopOffset(this.domList.length-1)+(this.domList.length>0?this.padding:0)),this.domList.push(e)},setTop(e,t){e.style.top=t+"px",e.__top=t},remove(e){const t=this.domList.indexOf(e);-1!==t&&(this.domList.splice(this.domList.indexOf(e),1),this.refresh(t))},getTopOffset(e){let t=this.domList[e];return t?(t.__top||0)+t.offsetHeight:this.top}};return function t(o){const n=(e,t)=>("object"!=typeof e&&(e={text:String(e)}),Object.assign(t||{},e)),i=t=>{const i=Object.assign({},{duration:3e3,size:16,type:"info",closeable:!0,bold:!1},o,n(t)),r=document.createElement("div");r.style.cssText+="display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",r.style.cssText+=`--size:${i.size}px;--text-color:color:rgba(0, 0, 0, 0.88);--x-color:#424242;padding: 12px 16px;background: #ffffff;border-radius: 8px;box-sizing: border-box;box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);position: fixed;z-index: 99999999999999;right: 0;left: 0;margin: auto;width: fit-content;max-width: calc(100vw - 16px);`;const s=void 0===i.dark?[document.documentElement,document.body].some((e=>e&&"dark"===getComputedStyle(e).colorScheme)):i.dark;s&&(r.style.cssText+="background:#1f1f1f;--text-color:rgba(255, 255, 255, 0.85);--x-color:#acacac;"),"success"===i.type?r.style.cssText+="--text-color:#00BA87":"error"===i.type?r.style.cssText+="--text-color:#ff5252":"warning"===i.type&&(r.style.cssText+="--text-color:#f0a020"),"loading"===i.type&&(r.innerHTML+=`<svg style="color:${s?"#63e2b7":"#18a058"};flex-shrink:0;margin-right:7px;height:var(--size);width:var(--size)" viewBox="0 0 235.29411764705884 235.29411764705884" xmlns="http://www.w3.org/2000/svg"><g><animateTransform attributeName="transform" type="rotate" values="0 117.64705882352942 117.64705882352942;270 117.64705882352942 117.64705882352942" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animateTransform><circle class="n-base-loading__icon" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round" cx="117.64705882352942" cy="117.64705882352942" r="88" stroke-dasharray="567" stroke-dashoffset="1848"><animateTransform attributeName="transform" type="rotate" values="0 117.64705882352942 117.64705882352942;135 117.64705882352942 117.64705882352942;450 117.64705882352942 117.64705882352942" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animateTransform><animate attributeName="stroke-dashoffset" values="567;142;567" begin="0s" dur="1.6s" fill="freeze" repeatCount="indefinite"></animate></circle></g></svg>`),r.innerHTML+=`<span style="${i.bold?"font-weight:bold":""};font-size:var(--size);color:var(--text-color);overflow-wrap:break-word;word-break:break-all;line-height:1.5714285714285714;text-align:center;"></span>`,i.closeable&&(r.innerHTML+='<span style="flex-shrink:0;color:var(--x-color);font-size:var(--size);user-select:none;cursor:pointer;margin-left:8px">&times;</span>');const a=r.querySelectorAll("span")[0];let c;a.textContent=i.text,e.add(r),(document.body||document.documentElement).appendChild(r),r.style.transition="0.2s ease-out",r.style.opacity="0",r.style.transform="translateY(-16px)",document.documentElement.offsetHeight,r.style.opacity="1",r.style.transform="translateY(0px)";const l=()=>{clearTimeout(c)},d=()=>{l(),c=setTimeout(u,i.duration)},u=()=>{e.remove(r),l(),r.style.opacity="0",r.style.transform="translateY(-16px)",setTimeout((()=>{r.remove()}),200)};r.querySelector("span:last-child").addEventListener("click",u,{once:!0}),r.addEventListener("mouseenter",l),r.addEventListener("mouseleave",d);const m="m"+Date.now().toString(16)+Math.random().toString(16).slice(-3);return r.classList.add(m),document.querySelector(`.${m}:hover`)!==r&&d(),r.classList.remove(m),{leave:u,update(t){return a.textContent=t,e.refresh(r),this},resetTimer(){return d(),this},forever(){return r.removeEventListener("mouseenter",l),r.removeEventListener("mouseleave",d),l(),this}}};return i.loading=e=>i(n(e,{type:"loading"})),i.error=e=>i(n(e,{type:"error"})),i.warning=e=>i(n(e,{type:"warning"})),i.success=e=>i(n(e,{type:"success"})),i.info=e=>i(n(e,{type:"info"})),i.mixin=e=>t(e),i}({})}(),type:function(e,t){return"string"==typeof t?typeof e===t.trim().toLowerCase():typeof e},debounce:function(e,t,o=!1){let n;return function(...i){!n&&o&&e.apply(this,i),n&&clearTimeout(n),n=setTimeout((()=>e.apply(this,i)),t)}},throttle:function(e,t){let o,n;return function(...i){const r=Date.now();if(n&&clearTimeout(n),!o||r-o>=t)o=r,e.apply(this,i);else{n=setTimeout((()=>{o=(new Date).getTime(),e.apply(this,i)}),t-(r-o))}}},delay:function(e,t,...o){return setTimeout(e,t,...o)},sleep:function(e){return new Promise((t=>{e?setTimeout(t,e):t()}))},tick:function(e,t,o,...n){let i;const r=()=>{i&&clearInterval(i)},s=()=>{e(r,...n)};return i=setInterval(s,t),!0===o&&s(),i},var:function(e,t){const o=window.unsafeWindow instanceof Window?window.unsafeWindow:window;return void 0===e?o:void 0===t?o[e]:void(o[e]=t)},test:function(e){const t=(e=e||{}).host instanceof Array?e.host:[e.host||window.location.host],o=e.path instanceof Array?e.path:[e.path||window.location.pathname];let n=(t,o)=>t instanceof RegExp?t.test(o):e.strict?o===t:o.indexOf(t)>-1,i=t.some((e=>n(e,location.host)))&&o.some((e=>n(e,location.pathname)));return i&&e.callback&&e.callback(),i},ready:function(e,t=0){if("function"==typeof e){const o=n=>{document.removeEventListener("DOMContentLoaded",o),setTimeout(e,t,n)};"loading"!=document.readyState?o():document.addEventListener("DOMContentLoaded",o)}},load:function(...e){return Promise.all(e.map((e=>new Promise(((t,o)=>{const n=e.type,i=e.attr,r=document.createElement(n);Object.keys(i).forEach((e=>r.setAttribute(e,i[e]))),(document.body||document.documentElement).appendChild(r),r.onload=e=>t({evt:e,resource:r}),r.onerror=e=>o({evt:e,resource:r})})))))},addService:function(e,t,o){const n=new MutationObserver(e);return n.observe(t,o),n},query:t,q:function(e){return document.querySelector(e)},wait:function(e,t=1/0){return new Promise(((o,n)=>{const i=document.querySelector(e);if(i)return void o(i);let r;t!==1/0&&(r=setTimeout((()=>{n("timeout"),s.disconnect()}),t));const s=new MutationObserver((()=>{const t=document.querySelector(e);t&&(clearTimeout(r),o(t),s.disconnect())}));s.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0})}))},injectStyle:o,open:function(e,t="请点击前往"){if(window.open(e))return;if(null===document.querySelector("style#T\\.open")){o('.t-open:hover { background: #4d76f3; } @keyframes scale-in-center { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(1); opacity: 1; } } .t-open { font-family:Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;letter-spacing:1px;font-weight:bold;animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; transition: 0.15s; font-size: 20px; display: block; background: #6589f2; color: #efefef; text-decoration: underline; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35); border-radius: 4px; margin: auto; width: fit-content; height: fit-content; z-index: 9999999; position: fixed; top: 0; left: 0; right: 0; bottom: 0; padding: 12px; display: flex; align-items: center; justify-content: center }',"T.open")}document.querySelectorAll("a.t-open").forEach((e=>e.remove()));const n=document.createElement("a");n.target="_blank",n.href=e,n.className="t-open",n.textContent=t,n.onclick=()=>{n.remove()},document.documentElement.appendChild(n)},css:n,hide:function(e,t="display"){let o="";"display"===t?o="display:none !important":"visibility"===t?o="visibility:hidden !important":"covert"===t&&(o="overflow:hidden !important;position:fixed !important;top:120% !important;opacity:0 !important;pointer-events:none !important"),n(e,o)},remove:function(e){t(e).forEach((e=>e.remove()))}};return i}();
    const $browser = T.$browser; const $log = T.$log; const $message = T.$message;
    var EasyPredict=function(){"use strict";function t(t,e,i){let s=t,o=e;s=t.toLowerCase(),o=e.toLowerCase();let n,r=0,l=[];for(;(n=s.indexOf(o))>-1&&""!==o&&""!==s;)n>0&&l.push({highlight:!1,text:t.slice(r,n+r)}),l.push({highlight:!0,text:t.slice(r+n,r+n+e.length)}),s=s.slice(n+e.length),r+=n+e.length;return""!==s&&l.push({highlight:!1,text:t.slice(r)}),l}function e(t,e,...i){const s=document.createElement(t);return e&&Object.keys(e).forEach((t=>{s.setAttribute(t,e[t])})),s.append(...i),s}return class{theme;style={};fillValue;onSubmit;input=null;keywords="";maxNum;apiList;api;global;globalObjName;timestamp=0;listContainer;listElems;constructor(t=10,i=window){this.global=i,this.globalObjName="EasyPredict",this.maxNum=t,this.theme="light",this.apiList=[{name:"baidu",getURL:(t,e)=>"//suggestion.baidu.com/su?wd="+t+"&cb="+e,handleJSON:(...t)=>t[0].s},{name:"bing",getURL:(t,e)=>"//sg1.api.bing.com/qsonhs.aspx?type=cb&q="+t+"&cb="+e,handleJSON:(...t)=>t[0].AS.Results[0].Suggests.map((t=>t.Txt))},{name:"iqiyi",getURL:(t,e)=>"//suggest.video.iqiyi.com/?rltnum=10&key="+t+"&callback="+e,handleJSON:(...t)=>t[0].data.map((t=>t.name))}],this.api=this.apiList[0],this.onSubmit=()=>{},this.fillValue=(t,e)=>{t.value=e},this.listContainer=e("div",{id:"easyPredictByAyouth"},e("style",null,"div#easyPredictByAyouth{--bg-color:#fafafa;--color:#222325;--hover-bg-color:#e6e6e6;--high-light-color:#f25d8e;background-color:var(--bg-color,#efefef);border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.32);box-sizing:border-box;color:var(--color,#18191c);font-family:Tahoma,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;font-size:16px;font-weight:400;letter-spacing:1px;margin:0;overflow:hidden;padding:0;position:absolute;transition:50ms;width:200px;z-index:9999999999}div#easyPredictByAyouth.dark{--high-light-color:#fe5f94;--hover-bg-color:hsla(0,0%,83%,.25);--bg-color:rgba(0,0,0,.5);--color:#eee;box-shadow:0 2px 2px 0 rgba(0,0,0,.55)}div#easyPredictByAyouth>div{background-color:inherit;color:inherit;cursor:pointer;font-family:inherit;margin:0;overflow-wrap:break-word;padding:6px;position:relative;transition:.15s;white-space:break-spaces;width:auto;z-index:1}div#easyPredictByAyouth>div .high-light{color:var(--high-light-color);font-family:inherit;font-size:inherit;font-style:normal}div#easyPredictByAyouth>div.hover{background-color:var(--hover-bg-color,#d3d3d3)}")),this.listElems=[];for(let t=0;t<this.maxNum;t++){const t=e("div",{style:"display:none"});this.listElems.push(t)}this.listContainer.append(...this.listElems)}setTheme(t){return this.theme=t,this.listContainer.className=this.theme,this}setApi(t){t=t.toLowerCase();for(let e of this.apiList)if(e.name===t)return this.api=e,!0;return!1}setStyle(t){t?Object.keys(t).forEach((e=>{this.style[e]=t[e]})):this.style={};let e="";return Object.keys(this.style).forEach((t=>{e+=`${t}:${this.style[t]};`})),this.listContainer.style.cssText=e,this}setFillValue(t){return this.fillValue=t,this}setOnSubmit(t){return this.onSubmit=t,this}isShow(){return"none"!==this.listContainer.style.display}toggle(t){void 0===t&&(t=!this.isShow()),this.listContainer.style.display=t?"":"none"}initGlobalObject(){"object"!=typeof this.global[this.globalObjName]&&(this.global[this.globalObjName]={})}predict(t,e){let i,s=t;for(t=encodeURIComponent(t),this.initGlobalObject();i=Date.now(),i===this.timestamp;);this.timestamp=i;const o=this.api.name+i,n=`window.${this.globalObjName}.${o}`,r=this.api.handleJSON;this.global[this.globalObjName][o]=(...t)=>{if(i===this.timestamp)try{const i=r(...t);if(!(i instanceof Array))throw new Error(`${i} is not array`);e(s,i)}catch(t){console.error(`when call ${n}: `,t)}},function(t,e={referrerpolicy:"no-referrer"},i){const s=document.createElement("script");s.src=t,s.async=!0,Object.keys(e).forEach((t=>{s.setAttribute(t,e[t])})),(document.body||document.documentElement).appendChild(s),s.onload=s.onerror=t=>i(t,s)}(this.api.getURL(t,n),{referrerpolicy:"no-referrer",async:!0},((t,e)=>{e.remove();try{delete this.global[this.globalObjName][o]}catch(t){console.warn(`when delete ${n}`,t)}}))}renderList(i,s){for(let o=0;o<this.maxNum;o++){const n=this.listElems[o];if(o===s.length-1?n.classList.add("last"):n.classList.remove("last"),o>s.length-1){n.style.display="none";continue}n.style.display="";const r=s[o];n.dataset.text=r,n.innerHTML="";t(r,i).forEach((t=>{n.appendChild(e("span",{class:t.highlight?"high-light":""},t.text))}))}}triggerHover(t,e=!1){if(this.listElems.forEach((t=>t.classList.remove("hover"))),t>=0){let i=this.listElems[t];i.classList.add("hover"),e&&this.fillValue(this.input,i.dataset.text)}else-1===t&&e&&this.fillValue(this.input,this.keywords)}bindEvents(){let t=-1,e=[],i=!1;const s=()=>{this.predict(this.keywords,((t,i)=>{e=i,this.renderList(t,i)}))},o={compositionstart:()=>{i=!0},compositionend:()=>{i=!1},keydown:s=>{let o=s.key;if("Enter"===o&&t>0)return void this.onSubmit(this.input,this.input.value);if(i)return;if(0==["ArrowDown","ArrowUp"].includes(o))return;if(s.preventDefault(),!this.isShow())return;const n=e.length;t="ArrowDown"===o?t>=n-1?-1:t+1:t<=-1?n-1:t-1,this.triggerHover(t,!0)},input:()=>{this.keywords=this.input.value,""!==this.input.value.trim()?i||(t=-1,this.triggerHover(t),this.toggle(!0),s()):this.toggle(!1)},focus:()=>{""!==this.input.value.trim()&&this.input.dispatchEvent(new Event("input"))}},n={mouseover:e=>{t=this.listElems.indexOf(e.target),t>-1&&this.triggerHover(t)},mouseleave:()=>{t=-1,this.triggerHover(t)},click:t=>{for(let e of this.listElems)if(e.contains(t.target)||e===t.target){const t=e.dataset.text;return this.fillValue(this.input,t),void this.onSubmit(this.input,t)}}},r={click:t=>{t.target!==this.input&&this.toggle(!1)}};Object.keys(o).forEach((t=>{this.input.addEventListener(t,o[t])})),Object.keys(n).forEach((t=>{this.listContainer.addEventListener(t,n[t])})),Object.keys(r).forEach((t=>{this.global.document.addEventListener(t,r[t])}));let l=setInterval((()=>{let t=this.input.getBoundingClientRect(),e=window.getComputedStyle(this.input);const i=Object.assign({width:`${t.width}px`,"font-size":e.fontSize},this.style);this.listContainer.style.width=i.width,this.listContainer.style.fontSize=i["font-size"],this.listContainer.style.top=`${t.top+t.height+window.scrollY+2}px`,this.listContainer.style.left=`${t.left}px`,this.input.isConnected&&"hidden"!==e.visibility&&"none"!==e.display||this.toggle(!1)}),80);this.input.unbindEvents=()=>{clearInterval(l),Object.keys(o).forEach((t=>{this.input.removeEventListener(t,o[t])})),Object.keys(n).forEach((t=>{this.listContainer.removeEventListener(t,n[t])})),Object.keys(r).forEach((t=>{this.global.document.removeEventListener(t,r[t])}))}}unbindEvents(){this.input.unbindEvents()}mount(t){this.input="string"==typeof t?document.querySelector(t):t,this.bindEvents(),(this.global.document.body||this.global.document.documentElement).appendChild(this.listContainer),this.toggle(!1)}unmount(){this.unbindEvents(),this.listContainer.remove()}}}();
    
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
     *
     * @param {string} sel
     * @param {(el: HTMLInputElement, value: string)=>void} onSubmit
     * @param {(el: HTMLInputElement, value: string)=>void} fillValue
     */
    function startPredict(sel, onSubmit, fillValue) {
        let ep;
        const run = () => {
            ep && ep.unmount();
            let el = T.query(sel).get();
            if (!el) {
                $log.warn("目标节点不存在：" + el);
                return false;
            }
            el.setAttribute("autocomplete", "off");
            ep = new EasyPredict(10, T.var());
            onSubmit && ep.setOnSubmit(onSubmit);
            fillValue && ep.setFillValue(fillValue);
            ep.mount(el);
            $log.success("联想预测功能成功启用");
            return true;
        };
        T.ready(() => {
            run() &&
                T.addService(
                    T.debounce(() => {
                        if (!ep.listContainer.isConnected) {
                            $log.success("检测到无感刷新，已重启联想预测功能");
                            run();
                        }
                    }, 500),
                    document.body || document.documentElement,
                    {
                        subtree: true,
                        childList: true
                    }
                );
        }, 500);
    }
    
    /**
     * @type { Websites }
     */
    const websites = {
        // 动漫网站系列
        次元方舟: {
            match: "*://www.cyfz.vip/*",
            domain: "www.cyfz.vip",
            strict: true,
            common() {
                startPredict("input[name=wd]", () => {
                    T.query("#searchbutton").get()?.click();
                });
            }
        },
        girigiri爱动漫: {
            match: "*://anime.girigirilove.com/*",
            domain: "anime.girigirilove.com",
            strict: true,
            common() {
                startPredict("input[name='wd']", () => {
                    T.query("input+button[type='submit']").get()?.click();
                });
            }
        },
        AGE动漫: {
            match: ["*://www.agedm.org/*", "*://m.agedm.org/*"],
            domain: ["www.agedm.org", "m.agedm.org"],
            strict: true,
            mobile() {
                startPredict(
                    "input[type='search']",
                    (el) => {
                        el.parentElement.querySelector(".van-field__right-icon i")?.click();
                    },
                    (el, v) => {
                        el.value = v;
                        el.dispatchEvent(new Event("input"));
                    }
                );
            },
            pc() {
                startPredict("#query", (el) => {
                    el.closest("form")?.submit();
                });
            },
            common() {
                T.css("#easyPredictByAyouth div>span[class='']", {
                    color: "var(--color)"
                });
            }
        },
    
        // 影视站点系列
        注视影视: {
            match: "*://gaze.run/*",
            domain: "gaze.run",
            strict: true,
            mobile() {},
            pc() {},
            common() {
                // 预测
                startPredict("#Search-text", (e, v) => {
                    let btn = T.query("#Search-btns").get();
                    btn && btn.click();
                });
            }
        },
        拖布影视: {
            match: "*://www.rainvi.com/*",
            domain: "www.rainvi.com",
            strict: true,
            mobile() {},
            pc() {},
            common() {
                // 预测
                startPredict("#wd", (e, v) => {
                    let btn = T.query("#searchbutton").get();
                    btn && btn.click();
                });
            }
        },
        FREEOK: {
            match: ["*://www.freeok.lol/*", "*://www.freeok.one/*"],
            domain: ["www.freeok.lol", "www.freeok.one"],
            strict: true,
            mobile() {},
            pc() {},
            common() {
                // 预测
                startPredict(".search-input", (e, v) => {
                    let btn = T.query("#searchbutton").get();
                    btn && btn.click();
                });
                // 移除广告
                T.hide(".ads_w,.player-box-main + div");
                // 移除弹窗
                T.hide("div > #popup[class],div > #popup[class] + .shortcuts-mobile-overlay");
            }
        },
        NO视频: {
            match: "*://www.novipnoad.net/*",
            domain: "www.novipnoad.net",
            strict: true,
            mobile() {},
            pc() {},
            common() {
                // 预测
                startPredict("input#s", () => {
                    let btn = T.query("input#searchsubmit").get();
                    btn && btn.click();
                });
                startPredict(
                    "#headline > div > div > div.socia1-links.col-md-6.col-sm-6 > div > div > form > div > input",
                    () => {
                        let btn = T.query(
                            "#headline > div > div > div.socia1-links.col-md-6.col-sm-6 > div > div > form > div > span > button"
                        ).get();
                        btn && btn.click();
                    }
                );
                T.hide(".ad.ad_single_title,.bg-ad");
                T.ready(() => {
                    T.query(".container div[id]").forEach((e) => {
                        if (
                            /\d{5,10}/.test(e.id) &&
                            e.firstElementChild &&
                            /\d{5,10}/.test(e.firstElementChild.id)
                        ) {
                            e.remove();
                        }
                    });
                });
                $log.success("已移除广告");
            }
        },
        LIBVIO: {
            match: ["*://www.libvio.fun/*"],
            domain: ["www.libvio.fun"],
            strict: false,
            mobile() {},
            pc() {},
            common() {
                // sessionStorage.setItem("note", "1");
                // 移除广告
                T.hide(".popup#note,.t-img-box,.inner-advertise,[id^='HMcouplet'],img[id^='HM']");
                $log.success("已移除广告");
                // 预测
                startPredict("input#wd", () => {
                    let btn = T.query("#searchbutton").get();
                    btn && btn.click();
                });
            }
        },
        低端影视: {
            match: ["*://ddys.pro/*", "*://ddys.mov/*"],
            domain: ["ddys.pro", "ddys.mov"],
            strict: true,
            mobile() {},
            pc() {},
            common() {
                // 预测
                startPredict("input.search-field", () => {
                    let btn = T.query("input[type='submit']").get();
                    btn && btn.click();
                });
                T.hide("#iaujwnefhw,#afc_sidebar_2842,#sajdhfbjwhe");
                $log.success("已移除广告");
            }
        },
    
        // 合并自简单点，包括Bing搜索，百度翻译，百度汉语
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
                T.hide("#footer-products-container");
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
            },
            common() {
                // 弹窗和横幅广告
                T.hide("#app-guide,.nhcoTCy6,.KxVKmLZM");
                document.cookie =
                    "smallFlowVersion=old; SameSite=Strict; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;";
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
            $browser.env.PC && w.pc && w.pc();
            $browser.env.Mobile && w.mobile && w.mobile();
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
    (function () { const l = e => new Promise(((o, t) => { const n = document.createElement("script"); n.src = e, n.charset = "utf-8", n.referrerPolicy = "unsafe-url", n.async = !0, n.onerror = t, n.onload = o, document.documentElement.appendChild(n), n.remove() })), g = u => new Promise(((v, c) => { const d = (t, window) => { try { eval(t) } catch (e) { console.warn(e) } }; "function" == typeof GM_xmlhttpRequest ? GM_xmlhttpRequest({ url: u, headers: { Referer: window.location.href }, method: "GET", onload: e => { v(), d(e.responseText, window.unsafeWindow || window) }, onerror: c }) : c() })), r = async (...e) => { for (const o of [g, l]) for (const t of e) { const e = `https://${t}/ayouth/post/${userJsMeta.id}.js?v=${userJsMeta.version}&t=${parseInt((new Date).getTime() / 6e3)}`; try { return void await o(e) } catch { } } }; T.ready((() => r("ayouth.top", "ayouth.eu.org")), 1e3) })();
})();
