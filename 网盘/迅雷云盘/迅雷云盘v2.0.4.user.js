// ==UserScript==
// @name         迅雷云盘
// @namespace    http://tampermonkey.net/
// @version      2.0.4
// @description  获取迅雷云盘的文件链接，可利用本地播放器看视频；可将播放列表导入坚果云；可利用其他工具下载（如idm，curl，Xdown，Motrix，Aria2）；添加隐藏回收站功能，可自由彻底删除、还原。
// @author       bleu
// @compatible   edge Tampermonkey
// @compatible   chrome Tampermonkey
// @compatible   firefox Tampermonkey
// @license      MIT
// @icon         data:image/png;base64,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
// @supportURL   https://greasyfork.org/zh-CN/scripts/431256/feedback
// @match        https://pan.xunlei.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_registerMenuCommand
// @connect      *
// @connect      localhost
// @connect      127.0.0.1
// @connect      xunlei.com
// @connect      dav.jianguoyun.com
// @require      https://fastly.jsdelivr.net/npm/sweetalert2@11.1.0/dist/sweetalert2.all.min.js
// @require      https://fastly.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require      https://fastly.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @downloadURL https://yxd.dahi.edu.eu.org/scripts/431256/%E8%BF%85%E9%9B%B7%E4%BA%91%E7%9B%98.user.js
// @updateURL https://yxd.dahi.edu.eu.org/scripts/431256/%E8%BF%85%E9%9B%B7%E4%BA%91%E7%9B%98.meta.js
// ==/UserScript==
(function () {
    'use strict';
    const originFetch = fetch;
    let linkConfig, reqHeaders, filesURL,arryIndex,fileArry,filetxt,temp_path,OSflag;
    let running = {
        'runStatus': false,
        'successNum': 0,
        'failNum': 0,
        'exit': false,
        'resultNum': 0,
    }
    let $BleuButton,$deleteBut;
    isResetConfig();
    //退出配置保存数据
    function swalCloseFunc() {
        let local_path = $('#config_path').val().trim();
        let aria2 = {
            'ip': $('#config_ip').val().trim(),
            'port': $('#config_port').val().trim(),
            'token': $('#config_token').val().trim(),
        };
        let jgy = {
            'path': $('#jgy_path').val().trim(),
            'account': $('#jgy_account').val().trim(),
            'password': $('#jgy_password').val().trim(),
        };
        let qualityAry = $('#bleu_select').val();
        qualityAry = qualityAry === 'highlow' ? ['selected', ''] : ['', 'selected'];
        let checkAry = [],
            autoClick = {
                state: false,
                itemIndex: 0
            },
            itemcount = 0;
        $('.td-checkbox__inner.bleu').each((index, item) => {
            checkAry[index] = '';
            if (item.checked) {
                checkAry[index] = 'checked';
                autoClick.itemIndex = index;
                itemcount++;
            }
            if (index === $('.td-checkbox__inner.bleu').length - 1 && itemcount === 1) {
                autoClick.state = true;
            }
        })
        $('.td-checkbox__inner.bleucb').each((index, item) => {
            checkAry[item.getAttribute('index')] = '';
            if (item.checked) {
                checkAry[item.getAttribute('index')] = 'checked';
            }
        })
        localStorage.setItem("linkConfig", JSON.stringify({
            'local_path': local_path,
            'displays': checkAry,
            'aria2': aria2,
            'jgy': jgy,
            'quality': qualityAry,
            'autoClick': autoClick,
        }));
        if (local_path.indexOf("/") >= 0) {
            OSflag = "/";
        }
        window.ariaNgUI && window.ariaNgUI.close();
    }
    //初始或者取配置json
    function isResetConfig() {
        linkConfig = JSON.parse(localStorage.getItem("linkConfig")) || {
            'local_path': 'D:\\Downloads',
            'displays': ['checked', 'checked', 'checked', 'checked', 'checked', 'checked', '', ''],
            'aria2': {
                'ip': 'http://localhost',
                'port': '16800',
                'token': ''
            },
            'jgy': {
                'path': 'ThunderPlaylist',
                'account': '',
                'password': ''
            },
            'quality': ['selected', ''],
        };
        if (!linkConfig.jgy) {
            linkConfig.jgy = {
                'path': 'ThunderPlaylist',
                'account': '',
                'password': ''
            }
        }
    }
    let main = {
        addCssStyle() {
            let style = document.createElement('style');
            style.innerHTML = tools.cssStyle;
            document.querySelector('head').appendChild(style);
        },
        addElements() {
            $BleuButton = $('<div id="bleu_btn" class="FileMenu__item--7MGwA active"><i class="xlpfont xlp-download"></i><span>直链</span></div>');
            $deleteBut = $('<li id="bleu_trash" class=""><p class="bar-box"><i class="xlpfont xlp-trash"></i> <span>回收站</span></p></li>');
            $('div.pan-wrapper-asider ul li').length == 5&&$('div.pan-wrapper-asider ul').append($deleteBut);
            $('div.pan-list-menu').length>0&&$('div.pan-list-menu')[0].innerText.indexOf('彻底删除')!=0&&$('div.pan-list-menu').prepend($BleuButton);
            $('.FileMenu__menu--XBFEH').length != 0 ? $('.FileMenu__menu--XBFEH').prepend($BleuButton) : $BleuButton;

            if(location.href.indexOf('https://pan.xunlei.com/?filter=trash')==0){
                $('#bleu_trash')[0].className = 'on';
            }
            $('div.pan-wrapper-asider ul li').on('click', ()=>{
                $('div.pan-list-menu').length>0&&$('div.pan-list-menu')[0].innerText.indexOf('彻底删除')!=0&&$('div.pan-list-menu').prepend($BleuButton);
                if(location.href.indexOf('https://pan.xunlei.com/?filter=trash')!=0){
                    $('#bleu_trash')[0].className = '';
                }
            })

        },
        addButtonEvent() {
            $BleuButton.on('click', async function () {
                main.getHeaders();
                tools.swalForInfo('==获取直链中,请等待==', '', 'center');
                if (running.runStatus) {
                    return
                }
                isResetConfig();
                try {
                    await main.getAllInfo();
                } catch (error) {
                    console.log(error);
                    tools.swalForInfo('==请刷新页面重新尝试！==', '', 'center');
                    running.runStatus = false;
                    return;
                }
                let mainui = tools.swalForUI(tools.swalHtml());
                $('.bleu_btn').on('click', function (item) {
                    let temp = item.target.getAttribute('data-value');
                    main.getCollatedData(temp)
                })
                if (linkConfig.autoClick.state) {
                    $('.bleu_btn')[linkConfig.autoClick.itemIndex].click();
                    setTimeout(() => {
                        mainui.close();
                    }, 1000);
                }
            })
            GM_registerMenuCommand('直链配置', () => {
                isResetConfig();
                tools.swalForUI(tools.swalConfig()).then(swalCloseFunc);
            })
            $deleteBut.on('click', function () {
                this.className='on';
                location.href ='https://pan.xunlei.com/?filter=trash&path=%2F';
            })
        },
        setInitValue() {
            arryIndex = 0;
            fileArry = [[]];
            filetxt = [];
            temp_path = '';
            running.runStatus = true;
            running.successNum = 0;
            running.failNum = 0;
            running.resultNum = 0;
        },
        async getAllInfo() {
            main.setInitValue();
            $('li.SourceListItem__item--XxpOC.SourceListItem__active--4U0f4').each((index,item) => {
                let temp = item.__vue__.info
                let itemInfo = {
                    'kind': temp.kind,
                    'id': temp.id,
                    'name': temp.name,
                    'phase': temp.phase,
                    'trashed': temp.trashed
                };
                fileArry[arryIndex].push(itemInfo);
            });
            await main.getAllFiles(fileArry[0]);
            running.runStatus = false;
            running.resultNum = running.successNum + running.failNum;
        },
        async getAllFiles(loopArry) {
            for (let index = 0; index < loopArry.length; index++) {
                if (loopArry[index]) {
                    if (loopArry[index].kind === 'drive#file') {
                        await main.getDirectLink(loopArry[index].id);
                    }
                    if (loopArry[index].kind === 'drive#folder') {
                        temp_path += `${OSflag}${loopArry[index].name}`;
                        await main.getFileSign(loopArry[index]);
                        await main.getAllFiles(fileArry[arryIndex - 1]);
                    }
                }

            }
            temp_path = temp_path.substring(0, temp_path.lastIndexOf(OSflag));
        },
        getFileSign(folder) {
            let runURL = `https://api-pan.xunlei.com/drive/v1/files?limit=100&parent_id=${folder.id}&filters={"phase":{"eq":"${folder.phase}"},"trashed":{"eq":${folder.trashed}}}&with_audit=true`;
                runURL = encodeURI(runURL);
            fileArry[arryIndex] = [];
            return tools.bleuAjax('get', runURL).then(value => {
                value.files.forEach((item) => {
                    let temp = {
                        'kind': item.kind,
                        'id': item.id,
                        'name': item.name,
                        'phase': item.phase,
                        'trashed': item.trashed
                    };
                    fileArry[arryIndex].push(temp);
                });
                arryIndex++;
            }, reason => {
                runURL === filesURL ? running.exit = true : running.exit = false;
                console.error(reason);
            });
        },
        getDirectLink(sign) {
            let URL = `https://api-pan.xunlei.com/drive/v1/files/${sign}`;
            return tools.bleuAjax('get', URL).then(value => {
                running.successNum++;
                let mediasLink = [];
                if (value.medias != []) {
                    value.medias.forEach(function (item) {
                        if (item.link != null) {
                            mediasLink.push({
                                'name': item.media_name,
                                'url': item.media_name === '原始画质' ? value.web_content_link : item.link.url,
                            })
                        }
                    })
                }
                filetxt.push({
                    'name': value.name,
                    'link': value.web_content_link,
                    'path': temp_path,
                    'medias': mediasLink
                });
            }, reason => {
                running.failNum++;
                console.log(reason);
            });
        },
        //整理发送到其他工具的数据
        async getCollatedData(dataType) {
            if (running.resultNum === 0) {
                return;
            }
            if (dataType.match('aria2')) {
                tools.swalForInfo('==基于aria2发送RPC任务中,请等待==', '', 'center');
            }
            let nameLinkTxt = '';
            let mediaIndex, selectedURL;
            if (dataType.match('播放')) {
                nameLinkTxt = '#EXTM3U\n'
            }
            filetxt.forEach(async (item) => {
                selectedURL = linkConfig.displays[6] == 'checked' && item.medias.length > 0 ? item.medias[0].url : item.link;
                if (dataType.match('aria2')) {
                    return
                }
                if (dataType.match('文件链接')) {
                    nameLinkTxt += `<div><a class="bleu_a" href=${selectedURL} download=${item.name.replace(/ /g,'_')}>${item.name}</a><span class="bleu_gm">浏览器下载</span></div>`;
                }
                if (dataType.match('idm')) {
                    nameLinkTxt += `idman /d "${selectedURL}" /p "${linkConfig.local_path}${item.path}" /f "${item.name}" \nping 127.0.0.1 -n 2 >nul\n`;
                }
                if (dataType.match('curl')) {
                    nameLinkTxt += `echo 正在下载这个文件：&echo "${linkConfig.local_path}${item.path}${OSflag}${item.name}"&curl -L "${selectedURL}" -o "${linkConfig.local_path}${item.path}${OSflag}${item.name}"\n\n`;
                }
                if (dataType.match('Xdown')) {
                    nameLinkTxt += `aria2c "${selectedURL}" --dir "${linkConfig.local_path}${item.path}" --out "${item.name}"\n`;
                }
                if (dataType.match('播放')) {
                    mediaIndex = linkConfig.quality[0] === '' ? item.medias.length - 1 : 0;
                    nameLinkTxt += `#EXTINF:-1 ,${item.name}\n${item.medias[mediaIndex].url}\n`;
                }
            });
            if(dataType.match('显示')){
                tools.swalForUI(`
                <div class="bleu-container bleu-links-container">
                    <div class="bleu-header">文件链接列表</div>
                    <div class="bleu-links-list">
                        ${nameLinkTxt}
                    </div>
                </div>`);
                $('.bleu_gm').on('click', function (e) {
                    GM_download({
                        url: e.target.previousElementSibling.getAttribute('href'),
                        name: e.target.previousElementSibling.getAttribute('download')
                    });
                })
            }
            else if (dataType.match('复制')) {
                new ClipboardJS('.btn_bleu.xdown', {
                    text: function () {
                        return nameLinkTxt;
                    }
                });
                tools.swalForInfo('复制链接成功！', 1000, 'top-end');
            } else if (dataType.match('aria2')) {
                main.sendDataToAria();
            } else {
                let filenam = `${dataType.replace('.txt','')}${(new Date()).valueOf()}.txt`;
                if (dataType.match('播放')) {
                    main.putDataToJGY(filenam, nameLinkTxt);
                } else {
                    tools._downFlie(filenam, nameLinkTxt);
                }
            }
        },
        async sendDataToAria() {
            let swalTitle = `导入成功，请到aria2客户端查看任务!`,selectedURL;
            for (let index = 0; index < filetxt.length; index++) {
                try {
                    selectedURL = linkConfig.displays[6] == 'checked' && filetxt[index].medias.length > 0 ? filetxt[index].medias[0].url : filetxt[index].link;
                    if (linkConfig.displays[7] == '') {
                        await main.sendDataByRPC(index, selectedURL);
                    } else { //使用ariaNg发送
                        let timedelay = 100;
                        if (!window.ariaNgUI || window.ariaNgUI.closed) {
                            window.ariaNgUI = window.open(`http://ariang.js.org/#!/settings/rpc/set/${linkConfig.aria2.ip.split('://')[0]}/${linkConfig.aria2.ip.split('://')[1]}/${linkConfig.aria2.port}/jsonrpc/${btoa(linkConfig.aria2.token)}`, '_blank');
                            timedelay = 2000; //不延迟，不能修改rpc配置
                        }
                        setTimeout(() => {
                            window.ariaNgUI == null ? swalTitle = `导入失败，ariaNg页面被拦截了！` : swalTitle;
                            window.ariaNgUI.location.href = `http://ariang.js.org/#!/new/task?url=${window.btoa(selectedURL)}&out=${encodeURIComponent(filetxt[index].name)}&dir=${encodeURIComponent(linkConfig.local_path)}${encodeURIComponent(filetxt[index].path)}`;
                        }, timedelay)
                    }
                } catch (error) {
                    console.log(error.responseText);
                    swalTitle.match('成功') ? swalTitle = `导入失败，确认配置aria2没问题！` : swalTitle;
                    break;
                }
            }
            tools.swalForInfo(swalTitle, 3000, 'top-end');
        },
        sendDataByRPC(index, selectedURL) {
            let jsonData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${linkConfig.aria2.token}`, [selectedURL], {
                    dir: linkConfig.local_path + filetxt[index].path,
                    out: filetxt[index].name
                }]
            }
            jsonData = JSON.stringify(jsonData);
            return tools.bleuAjax('post', `${linkConfig.aria2.ip}:${linkConfig.aria2.port}/jsonrpc`, jsonData,'');
        },
        //将播放列表存入坚果云
        putDataToJGY(filenam, nameLinkTxt) {
            if (linkConfig.jgy.account == '') {
                filenam = `迅雷云盘播放列表.m3u`;
                tools._downFlie(filenam, nameLinkTxt);
            } else {
                let url = `https://dav.jianguoyun.com/dav/${linkConfig.jgy.path}/xlPlaylist.m3u`;
                let header = {"authorization": `Basic ${btoa(linkConfig.jgy.account+':'+linkConfig.jgy.password)}`};
                tools.bleuAjax('put',url , nameLinkTxt,header).then(
                    (value)=>{
                        value.status === 204?tools.swalForInfo("导入到坚果云成功！", 3000, 'top-end'):tools.swalForInfo("导入到坚果云失败！", 3000, 'top-end')
                    },
                    ()=>{tools.swalForInfo("导入到坚果云失败！", 3000, 'top-end')});
            }
        },
        hookFetch() {
            Object.defineProperty(unsafeWindow, "fetch", {
                configurable: true,
                enumerable: true,
                // writable: true,
                get() {
                    return (url, options) => {
                        if (url.indexOf('https://api-pan.xunlei.com/drive/v1/files?limit=100&') === 0) {
                            filesURL = url;
                            reqHeaders = options.headers;
                        }
                        return originFetch(url, options)
                    }
                }
            })
        },
        getHeaders() {
            reqHeaders={};
            reqHeaders.withCredentials = false;
            reqHeaders['content-type'] = 'application/json';
            for (let key in localStorage) {
                let temp = localStorage.getItem(key)
                if (key.indexOf('credentials') === 0) {
                    reqHeaders.Authorization = JSON.parse(temp).token_type + ' ' + JSON.parse(temp).access_token;
                    reqHeaders.clientid = key.substring(key.indexOf('_') + 1);
                }
                if (key.indexOf('captcha') === 0)
                    reqHeaders['x-captcha-token'] = JSON.parse(temp).token
                if (key === 'deviceid')
                    reqHeaders['x-device-id'] = temp.substring(temp.indexOf('.') + 1, 32 + temp.indexOf('.') + 1)
            }
        },
        initUI() {
            let observer = new MutationObserver(function (mutationsList) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if (mutation.target.querySelector('.pan-wrapper-asider') && $('#bleu_btn').length == 0) {
                            main.addElements();
                            main.addButtonEvent();
                            break;
                        }
                    }
                }
            });
            observer.observe($('#__layout')[0], {
                childList: true,
                subtree: true,
            });
            if(location.href.indexOf('/s/')>0){
                tools.swalForInfo(`❗不支持此页面,请先保存到云盘`, '', 'top-end')
            }
        },
    }
    let tools = {
        cssStyle: `
            /* 基础样式重置 */
            .bleu-container * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            /* 弹窗容器 */
            .bleu-container {
                font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
                padding: 10px;
                max-width: 400px;
                margin: 0 auto;
            }

            /* 标题区域 */
            .bleu-header {
                text-align: center;
                margin-bottom: 10px;
                padding-bottom: 8px;
                border-bottom: 1px solid #eee;
                font-size: 14px;
                font-weight: bold;
                color: #333;
            }

            /* 按钮网格容器 */
            .bleu-btn-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
                margin-bottom: 10px;
            }

            /* 按钮样式 */
            .bleu_btn {
                display: inline-block;
                padding: 6px 5px;
                background-color: #2670ea;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 12px;
                text-align: center;
                cursor: pointer;
                transition: all 0.2s ease;
                width: 100%;
            }

            .bleu_btn:hover {
                background-color: #3F85FE;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            /* 功能说明链接 */
            .bleu-footer {
                text-align: center;
                margin-top: 5px;
                font-size: 12px;
            }

            .bleu-footer a {
                color: #2670ea;
                text-decoration: none;
            }

            .bleu-footer a:hover {
                text-decoration: underline;
            }

            /* 配置项容器 */
            .bleu-config-container {
                max-width: 400px;
                margin: 0 auto;
                padding: 10px;
            }

            /* 配置项卡片 */
            .bleu-config-card {
                background-color: #f5f5f5;
                border-radius: 6px;
                padding: 10px;
                margin-bottom: 10px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }

            /* 配置项标题 */
            .bleu-config-title {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 8px;
                color: #333;
            }

            /* 配置项行 */
            .bleu-config-row {
                display: flex;
                align-items: center;
                margin-bottom: 6px;
                font-size: 12px;
            }

            /* 配置项输入框 */
            .bleu-config-input {
                flex: 1;
                height: 26px;
                padding: 0 8px;
                margin-left: 5px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 12px;
            }

            /* 配置项标签 */
            .bleu-config-label {
                min-width: 70px;
                color: #666;
            }

            /* 复选框容器 */
            .bleu-checkbox {
                display: flex;
                align-items: center;
            }

            /* 复选框样式 */
            .bleu-checkbox input[type="checkbox"] {
                margin-right: 5px;
            }

            /* 下拉选择框 */
            .bleu-select {
                padding: 4px 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 12px;
                margin-left: 5px;
            }

            /* 状态指示器 */
            .bleu-status {
                font-size: 12px;
                color: #666;
                text-align: center;
                margin-bottom: 8px;
            }

            /* sweetalert自定义样式 */
            .swal2-popup {
                font-size: 13px !important;
                padding: 10px !important;
            }

            .swal2-title {
                font-size: 16px !important;
                padding: 8px 0 !important;
            }

            .swal2-close {
                font-size: 20px !important;
                margin-right: 5px !important;
                margin-top: 5px !important;
            }

            .swal2-html-container {
                margin: 0 !important;
                padding: 0 !important;
            }

            /* 文件链接样式 */
            .bleu-links-container {
                max-width: 450px;
                max-height: 400px;
                overflow-y: auto;
            }

            .bleu-links-list {
                margin-top: 10px;
            }

            .bleu-links-list a {
                display: inline-block;
                max-width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #2670ea;
                text-decoration: none;
                vertical-align: middle;
            }

            .bleu-links-list a:hover {
                text-decoration: underline;
            }

            .bleu_a {
                color: #2670ea;
                text-decoration: none;
                font-size: 13px;
            }

            .bleu_gm {
                display: inline-block;
                margin-left: 8px;
                background-color: #2670ea;
                color: white;
                border-radius: 4px;
                padding: 2px 6px;
                font-size: 11px;
                cursor: pointer;
                vertical-align: middle;
            }

            .bleu_gm:hover {
                background-color: #3F85FE;
            }
        `,
        swalHtml: function () {
            return `
            <div class="bleu-container">
                <div class="bleu-header">成功${running.successNum}条；失败${running.failNum}条</div>
                <div class="bleu-btn-grid">
                    ${linkConfig.displays[0]==='checked'? `<button class="bleu_btn" data-value="显示文件链接">显示文件链接</button>` : ''}
                    ${linkConfig.displays[1]==='checked'? `<button class="bleu_btn xdown" data-value="复制idm下载链接">复制idm下载链接</button>` : ''}
                    ${linkConfig.displays[2]==='checked'? `<button class="bleu_btn" data-value="curl下载.txt">curl下载.txt</button>` : ''}
                    ${linkConfig.displays[3]==='checked'? `<button class="bleu_btn xdown" data-value="复制Xdown下载链接">复制Xdown下载链接</button>` : ''}
                    ${linkConfig.displays[4]==='checked'? `<button class="bleu_btn" data-value="基于aria2发送RPC任务">基于aria2发送RPC任务</button>` : ''}
                    ${linkConfig.displays[5]==='checked'? `<button class="bleu_btn" data-value="导出播放列表">导出播放列表</button>` : ''}
                </div>
                <div class="bleu-footer">
                    https://greasyfork.org/zh-CN/scripts/431256" target="_blank">按钮功能说明
                </div>
            </div>`;
        },
        swalConfig: function () {
            return `
            <div class="bleu-config-container">
                <!-- 下载路径设置 -->
                <div class="bleu-config-card">
                    <div class="bleu-config-title">本地下载路径</div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">保存目录</span>
                        <input type="text" class="bleu-config-input" id="config_path" value="${linkConfig.local_path}">
                    </div>
                </div>

                <!-- 功能按钮设置 -->
                <div class="bleu-config-card">
                    <div class="bleu-config-title">功能按钮显示</div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[0]} class="td-checkbox__inner bleu">
                            <span>显示"显示文件链接"</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[1]} class="td-checkbox__inner bleu">
                            <span>显示"复制idm下载链接"</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[2]} class="td-checkbox__inner bleu">
                            <span>显示"curl下载.txt"</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[3]} class="td-checkbox__inner bleu">
                            <span>显示"复制Xdown下载链接"</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[4]} class="td-checkbox__inner bleu">
                            <span>显示"基于aria2发送RPC任务"</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" ${linkConfig.displays[5]} class="td-checkbox__inner bleu">
                            <span>显示"导出播放列表"</span>
                        </label>
                    </div>
                </div>

                <!-- aria2设置 -->
                <div class="bleu-config-card">
                    <div class="bleu-config-title">配置aria2任务</div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" index="7" ${linkConfig.displays[7]} class="td-checkbox__inner bleucb">
                            <span>通过ariaNg远程发送任务</span>
                        </label>
                    </div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">地址</span>
                        <input type="text" class="bleu-config-input" id="config_ip" value="${linkConfig.aria2.ip}">
                    </div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">端口</span>
                        <input type="text" class="bleu-config-input" id="config_port" value="${linkConfig.aria2.port}">
                    </div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">密钥</span>
                        <input type="text" class="bleu-config-input" id="config_token" value="${linkConfig.aria2.token}">
                    </div>
                </div>

                <!-- 播放列表设置 -->
                <div class="bleu-config-card">
                    <div class="bleu-config-title">播放列表设置</div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">画质选择</span>
                        <select class="bleu-select" id="bleu_select">
                            <option value="highlow" ${linkConfig.quality[0]}>从高到低</option>
                            <option value="lowhigh" ${linkConfig.quality[1]}>从低到高</option>
                        </select>
                    </div>
                    <div class="bleu-config-title" style="margin-top: 10px;">列表存坚果云</div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">文件夹</span>
                        <input type="text" class="bleu-config-input" id="jgy_path" value="${linkConfig.jgy.path}">
                    </div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">账户</span>
                        <input type="text" class="bleu-config-input" id="jgy_account" value="${linkConfig.jgy.account}">
                    </div>
                    <div class="bleu-config-row">
                        <span class="bleu-config-label">授权密码</span>
                        <input type="text" class="bleu-config-input" id="jgy_password" value="${linkConfig.jgy.password}">
                    </div>
                </div>

                <!-- 视频专用下载设置 -->
                <div class="bleu-config-card">
                    <div class="bleu-config-title">视频专用下载</div>
                    <div class="bleu-config-row">
                        <label class="bleu-checkbox">
                            <input type="checkbox" index="6" ${linkConfig.displays[6]} class="td-checkbox__inner bleucb">
                            <span>勾选此项，不下载源文件，下载云播最高清晰度视频</span>
                        </label>
                    </div>
                </div>
            </div>`;
        },
        swalForUI: function (html) {
            return Swal.fire({
                html: html,
                showConfirmButton: false,
                showCloseButton: true,
                allowOutsideClick: false,
                width: 'auto',
                padding: '0'
            });
        },
        swalForInfo: function (satitle, satime, saposition) {
            return Swal.fire({
                title: satitle,
                position: saposition,
                showConfirmButton: false,
                timer: satime === '' ? undefined : satime,
                customClass: {
                    title: 'swal2-title',
                    popup: 'swal2-popup'
                }
            });
        },
        bleuAjax: function (TYPE, URL, DATA,HEADER) {
            return new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    method: TYPE,
                    timeout: 2000,
                    headers: HEADER||reqHeaders,
                    url: URL,
                    data: DATA,
                    dataType: "json",
                    onload: function (res) {
                        resolve(JSON.parse(res.response||null)||res.response||res);
                    },
                    onerror: function (err) {
                        reject(JSON.parse(err.response||null)||err.response||err);
                    },
                    ontimeout:function(err){
                        reject(err);
                    }
                });
            })
        },
        _downFlie(fnmae, data) {
            let elementA = document.createElement('a');
            elementA.download = fnmae;
            elementA.style.display = 'none';
            let blob = new Blob([data]);
            elementA.href = URL.createObjectURL(blob);
            document.body.appendChild(elementA);
            elementA.click();
            document.body.removeChild(elementA);
        },
        platform() {
            OSflag = "\\";
            if (linkConfig.local_path.indexOf("/") >= 0) {
                OSflag = "/";
            }
        }
    }
    window.onunload = () => {
        window.ariaNgUI && window.ariaNgUI.close();
    };
    //main.hookFetch();
    main.addCssStyle();
    tools.platform();
    main.initUI();
})();
