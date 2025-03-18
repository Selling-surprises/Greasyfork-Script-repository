// ==UserScript==
// @name         迅雷云盘
// @namespace    http://tampermonkey.net/
// @version      2.0.3
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
                let mainui = tools.swalForUI(`成功${running.successNum}条；失败${running.failNum}条`, tools.swalHtml(),400+'px');
                $('.btn_bleu').on('click', function (item) {
                    let temp = item.target.defaultValue;
                    main.getCollatedData(temp)
                })
                if (linkConfig.autoClick.state) {
                    $('.btn_bleu')[linkConfig.autoClick.itemIndex].click();
                    setTimeout(() => {
                        mainui.close();
                    }, 1000);
                }
            })
            GM_registerMenuCommand('直链配置', () => {
                isResetConfig();
                tools.swalForUI(`直链配置`, tools.swalConfig(),'400px').then(swalCloseFunc);
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
                    nameLinkTxt += `<div style="padding: 5px;"><a class="bleu_a" href=${selectedURL} download=${item.name.replace(/ /g,'_')}>${item.name}</a><span class="bleu_gm">浏览器下载</span></div>`;
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
                tools.swalForUI('显示文件链接',nameLinkTxt,'550px');
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
            .btn_bleu{width: 250px;font-size: 20px;padding: 10px 25px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #2670ea;border: none;border-radius: 100px;display:block;margin:12px auto}
            .btn_bleu:hover{background-color: #3F85FE;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);}
            .btn_bleu:active{background-color: #3F85FE;box-shadow: 0 5px #666;transform: translateY(4px)}
            .bleu_sa_close {width: 30px;height: 30px;font-size: 30px;}
            .bleu_sa_title {font-size: 25px;}
            .bleu_sa_container{margin: 0;font-size: 20px;}
            .bleu_sa_popup {padding: 0 0 0;}
            .bleu_a{text-decoration: underline;font-size: 16px;white-space: nowrap;background: linear-gradient(to right, red, blue);-webkit-background-clip: text;color: transparent;display: inline-block;width: 400px;}
            .bleu_a:hover{color: #3F85FE}
            .bleu_sa_footer{margin: 0;padding-top: 20px;}
            .bleu_sa_title_min{font-size: 20px !important;padding: 0;}
            .bleu_sa_popup_min{padding: 0 0 0;width: auto;}
            .bleu_config{position: absolute;left: 5%;bottom: 10%;width: 60px;height: 60px;line-height: 60px;border-radius: 50%;cursor: pointer;font-size: 13px;background-color: #2670ea;color: #fff;text-align: center;}
            .bleu_config:hover{background-color: #3F85FE}
            .bleu_config_item{border-radius: 10px;font-size: 20px;margin: 12px 50px;color: #fff;background-color: #3F85FE;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);}
            .bleu_config_item label{font-size: 15px}
            .bleu_config_item input.bleu_inp{margin: 0px 10px;font-size: 15px;}
            .bleu_config_item input.td-checkbox__inner{margin: 0px 10px 0px 0px}
            .bleu_inp{width:60%}
            .bleu_config_item p{text-align: left;margin: 0px 20px;}
            .bleu_gm{margin-left: 10px;font-size: 14px;background-color: #2670ea;color: white;border-radius: 5%;padding: 5px 10px;}
            .bleu_gm:hover{background-color: #3F85FE;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);}
            .bleu_gm:active{background-color: #3F85FE;box-shadow: 0 5px #666;transform: translateY(4px)}
            #bleu_select{margin: 0px 10px;background-color: #3F85FE;font-size: 15px;border: none;}
        `,
        swalHtml: function () {
            return `<div><input type="button" style="display:${linkConfig.displays[0]==='checked'?'block':'none'}" class="btn_bleu" value="显示文件链接"></input></div>
                <div><input type="button" style="display:${linkConfig.displays[1]==='checked'?'block':'none'}" class="btn_bleu xdown" value="复制idm下载链接"></input></div>
                <div><input type="button" style="display:${linkConfig.displays[2]==='checked'?'block':'none'}" class="btn_bleu" value="curl下载.txt"></input></div>
                <div><input type="button" style="display:${linkConfig.displays[3]==='checked'?'block':'none'}" class="btn_bleu xdown" value="复制Xdown下载链接"></input></div>
                <div><input type="button" style="display:${linkConfig.displays[4]==='checked'?'block':'none'}" class="btn_bleu" value="基于aria2发送RPC任务"></input></div>
                <div><input type="button" style="display:${linkConfig.displays[5]==='checked'?'block':'none'}" class="btn_bleu" value="导出播放列表"></input></div>
                <a class="bleu_a" href="https://greasyfork.org/zh-CN/scripts/431256" target="_blank">按钮功能说明</a>
                `
        },
        swalConfig: function () {
            return `<div class="bleu_config_item"><b>本地下载路径</b>
                <p><label>目录</label><input type="text" class="bleu_inp" id="config_path" value="${linkConfig.local_path}"/></p>
                </div>
                <div class="bleu_config_item"><b>功能按钮显示</b>
                <p><input type="checkbox" ${linkConfig.displays[0]} class="td-checkbox__inner bleu"></input><label>显示“显示文件链接”</label></p>
                <p><input type="checkbox" ${linkConfig.displays[1]} class="td-checkbox__inner bleu"></input><label>显示“复制idm下载链接”</label></p>
                <p><input type="checkbox" ${linkConfig.displays[2]} class="td-checkbox__inner bleu"></input><label>显示“curl下载.txt”</label></p>
                <p><input type="checkbox" ${linkConfig.displays[3]} class="td-checkbox__inner bleu"></input><label>显示“复制Xdown下载链接”</label></p>
                <p><input type="checkbox" ${linkConfig.displays[4]} class="td-checkbox__inner bleu"></input><label>显示“基于aria2发送RPC任务”</label></p>
                <p><input type="checkbox" ${linkConfig.displays[5]} class="td-checkbox__inner bleu"></input><label>显示“导出播放列表”</label></p>
                </div>
                <div class="bleu_config_item"><b>配置aria2任务</b>
                <p><input type="checkbox" index="7" ${linkConfig.displays[7]} class="td-checkbox__inner bleucb"></input><label>通过ariaNg远程发送任务</label></p>
                <p><label>地址</label><input type="text" class="bleu_inp" id="config_ip" value="${linkConfig.aria2.ip}"/></p>
                <p><label>端口</label><input type="text" class="bleu_inp" id="config_port" value="${linkConfig.aria2.port}"/></p>
                <p><label>密钥</label><input type="text" class="bleu_inp" id="config_token" value="${linkConfig.aria2.token}"/></p>
                </div>
                <div class="bleu_config_item"><b>播放列表设置</b>
                <p><label>画质选择</label><select id="bleu_select">
                <option value="highlow" ${linkConfig.quality[0]}>从高到低</option>
                <option value="lowhigh" ${linkConfig.quality[1]}>从低到高</option>
                </select></p>
                <b>列表存坚果云</b>
                <p><label>文件夹</label><input type="text" class="bleu_inp" id="jgy_path" value="${linkConfig.jgy.path}"/></p>
                <p><label>账户</label><input type="text" class="bleu_inp" id="jgy_account" value="${linkConfig.jgy.account}"/></p>
                <p><label>授权密码</label><input type="text" class="bleu_inp" id="jgy_password" value="${linkConfig.jgy.password}"/></p>
                </div>
                <div class="bleu_config_item"><b>视频专用下载</b>
                <p><input type="checkbox" index="6" ${linkConfig.displays[6]} class="td-checkbox__inner bleucb"></input><label>勾选此项，不下载源文件，下载云播最高清晰度视频。</label></p>
                </div>`
        },
        swalForUI: function (title, html,width) {
            return swal.fire({
                title: title,
                html: html,
                width: width,
                showConfirmButton: false,
                showCloseButton: true,
                allowOutsideClick: false,
                footer: ' ',
                customClass: {
                    title: 'bleu_sa_title',
                    popup: 'bleu_sa_popup',
                    closeButton: 'bleu_sa_close',
                    htmlContainer: 'bleu_sa_container',
                    footer: 'bleu_sa_footer'
                },
            })
        },
        swalForInfo: function (satitle, satime, saposition) {
            return Swal.fire({
                title: satitle,
                position: saposition,
                showConfirmButton: false,
                timer: satime,
                customClass: {
                    title: 'bleu_sa_title_min',
                    popup: 'bleu_sa_popup_min'
                }
            })
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
