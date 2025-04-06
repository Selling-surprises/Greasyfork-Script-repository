// ==UserScript==
// @name         Github搜索净化
// @name:zh-CN   Github搜索净化
// @name:en      Github Search Purification
// @namespace    https://github.com/BonjourFeng
// @version      1.3.2
// @description  净化Github搜索页，屏蔽cirosantilli等400+人的敏感仓库。
// @description:zh-CN  净化Github搜索页，屏蔽cirosantilli等400+人的敏感仓库。
// @description:en Clean up Github search page, block sensitive repositories by cirosantilli and others.
// @icon       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcRgWFhsYGBgWFhcWFh8WFhoYGBgWFiUlJRcVFRkWFhgVFRgWFhgVFRsWFhgWFigeHhkWFv////////////r6+h4eHv///xcVFfLx8SMhIUNCQpSTk/r6+jY0NCknJ97e3ru7u+fn51BOTsPCwqGgoISDg6empmpoaK2srNDQ0FhXV3eXcCcAAAAXdFJOUwCBIZXMGP70BuRH2Ze/LpIMUunHkpQR34sfygAAAVpJREFUOMt1U+magjAMDAVb5BDU3W25b9T1/d9vaYpQKDs/rF9nSNJkArDA9ezQZ8wPbc8FE6eAiQUsOO1o19JolFibKCdHGHC0IJezOMD5snx/yE+KOYYr42fPSufSZyazqDoseTPw4lGJNOu6LBXVUPBG3lqYAOv/5ZwnNUfUifzBt8gkgfgINmjxOpgqUA147QWNaocLniqq3QsSVbQHNp45N/BAwoYQz9oUJEiE4GMGfoBSMj5gjeWRIMMqleD/CAzUHFqTLyjOA5zjNnwa4UCEZ2YK3khEcBXHjVBtEFeIZ6+NxYbPqWp1DLKV42t6Ujn2ydyiPi9nX0TTNAkVVZ/gozsl6FbrktkwaVvL2TRK0C8Ca7Hck7f5OBT6FFbLATkL2ugV0tm0RLM9fedDvhWstl8Wp9AFDjFX7yOY/lJrv8AkYuz7fuP8dv9izCYH+x3/LBnj9fYPBTpJDNzX+7cAAAAASUVORK5CYII=
// @license      GPL-3.0
// @author       DanicaStar ch3rry
// @match        *://github.com/search*
// @match        *://github.site/search*
// @match        *://github.store/search*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_notification
// @grant        GM_deleteValues
// @grant        unsafeWindow
// @run-at       document-end
// @downloadURL https://update.greasyfork.org.cn/scripts/473912/Github%E6%90%9C%E7%B4%A2%E5%87%80%E5%8C%96.user.js
// @updateURL https://update.greasyfork.org.cn/scripts/473912/Github%E6%90%9C%E7%B4%A2%E5%87%80%E5%8C%96.meta.js
// ==/UserScript==
(function () {
    "use strict" // 严格模式
    let ban = ['cirosantilli', 'wumaoland', 'codin-stuffs', 'cheezcharmer', 'gege-circle', 'zhaohmng-outlook-com', 'zaohmeing', 'Daravai1234', 'candice531033938', 'jk-ice-cream', 'jk-ice-cream-250', 'sky8964', 'pxvr-official', 'zpc1314521', 'jjzhang166', 'panbinibn', 'programthink', 'hello-world-1989', 'b0LBwZ7r5HOeh6CBMuQIhVu3-s-random-fork', 'thethetpvmy', 'wwwswitch520cc', 'shotoanqrob', 'sitempeanhkkwg', 'fukeluo', '1206256980', 'curees', 'yuoppo', 'Createree', 'vghl', 'wholedata', 'dunjian', 'mksshare'， 'abshare', 'tpxdat', 'jhdyg', 'changfengqj', 'Dujltqzv', 'xmq1024', 'golade', 'kdjfhd', 'dkjhy', 'junsolg', 'dkjiiu', 'faithhow', 'yamtioy', 'zugzuc', 'lusvont', 'kenyatas', 'koeheu', 'juttama', 'duspub', 'wuqdid', 'visxud', 'suyfic', 'qokkod', 'roepuo', 'purfob', 'gitprocode', 'ynwynw', 'hanguodianying', 'hgyw', '69sm', 'urlapp', 'Augensternhx', 'urlweb', 'fuliso', 'nishjd', '36dshipin', 'hapump', 'zhguoxmw', 'KoreanMovies', 'hanjutv', 'mamadepengyou', 'mamatouyunmuxuan', 'erzideqizi', 'wodeqizidejiejie'， 'xiaoyizidemeng'， 'qingyuzongheng', 'jiangnanerxi', 'hanguobiaomei', 'djhgy', 'XXOOBY', 'baoyu1024', 'kk234kkkk', '15923-ORIX', 'wutaed', 'webzhibo', 'apptuijian', 'follow666', 'yu90892', 'aconteet', 'getmal', 'itxinfei', 'mingtiana', 'midoushipin', 'paofushipin', 'yinghanshipin', 'GTVapp', 'huangyouquan', 'devlookme', 'audwq', 'jhdgy', 'di6gandh', 'shuangyuzhibo', 'lvchazhibo', 'xiaolanshipin', 'bofangqi', 'yingtaoshipin', 'xiangfeizhibo', 'lvchaApp', 'luoshenzhibo', 'yaojizhibo', 'mudanzhibo', 'aiaizhibo'， 'gaochaoqwe', 'jiolde'， 'lsdhw', 'kanavdaohang', 'harnh', 'kuadaner', 'wapquan', 'laoyeer', 'reteres', 'haoersn', 'zhengjianzhong0107', 'huaaweiCode', 'jianjian00001', 'm2ak-dev', 'yyzwz', 'froginwe11', 'luanmenglei', 'xijinping0', 'cyqqq', 'qldaisd', 'lTbgykio', 'yao270161651', 'jt0008jt0008', '15625103741', 'sky1234566778', 'chfucao', 'chifuyidaocao', 'updrmeltm', 'alice548', 'yazm000', 'cpnorg', 'tffygbu', 'Liberty-China', '1989CCP', 'liulihaocai', 'RevolutionaryCommitteeCPC', 'LeiyanLu', 'webdao', 'GC4WP'， 'tu01', 'ziliao1', 'zzs70', 'ff2017', 'guitu2017', 'tu2017', 'wm001', 'wnel2017', 'dunhlino', 'nelaliox', 'jianjian3219', 'giteecode', '666bears', 'wang-buer', 'id681ilyg316', 'uhjid', 'usdui', 'uhskl', 'uyjks', 'uhskldf', 'itgsi5', 'uifskv', 'uhgask', 'igfkld', 'udsjd', 'ufodk', 'uigsjt', 'ighfrs', 'haivs', 'idrkkld', 'yuisju', 'uldydj', 'uyuek', 'tydfj', 'uuedif', 'ykwsw3', 'uigsi7', 'tyiis', 'ykeik', 'ukvdj', 'uyikl', 'ufzekg', 'yiksure', 'rhksgz', 'rthls', 'rhjaw', 'rehlxs', 'thzsgt', 'tdidst', 'eglct', 'tjkdyu', 'tjlks', 'tjjds', 'rllfs', 'rhkstd', 'yjscdr', 'servisee', 'ufsjzf', 'bvnbvnfgd', 'duliyingshi', 'calendi', 'mayeobey', 'QQMusic-Jay-Chou', 'boylovecomic', 'bt9527', 'FarmerChina', 'Waymon102092', 'baofx', 'biehd', 'moonpas', 'lyqilo', 'liliqh', 'hourv', 'xinfue', 'jijidianying', 'YuyanCai', 'jtdh', 'isdkxr', 'yhildyu', 'ykldyld', 'igsigk', 'uidekj', 'iufskw', 'udsjhf', 'tjkdx', 'rtkist', 'tjlsyh', 'euhf', 'rjzsht', 'rhkdzu', 'ehkkld', 'xzgfsw', 'iofgd', 'yufdk', 'ujkdub', 'iofgdsk', 'dyghikg', 'ugdskf', 'ifwaih', 'oigsiu', 'yjksku', 'yfdkkrf', 'thjsqd', 'yjsyhf', 'ydjsu6', 'igseyf', 'ujudy8', 'tykde', 'ykmdi8', 'yklzrf', 'uijdkd', 'yjkshc', 'tkajc', 'ykdzs', 'jklsx', 'ejldux', 'ifxspo', 'ogsvtf', 'ifdeu', 'yudfdi', 'ofssj', 'igegkx', 'ugfkd', 'ugdsk', 'udskts', 'yjlkdss', 'fkdryl', 'rtuyjsr', 'tus56f', 'yjdsd', 'yuet6h', 'ugtw', 'tlkxt', 'yesrs', 'ykkds', 'yjksu', 'yhyshs', 'xdzfby', 'yujzdh', 'znfl', 'kjiud', 'shijuezhishi', 'hy1980boy', 'ww0304', 'ZXCASD854', 'zfpdh', 'batiyadh', 'yinsedh', 'yyfxz', 'bllpooe', 'joodfer', 'qdmang', 'chaenet', 'mzsyv', 'kzhaoes', 'clnnews', 'kendnes', 'hongnews', 'luokez', 'li721-LY', 'itunsr', 'cctnews', 'htmle', 'xmmj2', 'younownews', '445435213', 'seseClub', 'enewse', 'wsnewse', 'qsnews', 'soasmoughroy', 'adminewhat', 'wsermusic', 'molingfer', 'zhihues', '95movies', '99fuli', 'qnewse', 'tareres', 'hukioip', 'Hochoclate713', 'ervnme', 'greenleaf8888', '93-days', 'doubanm', 'xhydh', 'fvckslvt', 'MDCM-FB', 'b08240', 'm3u8-ekvod', 'huan768468', 'SweeOBC', 'ningmengsuan7788', 'supperqb', 'idskjs', 'ifsird', 'gklksr', 'ifsjxr', 'ifskxt', 'ghjklsd', 'udsskd', 'tgsjk', 'ihgsk', 'ujsjk', 'ijhdf', 'fghhgks', 'udfae4', 'jujwdj', 'ydsdk', 'uyfgsj', 'ykkxrd', 'branono', 'hytcd', 'kjiuo', 'SaolApp', 'lourv', 'uisdlk', 'hutuhai', 'dengminna', 'whmnoe4j', 'txy9704', 'ufsjl', 'udsks', 'uifsjk', 'ygsaj', 'udsts', 'yurdek', 'ghklsr', 'ifsnx', 'ufskd', 'yujst6', 'ifsurjn', 'saoyagma', 'yusyrdk', 'uijhgr', 'geeeeeeeek', 'gfjklk', 'uiskv', 'ccccsp', 'rrrsp', 'udjxs', 'qiezisp', 'egklkd', 't6korf', 'line915577', 'haijv', 'huaxinzhibo', 'haijiaofabuye', 'haijiaoshequ', 'HaijiaoCommunity', 'haijiao-app', 'fulibaike', 'lurmarp', 'entvasa', 'gotwib', 'hghkiiy121', 'gubcem', 'uijssu', 'yjhuk', 'yklsd', 'haijiaoWeb', 'winston779', 'tyukkst', 'ujsnmc', 'ygssk', 'igdkdy', 'qiezishiping', 'kjuhd', 'xiaogongzhuAPP', 'babyzhibo', 'yaojingzhibo', 'balizhibo', 'jiuaizhibo', 'liuyuezhibo', '69live', 'asidw', 'kuaimaoVIP', 'siguaha', 'mizhizhibo', 'lihzd', 'caomeizhibo', '36DAPP', 'luolisheApp', '69zhibo', 'jiejiezhibo', 'k8japan', 'buyaoshan', 'dk111222', 'fanbaovpn', 'HGcrowntiyu', '196tiyu', 'parryno', 'boyiscode', 'moonews', 'kim1528', 'tjqJ62cESiHPj6DdR6vXDAcPp', 'code-help-tutor', 'turbocanary', 'Ifem2BXvz4N4gh1gGn0bkR3Lp'];
    let isKeepDiv = GM_getValue("isKeepDiv", false); // 是否保留屏蔽项目Div的框，，默认为false
    let isPrecise = GM_getValue("isPrecise", true); // 是否精确匹配，默认为true
    let detectMode = GM_getValue("detectMode", "mutationobserver"); // 检测模式，默认为mutationobserver
    let detectDelay = GM_getValue("detectDelay", 100); // 每次检测循环间隔的时间，单位为毫秒，默认为100毫秒
    let allowAnnouncement = GM_getValue("allowAnnouncement", true); // 是否显示"正在使用非最佳配置"提示，默认为true
    let blockText = GM_getValue("blockText", "⛔该仓库被脚本屏蔽"); // 添加自定义屏蔽提示文本的设置
    let useDefaultList = GM_getValue("useDefaultList", true);

    // 读取自定义屏蔽列表
    let customBanList = GM_getValue("customBanList", []);

    // 开启设置页面函数
    function openMenu() {
        // 检测是否已经开启设置页面
        if (document.getElementsByClassName("settings").length == 0) {
            let settingMenu = document.createElement("div");
            settingMenu.className = "settings";
            settingMenu.innerHTML = `
                <h2><span>Github搜索净化 v</span><span id="scriptVersion"></span></h2>
                https://github.com/BonjourFeng/Github-Search-Purification" target="_blank">

                https://yx.dahi.edu.eu.org/zh-CN/scripts/473912-github%E6%90%9C%E7%B4%A2%E5%87%80%E5%8C%96" target="_blank">

                <br>
                <span class="userLoadNum">已加载屏蔽用户数量：加载中...</span>
                <hr>
                <div class="settings-block"><span>是否保留屏蔽项目Div的框：</span><label class="settings-switch"><input type="checkbox"
                            id="isKeepDiv"><span class="slider round"></span></label>
                </div>
                <div class="settings-block">
                    <span>Div的提示文本：</span>
                    <input type="text" style="width: 30%;" class="settings-input">
                </div>
                <div class="settings-block"><span>是否精确匹配：</span><label class="settings-switch"><input type="checkbox"
                            id="isPrecise"><span class="slider round"></span></label></div>
                <div class="settings-block"><span>是否显示"正在使用非最佳配置"通知(推荐开启以防止错过新功能)：</span><label class="settings-switch"><input
                            type="checkbox" id="allowAnnouncement"><span class="slider round"></span></label></div>
                <div class="settings-block">
                    <span>检测模式：</span>
                    <label class="settings-label">
                        <input type="radio" name="detectMode" class="settings-radio">
                        MutationObserver(推荐)
                    </label>
                    <label class="settings-label" title="性能较差，不推荐">
                        <input type="radio" name="detectMode" class="settings-radio">
                        Loop
                    </label>
                    <label class="settings-label" title="有可能没有效果">
                        <input type="radio" name="detectMode" class="settings-radio">
                        eventListener
                    </label>
                    <label class="settings-label" title="Firefox,Safari 不支持">
                        <input type="radio" name="detectMode" class="settings-radio">
                        Navigation API
                    </label>
                    <label class="settings-label" title="需要手动点击按钮进行屏蔽">
                        <input type="radio" name="detectMode" class="settings-radio">
                        手动屏蔽
                    </label>
                </div>
                <div class="settings-block"><span>(Loop模式)每次检测循环间隔的时间 (毫秒) ：</span><input type="number" class="settings-input">
                </div>
                <div class="settings-block">
                    <span>是否追加默认屏蔽列表:</span>
                    <label class="settings-switch">
                        <input type="checkbox" id="useDefaultList">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="settings-block">
                    <span>自定义屏蔽:</span>
                    <textarea id="customBanInput" placeholder="直接输入，或者直接拖入txt文件到此框内 格式：每行输入一个要屏蔽的用户名" class="settings-textarea"></textarea>
                </div>

                <button id="help">帮助</button><button id="save">保存</button><button id="cancel">取消</button>
                
            `;
            document.body.appendChild(settingMenu);

            // 更新设置页面

            document.getElementById("scriptVersion").innerText = GM_info.script.version;

            const userLoadNum = document.getElementsByClassName("userLoadNum")[0];
            if (useDefaultList) {
                userLoadNum.innerText = `已加载默认屏蔽用户数量：${ban.length}，自定义屏蔽词数量：${customBanList.length}`;
            } else {
                userLoadNum.innerText = `默认列表已关闭，自定义屏蔽词数量：${customBanList.length}`;
            }

            isKeepDiv ? document.getElementById("isKeepDiv").checked = true : document.getElementById("isKeepDiv").checked = false;
            isPrecise ? document.getElementById("isPrecise").checked = true : document.getElementById("isPrecise").checked = false;
            allowAnnouncement ? document.getElementById("allowAnnouncement").checked = true : document.getElementById("allowAnnouncement").checked = false;
            useDefaultList ? document.getElementById("useDefaultList").checked = true : document.getElementById("useDefaultList").checked = false;

            switch (detectMode) {
                case "mutationobserver": document.getElementsByClassName("settings-radio")[0].checked = true; break;
                case "loop": document.getElementsByClassName("settings-radio")[1].checked = true; break;
                case "eventListen": document.getElementsByClassName("settings-radio")[2].checked = true; break;
                case "navigation": document.getElementsByClassName("settings-radio")[3].checked = true; break;
                case "manual": document.getElementsByClassName("settings-radio")[4].checked = true; break;
            }

            if (!window.navigation) {
                document.getElementsByClassName("settings-radio")[3].disabled = true;
            }

            document.getElementsByClassName("settings-input")[0].value = blockText;
            document.getElementsByClassName("settings-input")[1].value = detectDelay;
            document.getElementById("customBanInput").value = customBanList.join("\n");

            // feature: 拖入txt文件
            // Fix: 拖入后设置面板会变模糊，是transform引起的
            document.getElementById("customBanInput").addEventListener('drop', function (e) {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file.type === "text/plain") {
                    const reader = new FileReader();
                    reader.onload = function () {
                        document.getElementById("customBanInput").value = reader.result;
                    };

                    // 读取文件内容
                    reader.readAsText(file);
                } else {
                    alert("请拖入txt文本文件");
                }
            });

            // 阻止textarea的dragover默认行为,否则无法触发drop事件
            document.getElementById("customBanInput").addEventListener('dragover', function (e) {
                e.preventDefault();
            });

            // 背景模糊效果
            backgroungBlur();

            // 添加按钮事件——帮助
            document.getElementById("help").onclick = function () {
                if (confirm("是否前往Github仓库查看 README.md？")) {
                    window.open("https://github.com/BonjourFeng/Github-Search-Purification", "_blank");
                }
            };

            // 添加按钮事件——保存
            document.getElementById("save").onclick = function () {
                document.getElementById("isKeepDiv").checked == true ? GM_setValue("isKeepDiv", true) : GM_setValue("isKeepDiv", false);
                document.getElementById("isPrecise").checked == true ? GM_setValue("isPrecise", true) : GM_setValue("isPrecise", false);
                document.getElementById("allowAnnouncement").checked == true ? GM_setValue("allowAnnouncement", true) : GM_setValue("allowAnnouncement", false);
                document.getElementById("useDefaultList").checked == true ? GM_setValue("useDefaultList", true) : GM_setValue("useDefaultList", false);

                if (document.getElementsByClassName("settings-radio")[0].checked == true) { GM_setValue("detectMode", "mutationobserver"); }
                else if (document.getElementsByClassName("settings-radio")[1].checked == true) { GM_setValue("detectMode", "loop"); }
                else if (document.getElementsByClassName("settings-radio")[2].checked == true) { GM_setValue("detectMode", "eventListen"); }
                else if (document.getElementsByClassName("settings-radio")[3].checked == true) { GM_setValue("detectMode", "navigation"); }
                else if (document.getElementsByClassName("settings-radio")[4].checked == true) { GM_setValue("detectMode", "manual"); }


                let newBlockText = document.getElementsByClassName("settings-input")[0].value;
                if (newBlockText.length > 0) { GM_setValue("blockText", newBlockText); }
                else { alert("输入的blockText不能为空，保存失败"); }

                let newdelayTime = parseInt(document.getElementsByClassName("settings-input")[1].value);
                if (newdelayTime > 0 && newdelayTime < 10000) { GM_setValue("detectDelay", newdelayTime); }
                else { alert("输入的delayTime有误，保存失败"); }

                let newCustomBanList = document.getElementById("customBanInput").value.split("\n").filter(item => item.trim() !== "");
                GM_setValue("customBanList", newCustomBanList);

                closeMenu();
                location.reload();
            }

            // 添加按钮事件——取消
            document.getElementById("cancel").onclick = function () {
                closeMenu();
            };
        }
    }


    // 关闭设置页面函数
    function closeMenu() {
        let github_area = document.getElementsByClassName("env-production page-responsive")[1];
        let settingsWindow = document.getElementsByClassName("settings")[0];
        settingsWindow.style.opacity = 0;
        setInterval(() => { settingsWindow.remove() }, 200);
        backgroungBlur();
    }


    // 背景模糊函数，使用try避免因小错误导致脚本失效
    function backgroungBlur() {
        try {
            let github_area = document.getElementsByClassName("env-production page-responsive")[1];
            github_area.style.transition = '0.2s';
            github_area.style.filter == '' ? github_area.style.filter = 'blur(10px)' : github_area.style.filter = '';

            // 设置背景滚动
            github_area = document.getElementsByClassName("env-production page-responsive")[0];
            github_area.style.overflow == 'hidden' ? github_area.style.overflow = '' : github_area.style.overflow = 'hidden';
        } catch (err) {
            console.log(GM_info.script.name + "：设置背景模糊或背景滚动失效");
        }
    }

    // 注册菜单——脚本设置
    GM_registerMenuCommand(
        "⚙️脚本设置",
        function () {
            openMenu();
        },
        { title: "设置通知、样式、检测模式等" }
    );

    // 注册菜单——重置设置
    GM_registerMenuCommand(
        "🔄️重置设置",
        function () {
            if (confirm("是否重置脚本设置？") == true) {
                GM_deleteValues([
                    "isKeepDiv",
                    "isPrecise",
                    "detectMode",
                    "detectDelay",
                    "allowAnnouncement",
                    "blockText",
                    "useDefaultList",
                    "customBanList"]);
                location.reload();
            }
        },
        { title: "重置全部的脚本设置" }
    );



    //*********************************
    //*                               *
    //*          屏蔽处理代码         *
    //*                               *
    //*********************************
    // 屏蔽执行
    function clean() {
        if (document.querySelector("div[data-testid='results-list']") !== null) {
            let search_list = document.querySelector("div[data-testid='results-list']").childNodes;

            // 从后向前遍历，这样删除元素不会影响未遍历的索引
            for (let i = search_list.length - 1; i >= 0; i--) {
                if (isBan(search_list[i], isPrecise)) {
                    if (isKeepDiv) {
                        search_list[i].firstChild.remove();
                        search_list[i].append(blockText);
                    }
                    else {
                        search_list[i].remove();
                    }
                }
            }
        }
    };


    // 判断是否屏蔽
    function isBan(target, isPrecise) {
        if (isPrecise) {
            if (target.getElementsByTagName("a").length !== 0) {
                let repositoryName = target.getElementsByTagName("a")[0].innerText;
                let userName = repositoryName.split("/")[0];

                // 判断默认屏蔽列表
                if (useDefaultList) {
                    for (let j = 0; j < ban.length; j++) {
                        if (userName == ban[j]) {
                            return true;
                        }
                    }
                }

                // 判断自定义屏蔽列表
                for (let j = 0; j < customBanList.length; j++) {
                    if (userName == customBanList[j]) {
                        return true;
                    }
                }

                return false;
            }
            else { return false; }
        }
        else {
            // 判断默认屏蔽列表
            if (useDefaultList) {
                for (let j = 0; j < ban.length; j++) {
                    if (target.innerText.includes(ban[j])) {
                        return true;
                    }
                }
            }

            // 判断自定义屏蔽列表
            for (let j = 0; j < customBanList.length; j++) {
                if (target.innerText.includes(customBanList[j])) {
                    return true;
                }
            }

            return false;
        }
    };

    //*********************************
    //*                               *
    //*    MutationObserver检测代码   *
    //*                               *
    //*********************************
    function cleanByMutationObserver() {
        console.log("Running:MutationObserver");
        const targetNode = document.body;
        // 观察器的配置（需要观察什么变动）
        const config = { childList: true, subtree: true };
        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(clean);
        // 以上述配置开始观察目标节点
        observer.observe(targetNode, config);
    }

    //*********************************
    //*                               *
    //*         Loop检测代码          *
    //*                               *
    //*********************************
    function cleanByLoop() {
        console.log("Running:Loop");
        setInterval(function () {
            clean();
        }, detectDelay);
    };


    //*********************************
    //*                               *
    //*     eventListener检测代码     *
    //*                               *
    //*********************************
    // github 路由更新时
    function pageChange(url) {
        // 保证时机
        setTimeout(() => {
            clean();
        }, 1000)
    }


    // 重写 history event
    let _wr = function (type) {
        let orig = history[type];
        return function () {
            let rv = orig.apply(this, arguments);
            let e = new Event(type);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        }
    }

    function cleanByEventListener() {
        console.log("Running:EventListener");
        setTimeout(() => { clean() }, 1000);
        clean();
        // 重写方法
        history.pushState = _wr('pushState');
        //监听
        window.addEventListener('pushState', function (e) {
            pageChange(location.href);
        })
    }

    //*********************************
    //*                               *
    //*     Navigation API检测代码     *
    //*                               *
    //*********************************

    // 使用 Navigation API 监听页面变化
    function cleanByNavigation() {
        console.log("Running:Navigation API");

        // 初始清理
        setTimeout(() => { clean() }, 1000);
        clean();

        // 监听导航事件
        window.navigation.addEventListener('navigate', (event) => {
            if (event.navigationType === 'replace') {
                setTimeout(() => {
                    clean();
                }, 1000);
            }
        });
    }

    function cleanByManual() {
        console.log("Running:Manual");

        // 添加悬浮按钮
        const floatingButton = document.createElement("button");
        floatingButton.id = "github-purify-button";
        floatingButton.innerHTML = "⛔";
        floatingButton.title = "点击净化Github搜索结果";

        // 添加点击事件
        floatingButton.addEventListener("click", () => {
            clean();
            // 添加动画效果表示点击成功
            floatingButton.classList.add("button-clicked");
            setTimeout(() => {
                floatingButton.classList.remove("button-clicked");
            }, 300);
        });

        // 将按钮添加到页面
        document.body.appendChild(floatingButton);
    }

    //*********************************
    //*                               *
    //*              入口             *
    //*                               *
    //*********************************

    // 添加脚本设置界面CSS
    GM_addStyle(`
        div.settings {
            transition: 0.2s;
            position: fixed;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
            font-size: large;
            max-height: 80%;
            width: 80%;
            left: 50%;
            top: 50%;
            padding: 20px;
            transform: translate(-50%, -50%);
            background-color: aliceblue;
            border: solid lightgray 1px;
            border-radius: 8px;
            overflow-y: auto;
        }

        div.settings hr {
            margin: 10px;
        }

        div.settings h2 {
            margin: 0px 0px 20px 0px;
        }

        div.settings span#load {
            font-size: small;
        }

        div.settings .settings-block {
            padding: 10px 0px;
        }

        div.settings hr {
            background-color: lightgray;
            height: 1px;
            border: none;
        }

        div.settings a:link {
            color: black;
            text-decoration: none;
        }

        div.settings label.settings-switch {
            position: relative;
            display: inline-block;
            width: 38px;
            height: 20px;
        }

        div.settings .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        div.settings .slider:before {
            position: absolute;
            content: "";
            height: 14px;
            width: 14px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        div.settings input:checked+.slider {
            background-color: #4096ff;
        }

        div.settings input:focus+.slider {
            box-shadow: 0 0 1px #4096ff;
        }

        div.settings input:checked+.slider:before {
            -webkit-transform: translateX(18px);
            -ms-transform: translateX(18px);
            transform: translateX(18px);
        }

        div.settings .slider.round {
            border-radius: 34px;
        }

        div.settings .slider.round:before {
            border-radius: 50%;
        }

        div.settings input[type="radio"] {
            margin: 0px 5px;
        }

        div.settings input[type="number"] {
            transition: 0.2s;
            height: 20px;
            width: 60px;
            margin: 5px;
            background-color: white;
            border: solid lightgray 1px;
            border-radius: 8px;
            padding: 0px 10px;
        }

        div.settings input[type="number"]:hover {
            transition: 0.2s;
            color: #4096ff;
            border: solid #4096ff 1px;
            border-radius: 8px;
        }

        div.settings input[type="number"]:focus {
            outline: none;
            border: solid #4096ff 1px;
        }

        div.settings input[type="text"] {
            transition: 0.2s;
            height: 20px;
            width: 200px;
            margin: 5px;
            background-color: white;
            border: solid lightgray 1px;
            border-radius: 8px;
            padding: 0px 10px;
        }

        div.settings input[type="text"]:hover {
            transition: 0.2s;
            color: #4096ff;
            border: solid #4096ff 1px;
            border-radius: 8px;
        }

        div.settings input[type="text"]:focus {
            outline: none;
            border: solid #4096ff 1px;
        }

        div.settings textarea.settings-textarea {
            transition: 0.2s;
            height: 100px;
            width: 80%;
            margin: 5px;
            background-color: white;
            border: solid lightgray 1px;
            border-radius: 8px;
            padding: 10px;
            resize: both;
        }

        div.settings textarea.settings-textarea:hover {
            transition: 0.2s;
            color: #4096ff;
            border: solid #4096ff 1px;
            border-radius: 8px;
        }

        div.settings textarea.settings-textarea:focus {
            outline: none;
            border: solid #4096ff 1px;
        }

        div.settings button {
            transition: 0.2s;
            height: 30px;
            width: 60px;
            margin: 20px 10px 0px 10px;
            background-color: white;
            border: solid lightgray 1px;
            border-radius: 8px;
        }

        div.settings button:hover {
            transition: 0.2s;
            color: white;
            background-color: #4096ff;
            border: solid #4096ff 1px;
            border-radius: 8px;
        }

        div.settings label.settings-label {
            display: inline-block;
            margin: 5px;
            padding: 5px 10px;
            border: 1px solid lightgray;
            border-radius: 5px;
            cursor: pointer;
        }

        div.settings label.settings-label:hover {
            background-color: #f0f0f0;
        }

        div.settings label.settings-label input[type="radio"] {
            vertical-align: middle;
            margin-right: 5px;
        }

        /* Make label text appear dimmed when radio is disabled */
        div.settings label.settings-label input[type="radio"]:disabled + span,
        div.settings label.settings-label:has(input[type="radio"]:disabled) {
            color: #999;
            cursor: not-allowed;
            opacity: 0.7;
        }
        
        /* Ensure the label doesn't appear clickable when radio is disabled */
        div.settings label.settings-label:has(input[type="radio"]:disabled):hover {
            background-color: transparent;
            cursor: not-allowed;
        }

        @media screen and (prefers-color-scheme: dark) {
            div.settings {
                color: #e6edf3;
                border-color: #30363d;
                background: #0d1117;
            }

            div.settings hr {
                background-color: #21262d;
            }

            div.settings input[type="number"],
            div.settings input[type="text"],
            div.settings textarea.settings-textarea {
                color: #e6edf3;
                border-color: #30363d;
                background: none;
            }

            div.settings button {
                color: #c9d1d9;
                border-color: #30363d;
                background: #21262d;
            }

            div.settings button:hover {
                color: white;
                background-color: #4096ff;
                border: solid #4096ff 1px;
            }

            div.settings label.settings-label {
                border-color: #30363d;
            }

            div.settings label.settings-label:hover {
                background-color: #161b22;
            }

            /* Dark mode specific styles for disabled radio labels */
            div.settings label.settings-label input[type="radio"]:disabled + span,
            div.settings label.settings-label:has(input[type="radio"]:disabled) {
                color: #6e7681;
                opacity: 0.6;
            }
        }

        /* 悬浮净化按钮样式 */
        #github-purify-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background-color: #ffffff;
            color: #333333;
            border: 1px solid #dddddd;
            border-radius: 8px;
            cursor: pointer;
            z-index: 9999;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        #github-purify-button:hover {
            background-color: #f0f0f0;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        #github-purify-button.button-clicked {
            transform: scale(0.95);
            background-color: #eeeeee;
        }

        @media screen and (prefers-color-scheme: dark) {
            /* 深色模式下的样式 */
            #github-purify-button {
                background-color: #333333;
                color: #ffffff;
                border-color: #444444;
            }
            
            #github-purify-button:hover {
                background-color: #444444;
            }

            #github-purify-button.button-clicked {
                background-color: #555555;
            }
        }
    `);

    console.log("====================\n脚本：" + GM_info.script.name + " 开始执行\n作者：" + GM_info.script.author + " 版本：" + GM_info.script.version + "\n脚本地址：https://yx.dahi.edu.eu.org/zh-CN/scripts/473912-github搜索净化\n====================\n【脚本配置】\nisKeepDiv: " + isKeepDiv + "\nisPrecise: " + isPrecise + "\ndetectMode: " + detectMode + "\ndetectDelay: " + detectDelay + "\nallowAnnouncement: " + allowAnnouncement + "\nblockText: " + blockText + "\nuseDefaultList: " + useDefaultList + "\ncustomBanList: " + customBanList + "\n====================");
    // 显示提示
    if (detectMode !== "mutationobserver" && allowAnnouncement) {
        // let jsAnnouncement = document.body.insertBefore(document.createElement("p"), document.body.firstChild);
        // jsAnnouncement.style.cssText = 'background: linear-gradient(to right, rgb(0, 121, 145), rgb(120, 255, 214)); text-align: center; margin: 0px; padding: 5px; color: white; font-weight: bold;';
        // jsAnnouncement.innerHTML = "来自Github搜索净化脚本的提示：脚本更新了一些功能，您可能正在使用非最佳配置，抽空来脚本设置页面看看吧🥳";

        // 调用系统通知
        GM_notification({
            title: "Github 搜索净化",
            text: "脚本更新了一些功能\n\n您可能正在使用非最佳配置，抽空来脚本设置页面看看吧🥳",
            image: "https://github.com/favicon.ico",
        });
    }

    switch (detectMode) {
        case "mutationobserver": cleanByMutationObserver(); break;
        case "loop": cleanByLoop(); break;
        case "eventListen": cleanByEventListener(); break;
        case "navigation": cleanByNavigation(); break;
        case "manual": cleanByManual(); break;
    }

})()
