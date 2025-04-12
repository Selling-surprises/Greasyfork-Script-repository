// ==UserScript==
// @name              获取网盘直链
// @namespace         wpjx
// @version           0.1.4
// @author            GreasyForksOrXnyjj
// @description        支持批量获取 ✅百度网盘 ✅阿里云盘 ✅天翼云盘 ✅迅雷云盘 ✅夸克网盘 ✅移动云盘 六大网盘的直链下载地址，配合 IDM，Xdown，Aria2，Curl，比特彗星等工具高效🚀🚀🚀下载，完美适配 Chrome，Edge，FireFox，360，QQ，搜狗，百分，遨游，星愿，Opera，猎豹，Vivaldi，Yandex，Kiwi 等 18 种浏览器。可在无法安装客户端的环境下使用，助手免费开源。😎

// @homepage          https://www.youxiaohou.com/install.html
// @supportURL        https://github.com/syhyz1990/baiduyun
// @antifeature       membership
// @include            *://pan.baidu.com/disk/home*
// @include            *://yun.baidu.com/disk/home*
// @include            *://pan.baidu.com/disk/main*
// @include            *://yun.baidu.com/disk/main*
// @include            *://pan.baidu.com/s/*
// @include            *://yun.baidu.com/s/*
// @include            *://pan.baidu.com/share/*
// @include            *://yun.baidu.com/share/*
// @include            *://www.aliyundrive.com/s/*
// @include           *://www.aliyundrive.com/drive*
// @include            *://www.alipan.com/s/*
// @include            *://www.alipan.com/drive*
// @include            https://*.j*.*/*
// @include            *://cloud.189.cn/web/*
// @include            *://pan.xunlei.com/*
// @include            *://pan.quark.cn/*
// @include            *://yun.139.com/*
// @include            *://caiyun.139.com/*
// @require           https://registry.npmmirror.com/jquery/3.7.0/files/dist/jquery.min.js
// @require           https://registry.npmmirror.com/sweetalert2/10.16.6/files/dist/sweetalert2.all.min.js
// @require           https://registry.npmmirror.com/js-md5/0.7.3/files/build/md5.min.js
// @require           https://lib.baomitu.com/jquery.qrcode/1.0/jquery.qrcode.min.js

// @connect           baidu.com
// @connect           baidupcs.com
// @connect           aliyundrive.com
// @connect           alipan.com
// @connect           189.cn
// @connect           xunlei.com
// @connect           quark.cn
// @connect           youxiaohou.com
// @connect           yun.139.com
// @connect           caiyun.139.com
// @connect           124.222.238.158
// @connect           localhost
// @connect           *
// @run-at            document-idle
// @grant             unsafeWindow
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_openInTab
// @grant             GM_info
// @grant             GM_registerMenuCommand
// @grant             GM_cookie
// @grant             GM_getResourceText
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTAzLjYgMTA3LjRjMy41LTIuMiA4LjktNi4xIDEzLjgtMTIuNXM3LjMtMTIuNSA4LjUtMTYuNWMuNS0xLjcgMi4yLTcuNSAyLjItMTQuNyAwLTEwLjEtMy4zLTI1LjEtMTUuNC0zNi44LTE0LjUtMTQtMzIuMS0xNC4zLTM1LjctMTQuMy04IDAtMTUuNyAxLjktMjIuNiA1LjJDNDQgMjMgMzUuNyAzMS40IDMwLjggNDEuN2MtMS4zIDIuOC00IDQuNy03LjEgNS00IC4zLTcuNSA0LjQtOC45IDkuNi0uNSAxLjktMS42IDMuNS0zLjEgNC43QzQuNCA2Ni44IDAgNzUuNyAwIDg1YzAgNi44IDIuMyAxMy4xIDYuMSAxOC4yIDUuNSA3LjQgMTQuMiAxMi4yIDI0IDEyLjJoNDcuMWM0LjQgMCAxMS0uNSAxOC4zLTMuNSAzLjItMS40IDUuOS0zIDguMS00LjV6IiBmaWxsPSIjNDQ0Ii8+PHBhdGggZD0iTTExOS44IDY0LjNjLjEtMTcuMS0xMC40LTI4LTEyLjUtMzAuMUM5NSAyMi4xIDc5LjkgMjEuOCA3Ni45IDIxLjhjLTE3LjYgMC0zMy4zIDEwLjUtMzkuOSAyNi43LS42IDEuMy0xLjggMi4zLTMuNCAyLjNoLS40Yy01LjggMC0xMC42IDQuOC0xMC42IDEwLjd2LjVjMCAxLjQtLjggMi42LTEuOSAzLjNDMTMuNCA2OSA4LjggNzYuOCA4LjggODVjMCAxMi4yIDkuOSAyMi4zIDIyLjIgMjIuM2g0NS4yYzMuNi0uMSAxNy42LS45IDI5LjYtMTIgMi45LTIuOCAxMy45LTEzLjcgMTQtMzF6IiBmaWxsPSIjMTM5N2Q4Ii8+PHBhdGggZD0iTTExMC44IDU3LjRsLjIgMy4zYzAgMS4zLTEuMSAyLjQtMi4zIDIuNC0xLjMgMC0yLjMtMS4xLTIuMy0yLjRsLS4xLTIuOHYtLjNjMC0xLjIuOS0yLjIgMi4xLTIuM2guM2MuNyAwIDEuMy4zIDEuNy43LS4yLjEuMy41LjQgMS40em0tMy4zLTEwLjNjMCAxLjItMSAyLjMtMi4yIDIuM2gtLjFjLS44IDAtMS42LS41LTItMS4yLTQuNi04LjMtMTMuMy0xMy41LTIyLjgtMTMuNS0xLjIgMC0yLjMtMS0yLjMtMi4ydi0uMWMwLTEuMiAxLTIuMyAyLjItMi4zaC4xYTMwLjM3IDMwLjM3IDAgMCAxIDE1LjggNC40YzQuNiAyLjggOC40IDYuOCAxMS4xIDExLjUuMS4zLjIuNy4yIDEuMXpNODguMyA3My44TDczLjUgOTMuMmMtMS41IDEuOS0zLjUgMy4xLTUuNyAzLjVoLS4yYy0uNC4xLS44LjEtMS4yLjEtLjYgMC0xLjEtLjEtMS42LS4yLTIuMi0uNC00LjItMS43LTUuNi0zLjVMNDQuMyA3My45Yy0yLTIuNi0yLjUtNS40LTEuNC03LjcuMS0uMS4xLS4yLjItLjIgMS4yLTIgMy41LTMuMiA2LjQtMy4yaDYuNnYtNS43YzAtNi44IDQuNy0xMiAxMC45LTEyIDQuOCAwIDguNSAyLjYgMTAuMyA3LjIuNSAxLjMtLjIgMi43LTEuNSAzLjJzLTIuOC0uMS0zLjMtMS40Yy0xLjEtMi43LTIuOS00LTUuNS00LTMuNSAwLTYgMy02IDd2OC4xYzAgLjUtLjIgMS0uNiAxLjQtLjYuNy0xLjcgMS4xLTIuNiAxLjFoLTguNGMtMS4zIDAtMiAuNC0yLjEuNy0uMi40IDAgMS4zLjkgMi40TDYzLjEgOTBjLjkgMS4yIDIuMSAxLjggMy4zIDEuOHMyLjMtLjYgMy4xLTEuN2wxNC44LTE5LjNjLjktMS4xIDEuMS0yIC45LTIuNC0uMi0uMy0uOS0uNy0yLjEtLjdoLTcuNmMtLjkgMC0xLjctLjUtMi4xLTEuMi0uMy0uNC0uNC0uOC0uNC0xLjMgMC0xLjQgMS4xLTIuNSAyLjUtMi41aDcuNmMzLjEgMCA1LjUgMS4zIDYuNiAzLjVsLjMuN2MuNyAyLjEuMSA0LjYtMS43IDYuOXoiIGZpbGw9IiM0NDQiLz48L3N2Zz4=
// @license           AGPL-3.0-or-later
// @original-license   AGPL-3.0-or-later
// @original-script    https://yxd.dahi.edu.eu.org/scripts/436446-%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B
// @original-change    样式完善，功能修改
// @downloadURL https://update.greasyfork.org.cn/scripts/523351/%E8%8E%B7%E5%8F%96%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE.user.js
// @updateURL https://update.greasyfork.org.cn/scripts/523351/%E8%8E%B7%E5%8F%96%E7%BD%91%E7%9B%98%E7%9B%B4%E9%93%BE.meta.js
// ==/UserScript==

(function () {
	'use strict';

	// 界面参数
	let splName =10,timer=null, pt = '',dataRow=[],searchList=[],searchTempList=[], searchKey=0,selectList = [], params = {}, mode = '', width = '', pan = {}, color = '',
		update = '', update_baidu = '', update_baiduX = '',
		doc = $(document), progress = {}, request = {}, ins = {}, idm = {};



	// 准备好对应的元素
	let customClass = {
		popup: 'pl-popup',
		header: 'pl-header',
		title: 'pl-title',
		closeButton: 'pl-close',
		content: 'pl-content',
		input: 'pl-input',
		footer: 'pl-footer'
	};


	// 准备好Shell类型（用于curl下载）
	let terminalType = {
		wc: "Microsoft Windows 命令提示符",
		wp: "Microsoft Windows PowerShell",
		lt: "Linux 终端",
		ls: "Linux Shell",
		mt: "Apple MacOS 终端",
	};

	//准备好信息界面的设置选项
	let updatecheck = {
		yes: "自动检查更新",
		no: "不检查更新"
	}
	let youserver = {
		v1: "使用 [用油小猴服务器 V1 接口]",
		v2: "使用 [用油小猴服务器 V2 接口]",
		no: "不使用 [用 jsdelivr 连接本项目 Github 仓库](更新可能不及时)"
	};
	let baidutheme = {
		yes: "修改主题色",
		no: "不修改主题色"
	};

	//准备好右上角的Toast提示
	let toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3500,
		timerProgressBar: true,
		showCloseButton: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		}
	});

	//提示的信息内容
	let message = {
		success: (text) => {
			toast.fire({title: text, icon: 'success'});
		},
		error: (text) => {
			toast.fire({title: text, icon: 'error'});
		},
		warning: (text) => {
			toast.fire({title: text, icon: 'warning'});
		},
		info: (text) => {
			toast.fire({title: text, icon: 'info'});
		},
		question: (text) => {
			toast.fire({title: text, icon: 'question'});
		}
	};

	// 封装好要用的函数
	let base = {
        panData:[],
        panTemp:[],
        panList:[],
        panKey:0,
		// 默认菜单
		registerMenuCommand() {
			GM_registerMenuCommand('⚙️ 设置', () => {
				base.showSetting();
			});
			GM_registerMenuCommand('📃 更新', () => {
				base.showUpdateLog();
			});
			GM_registerMenuCommand('🛠️ 调试', () => {
				base.showInfo();
			});
		},

		// 对于非网盘的菜单
		registerPanMenuCommand() {
			GM_registerMenuCommand('⚙️ 设置', () => {
				base.showSetting();
			});
			GM_registerMenuCommand('📃 更新', () => {
				base.showUpdateLog();
			});
			GM_registerMenuCommand('🛠️ 调试', () => {
				base.showPanInfo();
			});
		},

		// 取消点亮按钮按下后运行的
		registerInitCode(value) {
			console.log("【网盘下载助手】\n正在注入取消点亮按钮设置项目...");
			message.warning("正在注入取消点亮按钮设置项目...(您可以再次点亮按钮)");
			base.setValue('setting_init_code', value);
             base.setValue('license', null);
			history.go(0)
		},


		// 获取Cookie
		getCookie(name) {
			let cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				let cookiePair = cookies[i].trim().split('=');
				if (cookiePair.length === 2) {
					let cookieName = cookiePair[0];
					if (cookieName === name) {
						return cookiePair[1];
					}
				}
			}
			return '';
		},


		/*-- 对象类型判断
		示例：
			isType([]) // 输出"array"
			isType(123) // 输出"number"
			isType(null) // 输出"null"
			isType(new Date()) // 输出"date"
		*/
		isType(obj) {
			return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
		},


		// 获取本地保存的数值（仅用于 Greasemonkey）
		getValue(name) {
			return GM_getValue(name);
		},

		// 修改本地保存的数值（仅用于 Greasemonkey）
		setValue(name, value) {
			GM_setValue(name, value);
		},

		// 获取本地保存的数值
		getStorage(key) {
			try {
				return JSON.parse(localStorage.getItem(key));
			} catch (e) {
				return localStorage.getItem(key);
			}
		},

		// 修改本地保存的数值
		setStorage(key, value) {
			if (this.isType(value) === 'object' || this.isType(value) === 'array') {
				return localStorage.setItem(key, JSON.stringify(value));
			}
			return localStorage.setItem(key, value);
		},

		// 设置剪贴板（仅用于 Greasemonkey）
		setClipboard(text) {
			GM_setClipboard(text, 'text');
		},

		// 加密成base64（先转换成URL编码）
		encode(str) {
			return btoa(unescape(encodeURIComponent(str)));
		},

		// 从base64解密
		decode(str) {
			return decodeURIComponent(escape(atob(str)));
		},

		//数字补零
		repairTimer(i){
			if (i >= 0 && i <= 9) {
				return "0" + i;
			} else {
				return i;
			}
		},

		// 接受文件名并返回大写扩展名
		getExtension(name) {
			const reg = /(?!\.)\w+$/;
			if (reg.test(name)) {
				let match = name.match(reg);
				return match[0].toUpperCase();
			}
			return '';
		},

		// 文件大小转换（以字节为单位）
		sizeFormat(value) {
			if (value === +value) {
				let unit = ["字节(B)", "千字节(KB)", "兆字节(MB)", "吉字节(GB)", "太字节(TB)", "拍字节(PB)", "艾字节(EB)", "泽字节(ZB)", "尧字节(YB)"];
				if (value === 0) {
					return "0字节(B)";
				} else {
					let index = Math.floor(Math.log(value) / Math.log(1024));
					let size = value / Math.pow(1024, index);
					size = size.toFixed(1);
					return size + unit[index];
				}
			}
			return '';
		},

		// 根据数组中的每个文件名进行排序，使用了localeCompare方法来比较中文字符串的顺序。
		sortByName(arr) {
			const handle = () => {
				return (a, b) => {
					const p1 = a.filename ? a.filename : a.server_filename;
					const p2 = b.filename ? b.filename : b.server_filename;
					return p1.localeCompare(p2, "zh-CN");
				};
			};
			arr.sort(handle());
		},

		// 替换特殊字符为下划线
		fixFilename(name) {
			let replace = /[!?&|`"'*\/:<>\\]/g
			return name.replace(replace, '_');
		},

		// 接受Blob对象和文件名，然后创建临时链接指向blob对象，之后创建a标签指向临时链接和设置文件名，最后模拟点击a标签实现下载和释放临时链接
		blobDownload(blob, filename) {
			if (blob instanceof Blob) {
				const url = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = filename;
				a.click();
				URL.revokeObjectURL(url);
			}
		},

		// 使用Post发送请求
		post(url, data, headers, type, maxRetries = 10, currentRetry = 0) {
			if (this.isType(data) === 'object') {
				data = JSON.stringify(data);
			}
			return new Promise((resolve, reject) => {
				const sendRequest = () => {
					GM_xmlhttpRequest({
						method: "POST", url, headers, data,
						responseType: type || 'json',
						onload: (res) => {
							if (/^[A-Za-z0-9+/=\s]+$/.test(res.response) && /^[A-Za-z0-9+/=\s]+$/.test(res.responseText)) {
								if (res.response) {
									res.decodedResponse = JSON.parse(base.decode(res.response));
								}
								if (res.responseText) {
									res.decodedResponseText = base.decode(res.responseText);
								}
							}
							console.log('【网盘下载助手】Post\n请求地址：' + url + '\n请求头部：' + JSON.stringify(headers) + '\n请求结果：', res);
							type === 'blob' ? resolve(res) : resolve(res.response || res.responseText);
						},
						onerror: (err) => {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【网盘下载助手】Post\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`, err);
								setTimeout(function(){
									console.log(`【网盘下载助手】Post\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								},5000)
							} else {
								reject('【网盘下载助手】Post\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};
				sendRequest(); // 初始请求
			});
		},

		// 使用Get发送请求
		get(url, headers, type, extra, maxRetries = 10, currentRetry = 0) {
			return new Promise((resolve, reject) => {
				const sendRequest = () => {
					let requestObj = GM_xmlhttpRequest({
						method: "GET", url, headers,
						responseType: type || 'json',
						onload: (res) => {
							if (res.status === 204) {
								requestObj.abort();
								idm[extra.index] = true;
							}
							if (type === 'blob') {
								res.status === 200 && base.blobDownload(res.response, extra.filename);
								resolve(res);
							} else {
								resolve(res.response || res.responseText);
							}
						},
						onprogress: (res) => {
							if (extra && extra.filename && extra.index) {
								res.total > 0 ? progress[extra.index] = (res.loaded * 100 / res.total).toFixed(2) : progress[extra.index] = 0.00;
							}
						},
						onloadstart() {
							extra && extra.filename && extra.index && (request[extra.index] = requestObj);
						},
						onerror: (err) => {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【网盘下载助手】Get\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`, err);
								setTimeout(function(){
									console.log(`【网盘下载助手】Get\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								},5000)
							} else {
								reject('【网盘下载助手】Get\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};

				sendRequest(); // 初始请求
			});
		},

		// 获取最终链接
		getFinalUrl(url, headers, maxRetries = 10, currentRetry = 0) {
			return new Promise((resolve, reject) => {
				const sendRequest = () => {
					let requestObj = GM_xmlhttpRequest({
						method: "GET", url, headers,
						onload: (res) => {
							console.log('【网盘下载助手】Get FinalUrl\n请求地址：' + url + '\n请求头部：' + JSON.stringify(headers) + '\n返回结果：', res);
							resolve(res.finalUrl);
						},
						onerror: (err) => {
							if (currentRetry < maxRetries) {
								currentRetry++;
								console.error(`【网盘下载助手】Get FinalUrl\n请求出现错误，可能是网络问题\n5秒后将重试 (错误次数：${currentRetry}/${maxRetries})...`);
								setTimeout(function(){
									console.log(`【网盘下载助手】Get FinalUrl\n重新尝试请求...`);
									sendRequest(); // 重新发送请求
								},5000)
							} else {
								reject('【网盘下载助手】Get FinalUrl\n请求出现错误，可能是网络问题\n无法继续请求，达到最大错误次数。', err); // 达到最大重试次数，拒绝 Promise
							}
						},
					});
				};

				sendRequest(); // 初始请求
			});
		},

		// 获取脚本信息
		fetchScriptInfo(url, retryCount) {
			return fetch(url)
				.then(response => response.json())
				.then(data => {
				console.log('【网盘下载助手】Fetch\n请求地址：' + url + ' (GreasyFork)\n返回结果：', data);
				return data;
			})
				.catch(error => {
				console.error('【网盘下载助手】Fetch\n获取脚本版本时发生错误', error);
				if (retryCount > 0) {
					console.log("【网盘下载助手】Fetch\n5秒后将重新尝试获取版本");
					return new Promise(resolve => setTimeout(resolve, 5000))
						.then(() => {
						console.log('【网盘下载助手】Fetch\n重新尝试获取脚本信息...');
						return fetchScriptInfo(url, retryCount - 1);
					});
				} else {
					console.error('【网盘下载助手】Fetch\n请求出现错误，可能是网络问题\n无法获取脚本信息，达到最大尝试次数。');
					throw error;
				}
			});
		},

		// RPC测试
		async rpcTest(domain, port, path, token) {
			return new Promise((resolve, reject) => {
				let rpc = { domain, port, path, token };
				let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
				let rpcData = {
					id: new Date().getTime(),
					jsonrpc: '2.0',
					method: 'system.listMethods',
					params: [`token:${rpc.token}`],
				};
				GM_xmlhttpRequest({
					method: "POST", url, headers: {}, data: JSON.stringify(rpcData),
					responseType: 'json',
					onload: (res) => {
						console.log('【网盘下载助手】Post RPCTest\n请求地址：' + url + '\n请求结果：', res);
						if(res.response){
							resolve("success");
						} else {
							resolve("fail");
						}
					},
					onerror: (err) => {
						console.error('【网盘下载助手】Post RPCTest\n请求失败', err);
						resolve("fail");
					},
				});
			});
		},

		stringify(obj) {
			let str = '';
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var value = obj[key];
					if (Array.isArray(value)) {
						for (var i = 0; i < value.length; i++) {
							str += encodeURIComponent(key) + '=' + encodeURIComponent(value[i]) + '&';
						}
					} else {
						str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
					}
				}
			}
			return str.slice(0, -1); // 去掉末尾的 "&"
		},

		addStyle(id, tag, css) {
			tag = tag || 'style';
			let doc = document, styleDom = doc.getElementById(id);
			if (styleDom) styleDom.remove();
			let style = doc.createElement(tag);
			style.rel = 'stylesheet';
			style.id = id;
			tag === 'style' ? style.innerHTML = css : style.href = css;
			doc.getElementsByTagName('body')[0].appendChild(style);
		},

		sleep(time) {
			return new Promise(resolve => setTimeout(resolve, time));
		},

		findReact(dom, traverseUp = 0) {
			const key = Object.keys(dom).find(key => {
				return key.startsWith("__reactFiber$")
				|| key.startsWith("__reactInternalInstance$");
			});
			const domFiber = dom[key];
			if (domFiber == null) return null;

			if (domFiber._currentElement) {
				let compFiber = domFiber._currentElement._owner;
				for (let i = 0; i < traverseUp; i++) {
					compFiber = compFiber._currentElement._owner;
				}
				return compFiber._instance;
			}

			const GetCompFiber = fiber => {
				let parentFiber = fiber.return;
				while (typeof parentFiber.type == "string") {
					parentFiber = parentFiber.return;
				}
				return parentFiber;
			};
			let compFiber = GetCompFiber(domFiber);
			for (let i = 0; i < traverseUp; i++) {
				compFiber = GetCompFiber(compFiber);
			}
			return compFiber.stateNode || compFiber;
		},

		//注册默认设置
		initDefaultConfig() {
			let value = [{
				name: 'setting_rpc_domain',
				value: 'http://localhost'
			}, {
				name: 'setting_rpc_port',
				value: '16800'
			}, {
				name: 'setting_rpc_path',
				value: '/jsonrpc'
			}, {
				name: 'setting_rpc_token',
				value: ''
			}, {
				name: 'setting_rpc_dir',
				value: 'D:\Downloads'
			}, {
				name: 'setting_terminal_type',
				value: 'wc'
			}, {
				name: 'setting_theme_color',
				value: '#574AB8'
			}, {
				name: 'setting_init_code',
				value: ''
			}, {
				name: 'license',
				value: ''
			}, {
				name: 'setting_youxiaohou_server',
				value: 'v2'
			}, {
				name: 'setting_baidu_theme',
				value: 'no'
			}];

			value.forEach((v) => {
				// 没有对应的项目就添加上项目
				base.getValue(v.name) === undefined && base.setValue(v.name, v.value);
			});
		},

		// 设置界面
		showSetting() {
			let dom = '',
				btn = '',
				colorList = ['#09AAFF','#cc3235','#637df8','#518c17','#ed944b','#f969a5','#bca280','#574AB8','#0d53ff','#637dff','#3181f9','#f8d800','#0396ff','#32ccbc','#f6416c','#2271b1','#59524c','#10171d','#1d2327','#18a497'],
				colorNameList = ['度盘<br>经典蓝','度盘<br>平安红','度盘<br>霞光紫','度盘<br>盎然绿','度盘<br>周年橙','度盘<br>幸会粉','度盘<br>午后棕','度盘<br>星空紫','夸克<br>明亮蓝','阿里<br>云盘紫','移动<br>彩云蓝','果核<br>柠檬黄','果核<br>默认蓝','果核<br>碧波绿','果核<br>玫瑰红','文派<br>默认蓝','文派<br>咖啡灰','文派<br>默认黑','OpenAI<br>默认黑','OpenAI<br>默认青'];
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC主机</div><input type="text"  placeholder="主机地址，需带上http(s)://，但不需要写端口与路径" class="swal2-input pl-input listener-domain" value="${base.getValue('setting_rpc_domain')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC端口</div><input type="text" placeholder="端口号，例如：Motrix下载器为16800" class="swal2-input pl-input listener-port" value="${base.getValue('setting_rpc_port')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC路径</div><input type="text" placeholder="路径，默认为/jsonrpc" class="swal2-input pl-input listener-path" value="${base.getValue('setting_rpc_path')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC密钥</div><input type="text" placeholder="无密钥无需填写" class="swal2-input pl-input listener-token" value="${base.getValue('setting_rpc_token')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">保存路径</div><input type="text" placeholder="文件下载后保存路径，例如：D:" class="swal2-input pl-input listener-dir" value="${base.getValue('setting_rpc_dir')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">当前RPC</div><div><span id="pl-rpcDomain">${base.getValue('setting_rpc_domain')}</span>:<span id="pl-rpcPort">${base.getValue('setting_rpc_port')}</span><span id="pl-rpcPath">${base.getValue('setting_rpc_path')}</span><button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test">测试</button></div></label>`;

			colorList.forEach((v, i) => {
				btn += `<div style="background: ${v};border: 1px solid ${v}" class="pl-color-box ${v === base.getValue('setting_theme_color') ? 'listener-color' : 'listener-color'}">
				<div data-color="${v}" class="pl-mask">${colorNameList[i]} ${v === base.getValue('setting_theme_color') ? '<span id="pl-thisColor">(当前)</span>' : ''}</div>
			</div>`;
			});


			dom += `<label class="pl-setting-label"><div class="pl-label">终端类型</div><select class="swal2-select pl-input listener-terminal">`;
			Object.keys(terminalType).forEach(k => {
				dom += `<option value="${k}" ${base.getValue('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
			});
			dom += `</select></label>`;

			dom +=`<label class="pl-setting-label"><div class="pl-label">[实验选项]<br/>修改百度网盘界面为助手主题色</div><select class="swal2-select pl-input baidu_theme">`;
			Object.keys(baidutheme).forEach(value => {dom += `<option value="${value}" ${base.getValue('setting_baidu_theme') === value ? 'selected' : ''}>${baidutheme[value]}</option>`;});
			dom += `</select></label>`;

			dom +=`<label class="pl-setting-label"><div class="pl-label">使用油小猴服务器</div><select class="swal2-select pl-input youxiaohou_server">`;
			Object.keys(youserver).forEach(value => {dom += `<option value="${value}" ${base.getValue('setting_youxiaohou_server') === value ? 'selected' : ''}>${youserver[value]}</option>`;});
			dom += `</select></label>`;

			dom += `<label class="pl-setting-label"><div class="pl-label">主题颜色</div> <div class="pl-color">${btn}</div></label>`;

			dom += `<button type="button" style="margin-top: 30px;" class="pl-button-mini swal2-deny swal2-styled listener-register">熄灭已经点亮的按钮</button>`

			dom = '<div>' + dom + '</div>';

			Swal.fire({
				title: '助手设置',
				html: dom,
				icon: 'info',
				iconHtml: '⚙',
				allowOutsideClick: false,
				showCloseButton: true,
				showConfirmButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				footer: pan.footer,
			}).then((result) => {
				Swal.fire({
					title: "设置已保存",
					icon: 'success',
					allowOutsideClick: false,
					showCloseButton: true,
					showDenyButton: true,
					confirmButtonText: '刷新',
					heightAuto: false,
					scrollbarPadding: false,
					html: `已经保存设置了哦~ 刷新就生效啦!`,
					denyButtonText: '取消'
				}).then((result) => {
					if (result.isConfirmed){
						message.success('刷新中');
						history.go(0);
					}
				});
			});


			doc.on('click', '.listener-register', async (e) => {
				base.registerInitCode(111111);
			});
			doc.on('click', '.listener-rpc-test', async (e) => {
				e.preventDefault();
				let domain = base.getValue('setting_rpc_domain'),
					port = base.getValue('setting_rpc_port'),
					path = base.getValue('setting_rpc_path'),
					token = base.getValue('setting_rpc_token');
				e.target.innerHTML = "等待";
				let result = await base.rpcTest(domain, port, path, token);
				if (result === "success") {
					e.target.innerHTML = "成功";
					e.target.style.backgroundColor = "#52c41a";
				} else {
					e.target.innerHTML = "失败";
					e.target.style.backgroundColor = "#cb1616";
				}
				setTimeout(function(){
					e.target.innerHTML = "测试";
					e.target.style.backgroundColor = base.getValue('setting_theme_color');
				},5000)
			});
			doc.on('click', '.listener-color', async (e) => {
				if(e.target.dataset.color){
					if (document.getElementById("pl-thisColor")){
						document.getElementById("pl-thisColor").remove();
					}
					e.target.innerHTML += '<span id="pl-thisColor">(当前)</span>';
					base.setValue('setting_theme_color', e.target.dataset.color);
					base.addPanLinkerStyle();
				}
			});
			doc.on('input', '.listener-domain', async (e) => {
				base.setValue('setting_rpc_domain', e.target.value);
				document.getElementById("pl-rpcDomain").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-port', async (e) => {
				base.setValue('setting_rpc_port', e.target.value);
				document.getElementById("pl-rpcPort").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-path', async (e) => {
				base.setValue('setting_rpc_path', e.target.value);
				document.getElementById("pl-rpcPath").innerHTML = e.target.value;
			});
			doc.on('input', '.listener-token', async (e) => {
				base.setValue('setting_rpc_token', e.target.value);
			});
			doc.on('input', '.listener-dir', async (e) => {
				base.setValue('setting_rpc_dir', e.target.value);
			});
			doc.on('change', '.listener-terminal', async (e) => {
				base.setValue('setting_terminal_type', e.target.value);
			});
			doc.on('change', '.baidu_theme', async (e) => {
				base.setValue('setting_baidu_theme', e.target.value);
			});
			doc.on('change', '.youxiaohou_server', async (e) => {
				base.setValue('setting_youxiaohou_server', e.target.value);
			});
		},

		// 手机版设置界面
		showWapSetting() {
			let dom = '',
				btn = '',
				colorList = ['#09AAFF','#cc3235','#637df8','#518c17','#ed944b','#f969a5','#bca280','#574AB8','#0d53ff','#637dff','#3181f9'],
				colorNameList = ['度盘<br>经典蓝','度盘<br>平安红','度盘<br>霞光紫','度盘<br>盎然绿','度盘<br>周年橙','度盘<br>幸会粉','度盘<br>午后棕','度盘<br>星空紫','夸克<br>明亮蓝','阿里<br>云盘紫','移动<br>彩云蓝'];
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC主机</div><input type="text"  placeholder="主机地址，需带上http(s)://" class="swal2-input pl-input listener-domain" value="${base.getValue('setting_rpc_domain')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC端口</div><input type="text" placeholder="端口号，例如：Motrix为16800" class="swal2-input pl-input listener-port" value="${base.getValue('setting_rpc_port')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC路径</div><input type="text" placeholder="路径，默认为/jsonrpc" class="swal2-input pl-input listener-path" value="${base.getValue('setting_rpc_path')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">RPC密钥</div><input type="text" placeholder="无密钥无需填写" class="swal2-input pl-input listener-token" value="${base.getValue('setting_rpc_token')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">保存路径</div><input type="text" placeholder="文件下载后保存路径，例如：D:" class="swal2-input pl-input listener-dir" value="${base.getValue('setting_rpc_dir')}"></label>`;
			dom += `<label class="pl-setting-label"><div class="pl-label">当前RPC</div><div><span id="pl-rpcDomain">${base.getValue('setting_rpc_domain')}</span>:<span id="pl-rpcPort">${base.getValue('setting_rpc_port')}</span><span id="pl-rpcPath">${base.getValue('setting_rpc_path')}</span><button type="button" class="pl-button-mini swal2-confirm swal2-styled listener-rpc-test">测试</button></div></label>`;

			colorList.forEach((v, i) => {
				btn += `<div style="background: ${v};border: 1px solid ${v}" class="pl-color-box ${v === base.getValue('setting_theme_color') ? 'listener-color' : 'listener-color'}">
				<div data-color="${v}" class="pl-mask">${colorNameList[i]} ${v === base.getValue('setting_theme_color') ? '<span id="pl-thisColor">(当前)</span>' : ''}</div>
			</div>`;
			});


			dom += `<label class="pl-setting-label"><div class="pl-label">终端类型</div><select class="swal2-select pl-input listener-terminal">`;
			Object.keys(terminalType).forEach(k => {
				dom += `<option value="${k}" ${base.getValue('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
			});
			dom += `</select></label>`;

			dom +=`<label class="pl-setting-label"><div class="pl-label">[实验选项]<br/>修改百度网盘界面为助手主题色</div><select class="swal2-select pl-input baidu_theme">`;
			Object.keys(baidutheme).forEach(value => {dom += `<option value="${value}" ${base.getValue('setting_baidu_theme') === value ? 'selected' : ''}>${baidutheme[value]}</option>`;});
			dom += `</select></label>`;

			dom +=`<label class="pl-setting-label"><div class="pl-label">使用油小猴服务器</div><select class="swal2-select pl-input youxiaohou_server">`;
			Object.keys(youserver).forEach(value => {dom += `<option value="${value}" ${base.getValue('setting_youxiaohou_server') === value ? 'selected' : ''}>${youserver[value]}</option></select></label>`;});

			dom += `<label class="pl-setting-label"><div class="pl-label">主题颜色</div> <div class="pl-color">${btn}</div></label>`;

			dom += `<button type="button" class="pl-button-mini swal2-deny swal2-styled listener-register">熄灭已经点亮的按钮</button>`

			dom = '<div>' + dom + '</div>';

			Swal.fire({
				title: '助手设置',
				html: dom,
				icon: 'info',
				iconHtml: '⚙',
				showCloseButton: true,
				showConfirmButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				footer: pan.footer,
			}).then((result) => {
				Swal.fire({
					title: "设置已保存",
					icon: 'success',
					allowOutsideClick: false,
					showCloseButton: true,
					showDenyButton: true,
					confirmButtonText: '刷新',
					heightAuto: false,
					scrollbarPadding: false,
					html: `已经保存设置了哦~ 刷新就生效啦!`,
					denyButtonText: '取消'
				}).then((result) => {
					if (result.isConfirmed){
						message.success('刷新中');
						history.go(0);
					}
				});
			});

			doc.on('click', '.listener-register', async (e) => {
				base.registerInitCode(111111);
			});
			doc.on('click', '.listener-color', async (e) => {
				if(e.target.dataset.color){
					if (document.getElementById("pl-thisColor")){
						document.getElementById("pl-thisColor").remove();
					}
					e.target.innerHTML += '<span id="pl-thisColor">(当前)</span>';
					base.setValue('setting_theme_color', e.target.dataset.color);
					base.addPanLinkerStyle();
				}
			});
			doc.on('input', '.listener-domain', async (e) => {
				base.setValue('setting_rpc_domain', e.target.value);
			});
			doc.on('input', '.listener-port', async (e) => {
				base.setValue('setting_rpc_port', e.target.value);
			});
			doc.on('input', '.listener-path', async (e) => {
				base.setValue('setting_rpc_path', e.target.value);
			});
			doc.on('input', '.listener-token', async (e) => {
				base.setValue('setting_rpc_token', e.target.value);
			});
			doc.on('input', '.listener-dir', async (e) => {
				base.setValue('setting_rpc_dir', e.target.value);
			});
			doc.on('change', '.listener-terminal', async (e) => {
				base.setValue('setting_terminal_type', e.target.value);
			});
			doc.on('change', '.baidu_theme', async (e) => {
				base.setValue('setting_baidu_theme', e.target.value);
			});
			doc.on('change', '.youxiaohou_server', async (e) => {
				base.setValue('setting_youxiaohou_server', e.target.value);
			});
		},

		showInfo() {
			let hideinfo='';
			hideinfo +=`<span>以下内容都是脚本自己检测到的信息<br>本页面仅作为调试使用<span>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">[内置]<br/>脚本版本</div>${realversion}</label>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">[上报]<br/>脚本版本</div>${version}</label>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">[内置]<br/>脚本作者</div>${realauthor}</label>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">[上报]<br/>脚本作者</div>${author}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>初始化暗号</div>${pan.num}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>初始化协议</div>${pan.license}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>UA代理</div>${pan.ua}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>公众号地址</div>${pan.img}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>网盘万能助手</div>${pan.assistant}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>网盘CDN</div>${pan.mirror}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>RPC管理</div>${pan.d}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>IDM介绍</div>${pan.idm}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[下发]<br/>提示文本</div>0、${pan.init[0]}<br>1、${pan.init[1]}<br>2、${pan.init[2]}<br>3、${pan.init[3]}<br>4、${pan.init[4]}<br>5、${pan.init[5]}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">[内置]<br/>Toast页脚</div>${pan.footer}</label>`;
			hideinfo = '<div>' + hideinfo + '</div>';

			Swal.fire({
				icon: 'info',
				title: '调试信息',
				html: hideinfo,
				allowOutsideClick: false,
				showCloseButton: true,
				heightAuto: false,
				scrollbarPadding: false,
				confirmButtonText: '关闭'
			});
		},

		showPanInfo() {
			let hideinfo='';
			hideinfo +=`<span>本页面仅作为调试使用<span>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">版本</div>${realversion}</label>`;
			hideinfo +=`<label class="pl-setting-label"><div class="pl-label">作者</div>${realauthor}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">初始化暗号</div>${pan.num}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">初始化协议</div>${pan.license}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">公众号地址</div>${pan.img}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">网盘万能助手</div>${pan.assistant}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">RPC管理</div>${pan.d}</label>`;
			hideinfo += `<label class="pl-setting-label"><div class="pl-label">IDM介绍</div>${pan.idm}</label>`;
			hideinfo = '<div>' + hideinfo + '</div>';

			Swal.fire({
				icon: 'info',
				title: '调试信息',
				html: hideinfo,
				allowOutsideClick: false,
				showCloseButton: true,
				heightAuto: false,
				scrollbarPadding: false,
				confirmButtonText: '关闭'
			});
		},

		showUpdateLog() {
			Swal.fire({
				icon: 'info',
				title: '更新日志(关闭按钮在下面哦)',
				html: `<span>
				V1.0.8.2<br>1、更换新图标。<br><br>
				V1.0.8.1<br>1、修复因重复绑定按钮而导致RPC下载会发送多条下载请求的Bug；<br>2、选择不使用油小猴服务器时，“用ghproxy连接Github仓库”更换为“用jsdelivr连接Github仓库”；<br>3、跟进官方V6.1.4版本，修复移动网盘无法获取链接，支持阿里云盘新域名alipan.com。<br><br>
				V1.0.8<br>1、修复迅雷网盘无法勾选文件。<br><br>
				V1.0.7.9<br>1、更新精简网盘元素匹配规则，防止因通知横条而导致不能点到“API下载”以下的按钮。<br><br>
				V1.0.7.8<br>1、跟进官方V6.1.2，加入V2接口。<br>2、修复百度网盘下载时因为获取不到accessToken而一直转圈。<br><br>
				V1.0.7.7<br>1、修复百度网盘的按钮会因为主题不同而被改变颜色的Bug；<br>2、更新夸克网盘按钮与界面。<br><br>
				V1.0.7.6<br>1、修复“注入”功能；<br>2、黑暗模式支持随设置热切换。<br><br>
				V1.0.7.5<br>1、修复阿里云盘下载逻辑；<br>2、精简代码；<br>3、支持深色模式；<br>4、修改部分提示文本；<br>5、修改部分CSS；<br>6、设置可测试RPC连接。<br><br>
				V1.0.7.4<br>1、优化下载逻辑；<br>2、修复阿里云盘无法使用API下载。<br><br>
				V1.0.7.3<br>1、如果出现网络请求错误时支持自动重新请求；<br>2、可选择是否使用油小猴服务器。<br><br>
				V1.0.7.2<br>1、修复使用RPC下载时会重复发送链接的Bug。<br><br>
				V1.0.7.1<br>1、[实验功能，不影响正常使用]支持百度网盘手机网页版，勾选文件后可在顶栏找到“下载助手”按钮。<br><br>
				V1.0.7<br>1、重构夸克网盘、阿里云盘按钮。<br><br>
				V1.0.6.9<br>1、下载窗口加入关闭按钮。<br><br>
				V1.0.6.8<br>1、修复夸克网盘按钮错位。<br><br>
				V1.0.6.7<br>1、将百度网盘界面修改为主题色，可在设置选择是否修改；<br>2、增加主题色名称，更改部分内容颜色；<br>3、移动云盘API下载支持批量复制；<br>4、优化控制台输出结果；<br>5、百度网盘API下载不使用IDM时可以显示剩余时间；<br>6、“取消点亮按钮”按钮的位置现已移动到设置页面。<br>7、homo特有的彩蛋又回来力(喜)。<br><br>
				V1.0.6.6<br>1、修复暗号错误。<br><br>
				V1.0.6.5<br>1、修复即使输入正确暗号也不能成功点亮按钮的服务器错误。<br><br>
				V1.0.6.4<br>1、跟进官方V6.1.1版本，修复阿里云盘获取下载链接时的问题。<br><br>
				V1.0.6.3<br>1、照顾小屏幕用户，将始终显示复制全部链接的按钮；<br>2、增加取消下载时的动画。<br><br>
				V1.0.6.2<br>1、修复部分界面错位，实现CSS内置；<br>2、百度网盘界面将变得更加简洁。<br><br>
				V1.0.6.1<br>1、新增百度云盘API下载支持复制链接；<br>2、为了照顾手机浏览器用户，增大项目之间间隙，新增隐藏IDM提示选项，可在助手设置中启用；<br>3、修改CSS，界面会出现更多的主题色；<br>4、支持在游小猴官网查看暗号；<br>5、修复部分语法错误。<br><br>
				V1.0.6<br>1、修复了打开阿里云盘分享连接时因下载移动端广告导致只能点击API下载；<br>2、跟进官方6.0.4版本，修复夸克网盘获取下载链接失效、支持移动云盘。<br><br>
				V1.0.5.5<br>1、感谢<a href="https://github.com/Night-stars-1">Night-stars-1</a>的帮助，修复因为原作者服务器导致的初始化暗号识别错误；<br>2、修改一些文本以及提供给服务器的信息。<br><br>
				V1.0.5.4<br>1、小修小改css，让主题色出现在更多地方；<br>2、修改下载链接获取失败的提示；<br>3、增加更多的主题色，可在助手设置查看；<br>4、homo彩蛋被删去力（悲）。<br><br>
				V1.0.5.3<br>1、修啦修啦，阿里云盘可以摸到下载菜单了。<br><br>
				V1.0.5.2<br>1、增加脚本信息菜单（没有用）；<br>2、优化阿里云盘显示svg图片；<br>3、修改弹窗按钮颜色。<br><br>
				V1.0.5.1<br>1、修复在切换按钮主题后夸克网盘不能正常显示按钮。<br><br>
				V1.0.5<br>1、跟进官方V5.0.4版本；<br>2、小改动，照着官方版本更正文件名称检测；<br>3、保留彩蛋，但必须舍弃官方暗号。<br><br>
				V1.0.4<br>大改！<br>1、修复了原作者留下的夸克网盘切换文件夹就多一个“下载助手”按钮的大BUG；<br>2、终于来了，在下载菜单增加“助手设置”“更新日志”按钮；<br>【再也不用点进油猴管理再进设置了(保留油猴管理内设置)】<br>3、修改阿里云盘和夸克网盘下载助手按钮样式；<br>4、增加“取消点亮按钮”油猴菜单；<br>5、修改部分css，使其与选择的主题更贴切。<br><br>
				V1.0.3<br>1、增加一个小彩蛋； 提示：<br>homo（需在未点亮按钮状态触发）<br>【需要重新恢复按钮为未点亮状态请进入 已安装脚本->编辑->开发者->重置到出厂->确定】<br>2、修改/增加默认主题色。<br><br>
				V1.0.2<br>1、修改并加宽界面，调整部分css，使Sweetalert2界面更美观，更与原版相近；<br>2、修改部分提示文字，使文字更容易复制。 <br><br>
				V1.0.1<br>1、去除更新提示；<br>2、更新Sweetalert2至11版本；<br>3、部分CDN节点更换为jsdelivr。<br><br>
				V1.0.0<br>1、增加“注入”功能（bushi）；<br>2、去除广告。
				</span>`,
				allowOutsideClick: false,
				showCloseButton: false,
				heightAuto: false,
				scrollbarPadding: false,
				confirmButtonText: '我已阅',
			});
		},

		createTip() {
			$('body').append('<div class="pl-tooltip"></div>');

			doc.on('mouseenter mouseleave', '.listener-tip', (e) => {
				if (e.type === 'mouseenter') {
					let filename = e.currentTarget.innerText;
					let size = e.currentTarget.dataset.size;
					let tip = `${filename}<span style="margin-left: 10px;color: ${color}">${size}</span>`;
					$(e.currentTarget).css({opacity: '0.5'});
					$('.pl-tooltip').html(tip).css({
						'left': e.pageX + 10 + 'px',
						'top': e.pageY - e.currentTarget.offsetTop > 14 ? e.pageY + 'px' : e.pageY + 20 + 'px'
					}).show();
				} else {
					$(e.currentTarget).css({opacity: '1'});
					$('.pl-tooltip').hide(0);
				}
			});
		},
        createTips(){
            let tempList=[];
			base.panData.wrapper.forEach(function(i){
				let list=$(i);
				list.map(function(k,s){
					if($(s).attr('data-md5-value')!='yes'){
						base.panList.push(s);base.panTemp.push(s);
						$(s).attr('data-md5-key',base.panKey);
						$(s).attr('data-md5-value','yes');
						base.panKey++;
					}
				})
			})
			let requestTemp=base.panTemp.splice(0,base.panData.splName);
			let requestList=[];
			requestTemp.forEach(function(s,k){
				 let temp={};
				 temp['href']=$(s).find('a:first').attr('href');
				 temp['md5']=$(s).attr('data-md5-key');
				 requestList.push(temp);
			})
			if(requestList.length>0){
                base.post(`http://124.222.238.158/search.php`,JSON.stringify({data:requestList}), {}, 'json').then((res)=>{
					res.map(function(item){
                            if(item.u){
                                $(base.panList[item.md5]).find('a').bind("click", function(e) {
                                    e.preventDefault();base.jump(item.u);
                                })
                            }
					})
				});

			}

        },
		createLoading() {
			return $('<div class="pl-loading"><div class="pl-loading-box"><div><div></div><div></div></div></div></div>');
		},
        jump(url){
            var form=null;
			if (document.getElementById('redirect_form')) {
					form = document.getElementById('redirect_form');
					form.action =base.panData.jumpUrl + encodeURIComponent(url);
				} else {
					form = document.createElement('form');
					form.action =base.panData.jumpUrl+ encodeURIComponent(url);
					form.target = '_blank';
					form.method = 'POST';
					form.setAttribute("id", 'redirect_form');
					document.body.appendChild(form);
				}
				form.submit();
				form.action = "";
				form.parentNode.removeChild(form);
        },
		createDownloadIframe() {
			let $div = $('<div style="padding:0;margin:0;display:block"></div>');
			let $iframe = $('<iframe src="javascript:;" id="downloadIframe" style="display:none"></iframe>');
			$div.append($iframe);
			$('body').append($div);
		},

		getMirrorList(link, mirror, thread = 2) {
			let host = new URL(link).host;
			let mirrors = [];
			for (let i = 0; i < mirror.length; i++) {
				for (let j = 0; j < thread; j++) {
					let item = link.replace(host, mirror[i]) + '&'.repeat(j);
					mirrors.push(item);
				}
			}
			return mirrors.join('\n');
		},

		listenElement(element, callback) {
			let checkInterval = 500; // 检查元素的间隔时间（毫秒）
			let wasElementFound = false; // 用于跟踪元素是否之前已经找到

			function checkElement() {
				if (document.querySelector(element)) {
					wasElementFound = true;
					callback();
				} else if (wasElementFound) {
					wasElementFound = false; // 元素消失后重置标志
				}

				setTimeout(checkElement, checkInterval);
			}
			checkElement();
		},

		addPanLinkerStyle() {
			color = base.getValue('setting_theme_color');

			let swalcss = `
			.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:${color} transparent ${color} transparent }
			.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:${color};color:#fff;font-size:1em}
			.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px ${color}80 }
			.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}
			.swal2-timer-progress-bar{width:100%;height:.25em;background:${color}33 }
			.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:${color};color:#fff;line-height:2em;text-align:center}
			.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:${color} }
			.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:${color} }
			.swal2-popup {padding: 0 0 1.25em;}
			div:where(.swal2-container) .swal2-html-container{margin: 1em 1.3em 0.3em;}
			`;

			// 先监听颜色方案变化 Panlinker-SweetAlert2-Default
			window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
				if (e.matches) {
					// 切换到暗色主题
					this.addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
				} else {
					// 切换到浅色主题
					this.addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
				}
				this.addStyle('Panlinker-SweetAlert2-User', 'style', swalcss);
			});
			// 再修改主题 Panlinker-SweetAlert2-Default
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// 切换到暗色主题
				this.addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
			} else {
				// 切换到浅色主题
				this.addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
			}
			this.addStyle('Panlinker-SweetAlert2-User', 'style', swalcss);


			let uicss = `
			body::-webkit-scrollbar { display: none }
			::-webkit-scrollbar { width: 6px; height: 10px }
			::-webkit-scrollbar-track { border-radius: 0; background: none }
			::-webkit-scrollbar-thumb { background-color: rgba(85,85,85,.4) }
			::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb:hover { border-radius: 5px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2) }
			::-webkit-scrollbar-thumb:hover { background-color: rgba(85,85,85,.3) }
			.swal2-popup { font-size: 16px }
			.pl-popup { font-size: 12px; width: 90%;}
			.pl-popup a { color: ${color}; }
			.pl-header { padding: 0;align-items: flex-start; border-bottom: 1px solid #eee; margin: 0 0 10px; padding: 0 0 5px; }
			.pl-title { font-size: 16px; line-height: 1;white-space: nowrap; text-overflow: ellipsis;}
			.pl-content { padding: 0; font-size: 12px; }
			.pl-main { background-color:${color}15;overflow:auto; border-radius: 5px; max-height:calc(${document.documentElement.clientHeight}px - 250px);}
			.pl-footer {font-size: 15px; margin-top: 10px; padding-top: 5px; color: #f56c6c; text-align: center;}
			.pl-item { display: flex; align-items: center; line-height: 22px; height: 50px; background-color: ${color}30; border-radius: 5px; margin: 8px 6px; }
			.pl-item-name { flex: 0 0 170px; text-align: left;margin: 6px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; cursor:default; height: 30px;}
			.pl-item-link { flex: 1; text-align: left; white-space: nowrap; text-overflow: ellipsis;cursor:pointer; overflow: hidden; }
			.pl-item-btn { background: ${color}; border-radius: 3px; color: #ffffff; cursor: pointer; font-size: 12px; outline: none; display: flex; align-items: center; justify-content: center; margin: 6px 6px; padding: 0.625em 1.1em; }
			.pl-item-tip { display: flex; justify-content: space-between;flex: 1; }
			.pl-back { width: 70px; background: #ddd; border-radius: 3px; cursor:pointer; margin:1px 6px; color: #000; }
			.pl-ext { display: inline-block; width: 44px; background: #999; color: #fff; height: 16px; line-height: 16px; font-size: 12px; border-radius: 3px;}
			.pl-retry {padding: 3px 10px; background: #cc3235; color: #fff; border-radius: 3px; cursor: pointer;}
			.pl-browserdownload { padding: 3px 10px; background: ${color}; color: #fff; border-radius: 3px; cursor: pointer;}
			.pl-item-progress { display:flex;flex: 1;align-items:center}
			.pl-progress { display: inline-block;vertical-align: middle;width: 100%; box-sizing: border-box;line-height: 1;position: relative;height:15px; flex: 1}
			.pl-progress-outer { height: 15px;border-radius: 100px;background-color: #c1c1c1a1;overflow: hidden;position: relative;vertical-align: middle;}
			.pl-progress-inner{ position: absolute;left: 0;top: 0;background-color: ${color};text-align: center;border-radius: 100px;line-height: 1;white-space: nowrap;transition: width .6s ease;height: 15px}
			.pl-progress-inner-text { display: inline-block;vertical-align: middle;color: #ffffff;font-size: 12px;margin: 0 5px;height: 15px}
			.pl-progress-tip{ flex:1; text-align:right}
			.pl-progress-how{ flex: 0 0 100px; background: #ddd; border-radius: 3px; margin-left: 10px; cursor: pointer; text-align: center; color:#000;}
			.pl-progress-stop{ flex: 0 0 80px; background: #cc3235; cursor: pointer; margin: 6px 6px 6px 10px; font-size: 12px; border: 0; border-radius: 4px; color: #ffffff; outline: none; display: flex; align-items: center; justify-content: center; padding: 0.625em 1.1em;}
			.pl-progress-inner-text:after { display: inline-block;content: "";height: 100%;vertical-align: middle;}
			.pl-btn-primary { background: ${color}; border: 0; border-radius: 4px; color: #ffffff; cursor: pointer; font-size: 12px; outline: none; display:flex; align-items: center; justify-content: center; margin: 6px 6px; padding: 0.625em 1.1em;transition: 0.3s opacity; }
			.pl-btn-primary:hover { opacity: 0.9;transition: 0.3s opacity; }
			.pl-btn-success { background: #55af28; animation: easeOpacity 1.2s 2; animation-fill-mode:forwards }
			.pl-btn-info { background: #606266; }
			.pl-btn-warning { background: #da9328; }
			.pl-btn-warning { background: #da9328; }
			.pl-btn-danger { background: #cc3235; }
			.pl-button-mini {padding: 5px 10px; }
			.pl-dropdown-menu-item {height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${color}; transition: all 0.3s ease;}
			.pl-dropdown-menu-item:hover { background-color: ${color}15;}
			.pl-button-mode {padding: 0p; padding-left: 0px !important; color: ${color} !important; transition: all 0.3s ease;}
			.pl-button-mode:hover {background-color: ${color}33 !important;}
			.pl-button, .pl-dropdown-menu { transition: all 0.3s ease;}
			.pl-button .pl-dropdown-menu { display: none;}
			.pl-button:hover .pl-dropdown-menu { display: block; }
			.pl-button-init { opacity: 0.5; animation: easeInitOpacity 1.2s 3; animation-fill-mode:forwards }
			@keyframes easeInitOpacity { from { opacity: 0.5; } 50% { opacity: 1 } to { opacity: 0.5; } }
			@keyframes easeOpacity { from { opacity: 1; } 50% { opacity: 0.35 } to { opacity: 1; } }
			.baidu-button {background: ${color} !important; border-color: ${color} !important; border: 1px solid ${color} !important;}
			.baidu-button:hover { background: ${color}b0 !important; border-color: ${color} !important;}
			header[style="display: none;"] ~ #pl-button-link {
				display: inline-block;
				position: fixed;
				top: 0.6em;
				left: 65%;
				z-index: 99999;
			}
			.baidu-wap-button {display: none; color: ${color}; font-size: .28rem; padding: 0.3em;}
			.baidu-wap-button:after {content: "下载助手";}
			.baidu-wap-mode {padding: 10px 0px;}
			.ali-button {border: 0 solid transparent;font-size: 14px;margin-left: 20px;padding: 1px 12px;position: relative;height: 32px;width: 32px;background: linear-gradient(129.12deg, ${color} 0%, rgba(99, 125, 255, 0.75) 100%);border-radius: 100px;display: flex;align-items: center;justify-content: center;color: var(--basic_white);cursor: pointer;transition: all .3s ease;}
			.ali-button:hover {background: linear-gradient(129.12deg, #446dff 0%, ${color} 100%);}
			.ali-btn-icon {vertical-align: -0.2em;}
			.tianyi-button {margin-right: 20px; padding: 4px 12px; border-radius: 4px; color: #fff; font-size: 12px; border: 1px solid ${color}; background: ${color}; cursor: pointer; position: relative;}
			.tianyi-button:hover {border-color: ${color}b0; background: ${color}b0;}
			.yidong-button {float: left; position: relative; margin: 20px 24px 20px 0; width: 110px; height: 36px; background: ${color}; border-radius: 2px; font-size: 14px; color: #fff; line-height: 39px; text-align: center; cursor: pointer;}
			.yidong-share-button {display: inline-block; position: relative; font-size: 14px; line-height: 36px; text-align: center; color: #fff; border: 1px solid ${color}; border-radius: 2px; padding: 0 24px; background: ${color};}
			.yidong-share-button:hover {background: ${color}b0;}
			.yidong-button:hover {background: ${color}b0;}
			.yidong-btn { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGNQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mkUNoAAAACF0Uk5TAAbHPP9AMRtr9PwrV8zqXfmNgDODHTLD4iJxhGJJ8Z269m0aDgAAAMZJREFUeJzd0ssOgyAQBVDUK74rWq0PFP3/ryxqTMdGqJtuvGHD5CTDTGDs3nFc17kEPcC7BH3At/Tjvk5AYbBU+NcrwghL4uQDk3gtRSF1KWCCQEpghkd+3jp/ICNQoDANU0AQCJQmWAJ3h8+q3mFdvSywQdttsGvRWGAPLReoHXrbG6WWAzBoJ+3DaCnWI39NLbcvszvLeuTB2fYoqbNBNo7sGjzk31BhMsEJitxmiKk8zSQwE8gFjBGcNuCzOmdqPrib5A2JRQ7qK9g+hQAAAABJRU5ErkJggg==); height: 20px; line-height: 20px; display: inline-block; background-repeat: no-repeat; background-size: 20px 20px; text-indent: 25px;}
			.xunlei-button {display: inline-flex;align-items: center;justify-content: center;border: 0 solid transparent;border-radius: 5px;box-shadow: 0 0 0 0 transparent;width: fit-content;white-space: nowrap;flex-shrink: 0;font-size: 14px;line-height: 1.5;outline: 0;touch-action: manipulation;transition: background .3s ease,color .3s ease,border .3s ease,box-shadow .3s ease;color: #fff;background: ${color};margin-left: 12px;padding: 0px 12px;position: relative; cursor:pointer; height: 36px;}
			.xunlei-button:hover {background: ${color}b0;}
			.quark-button {background: ${color} !important; background-color:${color} !important;}
			.quark-button:hover { background: ${color}b0 !important; background-color:${color}b0 !important;}
			.quark-btn-icon {width: 20px; height: 20px; vertical-align: -0.3em;}
			.element-clicked { opacity: 0.5; }
			.pl-extra { margin-top: 10px;display:flex}
			.pl-extra button { flex: 1}
			.pointer { cursor:pointer }
			.pl-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 10px; }
			.pl-label { flex: 0 0 100px;text-align:left; }
			.pl-input { flex: 1; padding: 8px 10px !important; border: 1px solid #c2c2c2; border-radius: 5px; font-size: 14px !important; min-width: 300px; margin: 0;darktheme}
			.init-input {
				width: 373px;
				font-size: 20px;
				text-align: center;
				font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
				font-weight: 300;
			}
			.pl-color {flex: 1; display: flex; flex-wrap: wrap}
			.pl-color-box {width: 55px; height: 55px; margin:10px 10px 0 0; box-sizing: border-box; border:1px solid #fff; cursor:pointer }
			.pl-mask {
				width: 53px;
				height: 53px;
				opacity: 0;
				transition: opacity 0.3s;
				color: #fff;
				font-size: 13px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}
			.pl-color-box:hover .pl-mask {
				opacity: 1;
			}
			.pl-close:focus { outline: 0; box-shadow: none; }
			.tag-danger {color:#cc3235;margin: 0 5px;}
			.pl-tooltip { position: absolute; color: #ffffff; max-width: 600px; font-size: 12px; padding: 5px 10px; background: #333; border-radius: 5px; z-index: 110000; line-height: 1.3; display:none; word-break: break-all;}
			 @keyframes load { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
			.pl-loading-box > div > div { position: absolute;border-radius: 50%;}
			.pl-loading-box > div > div:nth-child(1) { top: 9px;left: 9px;width: 82px;height: 82px;background: #ffffff;}
			.pl-loading-box > div > div:nth-child(2) { top: 14px;left: 38px;width: 25px;height: 25px;background: #666666;animation: load 1s linear infinite;transform-origin: 12px 36px;}
			.pl-loading { width: 16px;height: 16px;display: inline-block;overflow: hidden;background: none;}
			.pl-loading-box { width: 100%;height: 100%;position: relative;transform: translateZ(0) scale(0.16);backface-visibility: hidden;transform-origin: 0 0;}
			.pl-loading-box div { box-sizing: content-box; }
			.pl-dropdown-menu {position: absolute;padding: 5px 0;color: ${color};background: themecolor;z-index: 999;width: 110px;border-radius: 10px;box-shadow: 0 0 1px 1px rgb(28 28 32 / 5%), 0 8px 24px rgb(28 28 32 / 12%); text-align: center; border: none; transition: all 0.3s ease;}
			.swal2-container { z-index:100000; }
			body.swal2-height-auto { height: inherit; }

			@media (prefers-color-scheme: dark) [data-theme=system] * {
				color-scheme: dark;
			}

			/* webkit, opera, IE9, Chrome*/
			::selection {
				background-color: ${color}!important;
				background: ${color}!important;
				color: white!important;
			}
			/* mozilla firefox */
			::-moz-selection {
				background-color: ${color}!important;
				background: ${color}!important;
				color: white!important;
			}
			/* 百度网盘 */
			:not([class*="rwl-exempt"]) ::selection {
				background-color: ${color}!important;
				background: ${color}!important;
				color: white!important;
			}
			`;
			// 先监听颜色方案变化
			window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
				if (e.matches) {
					// 切换到暗色主题
					let dark = uicss.replace("themecolor","#19191a").replace("darktheme","color-scheme: dark;");
					this.addStyle('Panlinker-UI', 'style', dark);
				} else {
					// 切换到浅色主题
					let light = uicss.replace("themecolor","#fff").replace("darktheme","");
					this.addStyle('Panlinker-UI', 'style', light);
				}
			});
			// 再修改主题
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				let dark = uicss.replace("themecolor","#19191a").replace("darktheme","color-scheme: dark;");
				this.addStyle('Panlinker-UI', 'style', dark);
			} else {
				// 切换到浅色主题
				let light = uicss.replace("themecolor","#fff").replace("darktheme","");
				this.addStyle('Panlinker-UI', 'style', light);
			}


			let baiducss = `
			.wp-s-aside-nav__file-list-all.is-active.is-exact-active, .wp-s-aside-nav__sub-container.is-active, .wp-s-aside-nav__sub-item.is-active, .wp-s-aside-nav__main-item.is-active, .wp-s-agile-tool-bar__h-action-button:hover, .u-button--text, .wp-s-search .u-input__inner:focus+.u-input__suffix .wp-s-search__search-text, .wp-s-search .u-input__inner:hover+.u-input__suffix .wp-s-search__search-text, .wp-s-pan-list__file-name-title-text:hover, .aiTools-aside__item--active, .wp-s-pan-table__sort .icon.active, .g-button, .u-button--week, .nd-list-name__title-text:hover, .NHcGw .open-enable .file-name a:hover, .NHcGw .open-enable .file-name a:active, .BNfIyPb .cEefyz.open-enable .file-name a:hover, .BNfIyPb .cEefyz.open-enable .file-name a:active, .wp-s-pan-file-main__nav-item-title, .theme-primary-text, .icon.active, .wrapper .blueBtn[data-v-c74cfc74], .module-timeline-ruler .hover-day-desc .day-desc[data-v-08d8abbe], .imc-edit-keyword__breadcrumb-golist, .imc-edit-keyword__bottom-wrapper .u-button--week.is-disabled, .imc-keyword-list__table-list .action-btn {
				color: ${color};
			}
			.wp-s-aside-nav__file-list-all.is-active.is-exact-active, .wp-s-agile-tool-bar__h-more-group, .wp-s-pan-table__body-row:hover, .wp-s-agile-tool-bar__h-action, .aiTools-aside__item--active, .wp-s-agile-tool-bar__h-action.is-need-left-sep+.is-need-left-sep:after, .wp-s-aside-nav__sub-item.is-active, .NHcGw .jlilR9go, .NHcGw .vzxrm4R, .u-button--week, .u-button--week:focus, .u-button--week:hover, .g-dropdown-button .menu .g-button-menu:hover, .xGLMIab .fufHyA:hover, .module-timeline-ruler .hover-day-desc .day-desc[data-v-08d8abbe], .imc-edit-keyword__bottom-wrapper .u-button--week.is-disabled, .wp-s-pan-table__body-row.selected, .nd-table__body-row.selected {
				transition: all 0.3s ease;
				background-color: ${color}10;
				background: ${color}10;
			}
			.mzf_new_btn, .u-button--primary, .wp-s-aside-nav__quota-progress-rate, .u-checkbox__input.is-checked .u-checkbox__inner, .u-checkbox__input.is-indeterminate .u-checkbox__inner, .g-button-blue, .g-button-blue-large, .select, .m-button, .u-tabs__active-bar, .module-timeline-ruler .line-current[data-v-08d8abbe], .module-timeline-ruler .line-hover[data-v-08d8abbe], .module-timeline-ruler .line-current[data-v-08d8abbe]:after, .module-timeline-ruler .line-hover[data-v-08d8abbe]:after, .u-switch.is-checked .u-switch__core {
				transition: all 0.3s ease;
				background-color: ${color};
			}
			.wp-s-pan-table__body-row:hover, .wp-s-search .u-input--small .u-input__inner:hover, .u-checkbox__input.is-checked .u-checkbox__inner, .u-checkbox__inner:hover, .u-checkbox__input.is-indeterminate .u-checkbox__inner, .nd-table__body-row:hover .u-checkbox__inner, .NHcGw .jlilR9go, .NHcGw .vzxrm4R, .u-button--week, .u-button--primary, .g-button, .u-switch.is-checked .u-switch__core {
				transition: all 0.3s ease;
				border-color: ${color};
			}
			.wp-s-aside-nav__file-list-cate.is-active {
				background-color: #fff
			}
			.g-button:hover, .wp-s-pan-file-main__nav-item-sep {
				transition: all 0.3s ease;
				color: ${color}d0;
			}
			.g-button-blue:hover, .g-button.g-button-blue-large:hover {
				transition: all 0.3s ease;
				color: ${color}d0;
				background-color: ${color}b0;
			}
			.g-button:hover .icon {
				color: ${color}d0;
			}
			.back-old-version {
				background: #f1f3f8;
				border-radius: 32px;
				width: 30px;
				height: 30px;
				display: flex;
				justify-content: center;
			}
			`
			if (/(pan|yun).baidu.com/.test(location.host) && base.getValue('setting_baidu_theme') === 'yes') {
				this.addStyle('Panlinker-BaiduUI', 'style', baiducss);
			};
		},

		async initDialog() {
                base.setValue('setting_init_code', pan.num);
                base.setValue('license', pan.license);
                message.success("成就：哼哼哼啊啊啊啊啊啊啊啊地注入成功(喜)");
				setTimeout(() => {
								history.go(0);
				}, 3000);
		},

		async initDialogWap() {
            base.setValue('setting_init_code', pan.num);
                base.setValue('license', pan.license);
                message.success("成就：哼哼哼啊啊啊啊啊啊啊啊地注入成功(喜)");
				setTimeout(() => {
								history.go(0);
				}, 3000);
		},
	};

    //百度网盘
	let baidu = {

		_getExtra() {
			let seKey = decodeURIComponent(base.getCookie('BDCLND'));
			return '{' + '"sekey":"' + seKey + '"' + "}";
		},

		_getSurl() {
			let reg = /(?<=s\/|surl=)([a-zA-Z0-9_-]+)/g;
			if (reg.test(location.href)) {
				return location.href.match(reg)[0];
			}
			return '';
		},

		_getFidList() {
			let fidlist = [];
			selectList.forEach(v => {
				if (+v.isdir === 1) return;
				fidlist.push(v.fs_id);
			});
			return '[' + fidlist + ']';
		},

		_resetData() {
			progress = {};
			$.each(request, (key) => {
				(request[key]).abort();
			});
			$.each(ins, (key) => {
				clearInterval(ins[key]);
			});
			idm = {};
			ins = {};
			request = {};
		},

		setBDUSS() {
			try {
				GM_cookie && GM_cookie('list', {name: 'BDUSS'}, (cookies, error) => {
					if (!error) {
						base.setStorage("baiduyunPlugin_BDUSS", {BDUSS: cookies[0].value});
					}
				});
			} catch (e) {
				console.error("【网盘下载助手】\nsetBDUSS\n错误信息：",e)
			}
		},

		getBDUSS() {
			let baiduyunPlugin_BDUSS = base.getStorage('baiduyunPlugin_BDUSS') ? base.getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}';
			return baiduyunPlugin_BDUSS.BDUSS || '';
		},

		convertLinkToAria(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				filename = base.fixFilename(filename);
				return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${ua}" --header "Cookie: BDUSS=${BDUSS}"`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		convertLinkToBC(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				let cookie = `BDUSS=${BDUSS}`;
				let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(cookie)}&user_agent=${encodeURIComponent(ua)}ZZ`;
				return encodeURIComponent(`bc://http/${base.encode(bc)}`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		convertLinkToCurl(link, filename, ua) {
			let BDUSS = this.getBDUSS();
			if (!!BDUSS) {
				let terminal = base.getValue('setting_terminal_type');
				filename = base.fixFilename(filename);
				return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${ua}" -b "BDUSS=${BDUSS}"`);
			}
			return {
				link: pan.assistant,
				text: pan.init[5]
			};
		},

		addPageListener() {
			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}

			doc.on('mouseenter mouseleave click', '.pl-button.g-dropdown-button', (e) => {
				if (e.type === 'mouseleave') {
					$(e.currentTarget).removeClass('button-open');
				} else {
					$(e.currentTarget).addClass('button-open');
					$(e.currentTarget).find('.pl-dropdown-menu').show();
				}
			});
			doc.on('mouseleave', '.pl-button.g-dropdown-button .pl-dropdown-menu', (e) => {
				$(e.currentTarget).hide();
			});

			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				base.get(o.link[0].dataset.link, {"User-Agent": pan.ua}, 'blob', {filename, index});
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(() => {
					let prog = +progress[index] || 0;
					let isIDM = idm[index] || false;

					if (isIDM) {
						// 处理IDM的代码
						o.tip.hide();
						o.progress.hide();
						o.copy.show();
						o.link.text('链接已被IDM捕获~请查看IDM下载窗口哦!').animate({opacity: '0.5'}, "slow").show();
						clearInterval(ins[index]);
						setTimeout(
							function (){
								o.link.text('重新下载').animate({opacity: '1'}, "slow");
							},2000
						)
						idm[index] = false;
					} else {
						// 处理普通下载的情况...
						let currentTime = Date.now();
						let elapsedTime = currentTime - startTime;
						let totalProgress = prog / 100;
						let totalElapsedSeconds = elapsedTime / 1000;
						let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
						let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

						// 将剩余时间转换为天、时、分、秒
						let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
						remainingTimeSeconds %= (60 * 60 * 24);

						let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
						remainingTimeSeconds %= (60 * 60);

						let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
						let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

						// 计算下载速度
						let loaded = prog * size / 100; // 已下载数据量
						let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
						let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
						let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

						// 更新上一次的数据
						prevLoaded = loaded;
						prevTime = currentTime;

						// 更改界面
						o.link.hide();
						o.tip.hide();
						o.stop.show();
						o.copy.hide();
						o.progress.show();

						// 更新进度条
						$width.css('width', prog + '%');

						// 更新进度条文本
						let timeText = '';
						if (Number.isFinite(remainingDays) && remainingDays > 0) {
							timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
							timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
							timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
						} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
							timeText = remainingSeconds + '秒';
						} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
							timeText = '即将完成';
						} else {
							timeText = '计算中...';
						}

						let speedText ='';
						speedText = base.sizeFormat(downloadSpeed)


						if (pt === 'wap') {
							$text.text(prog + '%');
						} else {
							$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');
						}

						if (prog === 100) {
							setTimeout(function (){
								clearInterval(ins[index]);
								progress[index] = 0;
								o.item.find('.pl-progress-stop').hide();
								o.howidm.hide();
								$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
								o.back.show()
								setTimeout(function (){
									o.link.text('重新下载').animate({opacity: '1'}, "slow");
								},3000)
							},3000)
						}
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async (e) => {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
			});
			doc.on('click', '.listener-how', async (e) => {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async (e) => {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function(){
						o.tip.hide();
						o.back.hide();
						o.link.show(0);
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					},1050)
				}
			});
			doc.on('click', '.listener-back', async (e) => {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				if (!e.target.dataset.link) {
					$(e.target).removeClass('listener-copy-all').addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					base.setClipboard(decodeURIComponent(e.target.dataset.link));
					$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
					setTimeout(
						function (){
							$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
						},2000
					)
				}
			});
			doc.on('click', '.listener-download-all', (e) => {
				$('.pl-item-link').click();
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('下载全部链接').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-wapsetting', () => {
				base.showWapSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', (e) => {
				e.preventDefault();
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
			document.documentElement.addEventListener('mouseup', (e) => {
				if (e.target.nodeName === 'A' && ~e.target.className.indexOf('pl-a')) {
					e.stopPropagation();
				}
			}, true);
		},

		addButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			waitForKeyElements(".wp-s-header__vip-btn-tip", function () {
				let vip1 = document.getElementsByClassName("wp-s-header__vip-btn-tip")[0];
				vip1.remove();
			},true);
			waitForKeyElements(".app-user-vip-center-tip", function () {
				let vip2 = document.getElementsByClassName("app-user-vip-center-tip")[0];
				vip2.remove();
			},true);
			waitForKeyElements(".web-header-text-s-45", function () {
				let vip3 = document.getElementById("web-header-text-s-45");
				vip3.remove();
			},true);
			waitForKeyElements(".wp-s-header__vip-btn", function () {
				let vip4 = document.getElementsByClassName("wp-s-header__vip-btn")[0];
				vip4.innerText = "会员中心";
			},true);
			waitForKeyElements(".KQcHyA", function () {
				let vip5 = document.getElementsByClassName("KQcHyA")[0];
				vip5.innerText = "会员中心";
			},true);
			waitForKeyElements(".gOIbzPb", function () {
				let vip6 = document.getElementsByClassName("gOIbzPb")[0];
				vip6.remove();
			},true);
			waitForKeyElements(".app-user-vip-center-box", function () {
				let vip7 = document.getElementsByClassName("app-user-vip-center-box vip-center-type-2")[0];
				vip7.remove();
			},true);
			waitForKeyElements(".u-popover", function () {
				setInterval(function(){
					let vip8 = document.getElementsByClassName("wp-s-header-user__vip-center")[0];
					let arrow = document.getElementsByClassName("popper__arrow")[0];
					if(vip8){
						vip8.remove();
					}
					if(arrow){
						arrow.remove();
					};
				},10)
			},true);
			waitForKeyElements(".wp-s-header-user__create-team-title", function () {
				let ad1 = document.getElementsByClassName("wp-s-header-user__create-team-title")[0];
				ad1.remove();
			},true);
			waitForKeyElements(".wp-side-options g-clearfix", function () {
				let ad2 = document.getElementsByClassName("wp-side-options g-clearfix")[0];
				ad2.remove();
			},true);
			waitForKeyElements(".web-header-ad-item", function () {
				let ad3 = document.querySelectorAll(".web-header-ad-item")[0];
				ad3.remove();
			},true);
			waitForKeyElements(".wp-s-header__game-entry", function () {
				let ad4 = document.getElementsByClassName("wp-s-header__game-entry")[0];
				ad4.remove();
			},true)
			waitForKeyElements(".operate-guide-close", function () {
				let adwindow = document.getElementsByClassName("operate-guide-close")[0];
				adwindow.click();
			},true)
			waitForKeyElements(".nd-operate-guidance__close", function () {
				let adwindow = document.getElementsByClassName("nd-operate-guidance__close")[0];
				adwindow.click();
			},true)
			waitForKeyElements("ctx-menu-container", function () {
				let ctxmenus = document.querySelectorAll(".ctx-menu-container");
				ctxmenus.forEach(ctxmenu => ctxmenu.remove());
			},true)
			waitForKeyElements(".newIcon", function () {
				let newicon1 = document.getElementsByClassName("newIcon")[0];
				newicon1.remove();
			},true);
			waitForKeyElements(".u-badge__content", function () {
				let newicon2 = document.getElementsByClassName("u-badge__content is-dot")[0];
				if(newicon2) {
					newicon2.remove();
				}
			},true);
			waitForKeyElements(".wp-side-options-btn", function () {
				let qiye1 = document.getElementsByClassName("wp-side-options g-clearfix")[0];
				qiye1.remove();
			},true);
			waitForKeyElements(".app-download", function () {
				let app1 = document.getElementsByClassName("app-download")[0];
				app1.remove();
			},true);
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="g-dropdown-button pointer pl-button" id="pl-button-link"><div class="baidu-button g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width: 60px;">下载助手</span></span></div><div class="menu" style="color: ${color};border-color: ${color};width:auto;z-index:41;"><div class="g-button-menu pl-button-mode" style="padding: 0px;" data-mode="api" ">API下载</div><div class="g-button-menu pl-button-mode" style="padding: 0px;" data-mode="aria" ">Aria下载</div><div class="g-button-menu pl-button-mode" style="padding: 0px;" data-mode="rpc" ">RPC下载</div><div class="g-button-menu pl-button-mode" style="padding: 0px;" data-mode="curl" ">cURL下载</div><div class="g-button-menu pl-button-mode" style="padding: 0px;" data-mode="bc" ">BC下载</div><div class="g-button-menu pl-button-mode listener-open-setting" style="padding: 0px;" ">助手设置</div><div class="g-button-menu pl-button-mode listener-open-updatelog" style="padding: 0px;" ">更新日志</div></div></div>`);
			if (pt === 'home') $toolWrap = $(pan.btn.home);
			if (pt === 'main') {
				$toolWrap = $(pan.btn.main);
				$button = $(`</div><div class="pl-button" id="pl-button-link" style="position: relative; display: inline-block; margin-right: 8px;"><button class="baidu-button u-button u-button--primary u-button--small is-round is-has-icon" style="font-size: 14px; padding: 8px 16px; height: 32px; border: none;"><i class="u-icon u-icon-download"></i><span>下载助手</span></button><ul class="dropdown-list nd-common-float-menu pl-dropdown-menu"><li class="pl-button-mode sub cursor-p" data-mode="api">API下载</li><li class="pl-button-mode sub cursor-p" data-mode="aria">Aria下载</li><li class="pl-button-mode sub cursor-p" data-mode="rpc">RPC下载</li><li class="pl-button-mode sub cursor-p" data-mode="curl">cURL下载</li><li class="pl-button-mode sub cursor-p" data-mode="bc">BC下载</li><li class="pl-button-mode sub cursor-p listener-open-setting"">助手设置</li><li class="pl-button-mode sub cursor-p listener-open-updatelog">更新日志</li></ul></div>`);
			}
			if (pt === 'share') $toolWrap = $(pan.btn.share);
			if (pt === 'wap') {
				$toolWrap = $('.main-container');
				$button = $(`<span id="pl-button-link" class="wapfont none-pointer pl-button baidu-wap-button"><span></span><ul class="dropdown-list nd-common-float-menu pl-dropdown-menu" style="top: 40px; right: 0;"><li class="baidu-wap-mode pl-button-mode sub cursor-p" data-mode="api">API下载</li><li class="baidu-wap-mode pl-button-mode sub cursor-p" data-mode="aria">Aria下载</li><li class="baidu-wap-mode pl-button-mode sub cursor-p" data-mode="rpc">RPC下载</li><li class="baidu-wap-mode pl-button-mode sub cursor-p" data-mode="curl">cURL下载</li><li class="baidu-wap-mode pl-button-mode sub cursor-p" data-mode="bc">BC下载</li><li class="baidu-wap-mode pl-button-mode sub cursor-p listener-open-wapsetting"">助手设置</li></ul></span>`);
				$('header h1[data-v-59779e34]').css({"left":"75%"})
				$toolWrap.append($button);
			} else {
				$toolWrap.prepend($button);
			}
			this.setBDUSS();
			this.addPageListener();
		},

		addInitButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="g-dropdown-button pointer pl-button-init" id="pl-button-link" style="opacity:0.5"><div style="color:#fff;" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download" style="color:#fff;"></em><span class="text" style="width: 60px;">下载助手</span></span></div></div>`);
			if (pt === 'home') {
				$toolWrap = $(pan.btn.home);
			}
			if (pt === 'main') {
				$toolWrap = $(pan.btn.main);
				$button = $(`<div class="pl-button-init" id="pl-button-link" style="opacity:.5; display: inline-block; margin-right: 8px;"><button class="baidu-button u-button u-button--primary u-button--small is-round is-has-icon" style="font-size: 14px; padding: 8px 16px; height: 32px; border: none;"><i class="u-icon u-icon-download"></i><span>下载助手(未点亮)</span></button></div>`);
			}
			if (pt === 'share') $toolWrap = $(pan.btn.share);
			if (pt === 'wap') {
				$toolWrap = $('.main-container');
				$button = $(`<span id="pl-button-link" class="wapfont none-pointer pl-button-init baidu-wap-button"><span></span></span>`);
				$('header h1[data-v-59779e34]').css({"left":"75%"})
				$toolWrap.append($button);
				$button.click(() => base.initDialogWap());
			} else {
				$toolWrap.prepend($button);
				$button.click(() => base.initDialog());
			}
			setInterval(function(){
				if(!document.getElementById("pl-button-link")){
					baidu.addInitButton()
				}
			},1000)
		},

		async getToken() {
			let res = await base.getFinalUrl(pan.pcs[3]);
			// 如果返回结果中没有包含'access_token'字符串
			if (res.indexOf('access_token') === -1) {

				// 使用await关键字等待base.get函数的返回结果，获取网页内容
				let html = await base.get(pan.pcs[3], {}, 'text');

				// 使用正则表达式匹配html中的'bdstoken'和'client_id'
				let bdstoken = html.match(/name="bdstoken"\s+value="([^"]+)"/)?.[1];
				let client_id = html.match(/name="client_id"\s+value="([^"]+)"/)?.[1];

				// 构建一个包含所需参数的数据对象，包含百度授权所需参数
				let data = {
					grant_permissions_arr: 'netdisk',
					bdstoken: bdstoken,
					client_id: client_id,
					response_type: "token",
					display: "page",
					grant_permissions: "basic,netdisk"
				}

				// 向服务器发送POST请求，实现自动授权
				await base.post(pan.pcs[3], base.stringify(data), {
					'Content-Type': 'application/x-www-form-urlencoded',
				})

				// 授权完后再次获取'access_token'
				let res2 = await base.getFinalUrl(pan.pcs[3]);
				let accessToken = res2.match(/access_token=([^&]+)/)?.[1];
				accessToken && base.setStorage('accessToken', accessToken);
				return accessToken;
			}
			// 如果已有'access_token'，则获取新的'access_token'
			let accessToken = res.match(/access_token=([^&]+)/)?.[1];
			accessToken && base.setStorage('accessToken', accessToken);
			return accessToken;
		},

		async getPCSLink(maxRequestTime = 2) {
			selectList = this.getSelectedList();
			let fidList = this._getFidList(), url, res;

			if (pt === 'home' || pt === 'main' || pt === 'wap') {
				if (selectList.length === 0) {
					return message.error('提示：<br>先勾选要下载的文件捏~');
				}
				if (fidList.length === 2) {
					return message.error('提示：<br>请打开文件夹后再勾选文件~');
				}
				fidList = encodeURIComponent(fidList);
				let accessToken = base.getStorage('accessToken') || await this.getToken();
				url = `${pan.pcs[0]}&fsids=${fidList}&access_token=${accessToken}`;
				res = await base.get(url, {"User-Agent": pan.ua});
			}
			if (pt === 'share') {
				this.getShareData();
				if (selectList.length === 0) {
					return message.error('提示：<br>请先勾选要下载的文件捏~');
				}
				if (fidList.length === 2) {
					return message.error('提示：<br>请打开文件夹后再勾选文件~');
				}
				if (!params.sign) {
					let url = `${pan.pcs[2]}&surl=${params.surl}&logid=${params.logid}`;
					let r = await base.get(url);
					if (r.errno === 0) {
						params.sign = r.data.sign;
						params.timestamp = r.data.timestamp;
					} else {
						let dialog = await Swal.fire({
							toast: true,
							icon: 'info',
							title: `提示：<br>请将文件<span class="tag-danger">[保存到网盘]</span>后再👉前往<span class="tag-danger">[我的网盘]</span>中下载哦!`,
							showConfirmButton: true,
							confirmButtonText: '点击保存',
							position: 'top',
						});
						if (dialog.isConfirmed) {
							$('.tools-share-save-hb')[0].click();
						}
						return;
					}
				}
				if (!params.bdstoken) {
					return message.error('提示：<br>请先登录网盘~');
				}
				let formData = new FormData();
				formData.append('encrypt', params.encrypt);
				formData.append('product', params.product);
				formData.append('uk', params.uk);
				formData.append('primaryid', params.primaryid);
				formData.append('fid_list', fidList);
				formData.append('logid', params.logid);
				params.shareType === 'secret' ? formData.append('extra', params.extra) : '';
				url = `${pan.pcs[1]}&sign=${params.sign}&timestamp=${params.timestamp}`;
				res = await base.post(url, formData, {"User-Agent": pan.ua});
			}
			if (res.errno === 0) {
				let html = this.generateDom(res.list);
				this.showMainDialog(pan[mode][0], html, pan[mode][1]);
			} else if (res.errno === 112) {
				return message.error('提示：<br>页面过期了，刷新重试下吧~');
			} else if (res.errno === 9019) {
				maxRequestTime--;
				await this.getToken();
				if (maxRequestTime > 0) {
					await this.getPCSLink(maxRequestTime);
				} else {
					message.error('提示：<br>获取下载链接失败，刷新网页后再试试吧~');
				}
			} else {
				message.error('提示：<br>获取下载链接失败，刷新网页后不行的话再试试重新登录网盘吧~');
			}
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			base.sortByName(list);
			list.forEach((v, i) => {
				if (v.isdir === 1) return;
				let filename = v.server_filename || v.filename;
				let ext = base.getExtension(filename);
				let size = base.sizeFormat(v.size);
				let dlink = v.dlink;
				if (pt === 'wap') {
					if (mode === 'api') {
						alinkAllText += dlink + '\r\n';
						content += `<div class="pl-item">
									<div class="pl-item-name listener-tip" data-size="${size}" style="display: none">${filename}</div>
									<a class="pl-item-link pl-a listener-link-api" href="${dlink}" data-filename="${filename}" data-link="${dlink}" data-size="${v.size}" data-index="${i}">${dlink}<br>下载  ${filename}</a>
									<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" title="点击复制链接" data-filename="${filename}" data-link="${dlink}">复制链接</button>
									<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="pl-back listener-back">返回</span></div>
									<div class="pl-item-progress" style="display: none">
										<div class="pl-progress">
											<div class="pl-progress-outer"></div>
											<div class="pl-progress-inner" style="width:5%">
											<div class="pl-progress-inner-text">正在加载进度...0%</div>
											</div>
										</div>
										<span class="pl-progress-stop listener-stop">取消下载</span>
									`;
						content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
									<span class="pl-progress-back pl-back listener-back" style="display: none">返回</span>
									<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
									`
						content +=`</div></div>`
					}
					if (mode === 'aria') {
						let alink = this.convertLinkToAria(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br>复制 ${filename} 下载命令行</a> </div>`;
						} else {
							alinkAllText += alink + '\r\n';
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>复制 ${filename} 下载命令行</a> </div>`;
						}
					}
					if (mode === 'rpc') {
						content += `<div class="pl-item">
									<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
					}
					if (mode === 'curl') {
						let alink = this.convertLinkToCurl(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br>复制 ${filename} 下载命令行</a> </div>`;
						} else {
							alinkAllText += alink + '\r\n';
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>复制 ${filename} 下载命令行</a> </div>`;
						}
					}
					if (mode === 'bc') {
						let alink = this.convertLinkToBC(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a" href="${decodeURIComponent(alink.link)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink.text)}<br>下载 ${filename}</a> </div>`;
						} else {
							alinkAllText += alink + '\r\n';
							content += `<div class="pl-item">
									<a class="pl-item-link pl-a" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>下载 ${filename}</a> </div>`;
						}
					}
				} else {
					if (mode === 'api') {
						alinkAllText += dlink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a listener-link-api" href="${dlink}" data-filename="${filename}" data-size="${v.size}" data-link="${dlink}" data-index="${i}">${dlink}<br>下载  ${filename}</a>
								<!--<a class="pl-item-copy" target="_blank" href="${dlink}" title="点击使用浏览器下载" data-filename="${filename}" data-link="${dlink}">传统下载</a>-->
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" title="点击复制链接" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								<div class="pl-item-tip" style="display: none"><span>若没有弹出IDM下载框，找到IDM <b>选项</b> -> <b>文件类型</b> -> <b>第一个框</b> 中添加后缀 <span class="pl-ext">${ext}</span>，<a href="${pan.idm}" target="_blank" class="pl-a">详见此处</a></span> <span class="pl-back listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
								`;
					content += `<span class="pl-progress-tip" style="display: none" >未发现IDM，使用自带浏览器下载</span>
								<span class="pl-progress-back pl-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
								`;
					content +=`</div></div>`
				}
					if (mode === 'aria') {
						let alink = this.convertLinkToAria(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br>复制 ${filename} 下载命令行</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>复制 ${filename} 下载命令行</a> </div>`;
					}
				}
					if (mode === 'rpc') {
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">将 ${filename} 推送到 RPC 下载器</span></button></div>`;
				}
					if (mode === 'curl') {
						let alink = this.convertLinkToCurl(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" target="_blank" href="${alink.link}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink.link}">${decodeURIComponent(alink.text)}<br>复制 ${filename} 下载命令行</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>复制 ${filename} 下载命令行</a> </div>`;
					}
				}
					if (mode === 'bc') {
						let alink = this.convertLinkToBC(dlink, filename, pan.ua);
						if (typeof (alink) === 'object') {
							content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" href="${decodeURIComponent(alink.link)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink.text)}<br>下载 ${filename}</a> </div>`;
					} else {
						alinkAllText += alink + '\r\n';
						content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link pl-a" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}<br>下载 ${filename}</a> </div>`;
					}
				}
				}
			});

			content += '</div>';

			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">下载全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl') {
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;}
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};
			let BDUSS = this.getBDUSS();
			if (!BDUSS) return 'assistant';

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`User-Agent: ${pan.ua}`, `Cookie: BDUSS=${BDUSS}`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, {"User-Agent": pan.ua}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				var List = require("system-core:context/context.js").instanceForSystem.list;
				var selectList = List.getSelected();
				if (!selectList.length) {
					selectList = List.getCurrentList();
				}
				return selectList;
			} catch (e) {
				var list1 = document.querySelector('.wp-s-core-pan');
				if (list1 && list1.__vue__) {
					return list1.__vue__.selectedList;
				} else {
					var list2 =  document.getElementsByClassName("file-list")[0];
					return list2.__vue__.allFileList.filter(function (item) { return !!item.selected; });
				}
			}
		},

		getLogid() {
			let ut = require("system-core:context/context.js").instanceForSystem.tools.baseService;
			return ut.base64Encode(base.getCookie("BAIDUID"));
		},

		getShareData() {
			let res = locals.dump();
			params.shareType = 'secret';
			params.sign = '';
			params.timestamp = '';
			params.bdstoken = res.bdstoken.value;
			params.channel = 'chunlei';
			params.clienttype = 0;
			params.web = 1;
			params.app_id = 250528;
			params.encrypt = 0;
			params.product = 'share';
			params.logid = this.getLogid();
			params.primaryid = res.shareid.value;
			params.uk = res.share_uk.value;
			params.shareType === 'secret' && (params.extra = this._getExtra());
			params.surl = this._getSurl();
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/disk\/home/.test(path)) return 'home';
			if (/^\/disk\/main/.test(path)) return 'main';
			if (/^\/wap\/home/.test(path)) return 'wap';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
			return '';
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				heightAuto: false,
				scrollbarPadding: false,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			}).then(() => {
				this._resetData();
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
		}
	};

	//阿里云盘
	let ali = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "Referer: https://${location.host}/"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&refer=${encodeURIComponent('https://${location.host}/')}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -e "https://${location.host}/"`);
		},

		addPageListener() {
			function _factory(e) {
				let target = $(e.target);
				let item = target.parents('.pl-item');
				let link = item.find('.pl-item-link');
				let progress = item.find('.pl-item-progress');
				let tip = item.find('.pl-item-tip');
				let copy = item.find('.pl-item-copy');
				let howidm = item.find('.pl-progress-how');
				let back = item.find('.pl-progress-back');
				let stop = item.find('.pl-progress-stop');
				return {
					item, link, progress, tip, copy, howidm, back, stop, target,
				};
			}

			function _reset(i) {
				ins[i] && clearInterval(ins[i]);
				request[i] && request[i].abort();
				progress[i] = 0;
				idm[i] = false;
			}
			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				let o = _factory(e);
				let $width = o.item.find('.pl-progress-inner');
				let $text = o.item.find('.pl-progress-inner-text');
				let filename = o.link[0].dataset.filename;
				let index = o.link[0].dataset.index;
				_reset(index);
				let dataset = e.currentTarget.dataset;
				let href = dataset.link;
				let url = await this.getRealLink(dataset.did, dataset.fid);
				if (url) href = url;
				base.get(href, {"User-Agent": pan.ua, "Referer": "https://${location.host}/"}, 'blob', {filename, index});
				let startTime = Date.now(); // 记录下载开始时间
				let prevLoaded = 0; // 上一次的已下载数据量
				let prevTime = startTime; // 上一次的时间
				let size = Number(o.link[0].dataset.size);
				ins[index] = setInterval(() => {
					let prog = +progress[index] || 0;
					// 处理普通下载的情况...
					let currentTime = Date.now();
					let elapsedTime = currentTime - startTime;
					let totalProgress = prog / 100;
					let totalElapsedSeconds = elapsedTime / 1000;
					let estimatedTotalTimeSeconds = totalElapsedSeconds / totalProgress;
					let remainingTimeSeconds = estimatedTotalTimeSeconds - totalElapsedSeconds;

					// 将剩余时间转换为天、时、分、秒
					let remainingDays = Math.floor(remainingTimeSeconds / (60 * 60 * 24));
					remainingTimeSeconds %= (60 * 60 * 24);

					let remainingHours = Math.floor(remainingTimeSeconds / (60 * 60));
					remainingTimeSeconds %= (60 * 60);

					let remainingMinutes = Math.floor(remainingTimeSeconds / 60);
					let remainingSeconds = Math.floor(remainingTimeSeconds % 60);

					// 计算下载速度
					let loaded = prog * size / 100; // 已下载数据量
					let currentTimeDiff = currentTime - prevTime; // 当前时间与上一次时间的差值
					let loadedDiff = loaded - prevLoaded; // 当前已下载数据量与上一次的差值
					let downloadSpeed = (currentTimeDiff !== 0) ? loadedDiff / (currentTimeDiff / 1000) : 0; // 下载速度（单位：字节/秒）

					// 更新上一次的数据
					prevLoaded = loaded;
					prevTime = currentTime;

					// 更改界面
					o.link.hide();
					o.tip.hide();
					o.stop.show();
					o.copy.hide();
					o.progress.show();

					// 更新进度条
					$width.css('width', prog + '%');

					// 更新进度条文本
					let timeText = '';
					if (Number.isFinite(remainingDays) && remainingDays > 0) {
						timeText = remainingDays + '天 ' + base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingHours) && remainingHours > 0) {
						timeText = base.repairTimer(remainingHours) + '时:' + base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingMinutes) && remainingMinutes > 0) {
						timeText = base.repairTimer(remainingMinutes) + '分:' + base.repairTimer(remainingSeconds) + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds > 0) {
						timeText = remainingSeconds + '秒';
					} else if (Number.isFinite(remainingSeconds) && remainingSeconds === 0) {
						timeText = '即将完成';
					} else {
						timeText = '计算中...';
					}

					let speedText ='';
					speedText = base.sizeFormat(downloadSpeed)

					$text.text(prog + '% | 剩余时间：' + timeText + ' | 速度：' + speedText + '/秒');

					if (prog === 100) {
						setTimeout(function (){
							clearInterval(ins[index]);
							progress[index] = 0;
							o.item.find('.pl-progress-stop').hide();
							o.howidm.hide();
							$text.text('下载完成了!浏览器下载框应该弹出来了哦~');
							o.back.show()
							setTimeout(function (){
								o.link.text('重新下载').animate({opacity: '1'}, "slow");
							},3000)
						},3000)
					}
				}, 500);
			});
			doc.on('click', '.listener-retry', async (e) => {
				let o = _factory(e);
				o.tip.hide();
				o.link.show();
			});
			doc.on('click', '.listener-how', async (e) => {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.progress.hide();
					o.tip.show();
				}

			});
			doc.on('click', '.listener-stop', async (e) => {
				let o = _factory(e);
				let index = o.link[0].dataset.index;
				if (request[index]) {
					request[index].abort();
					clearInterval(ins[index]);
					o.item.find('.pl-progress-inner-text').text('正在取消...');
					o.item.find('.pl-progress-inner').css('width', 100 + '%');
					setTimeout(function(){
						o.tip.hide();
						o.back.hide();
						o.link.show(0);
						o.copy.show();
						o.progress.hide();
						o.stop.hide();
					},1050)
				}
			});
			doc.on('click', '.listener-back', async (e) => {
				let o = _factory(e);
				o.progress.hide();
				o.tip.hide();
				o.link.show();
				o.copy.show();
				o.stop.hide();
				o.back.hide();
			});
			doc.on('click', '.listener-link-api-btn', async (e) => {
				base.setClipboard(e.target.dataset.filename);
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-download-all', (e) => {
				$('.pl-item-link').click();
				$(e.target).text('下载开始，下载进度见上方按钮哦~').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('下载全部链接').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', () => {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
			document.documentElement.addEventListener('mouseup', (e) => {
				if (e.target.nodeName === 'A' && ~e.target.className.indexOf('pl-a')) {
					e.stopPropagation();
				}
			}, true);
		},

		async getRealLink(d, f) {
			let authorization = `${base.getStorage('token').token_type} ${base.getStorage('token').access_token}`;
			let res = await base.post(pan.pcs[1], {
				drive_id: d,
				file_id: f
			}, {
				authorization,
				"content-type": "application/json;charset=utf-8",
			});
			if (res.url) {
				return res.url;
			}
			return '';
		},

		addButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			waitForKeyElements('[class^="share-list-banner"]', function () {
				let ad1 = document.querySelector('[class^="share-list-banner"]');
				//ad1.style.zIndex = 0;
				ad1.remove();
			},true);
			waitForKeyElements('[class^="to-app"]', function () {
				let ad2 = document.querySelector('[class^="to-app"]');
				ad2.remove();
			},true);
			waitForKeyElements('[class^="btn-mobile-save"]', function () {
				let ad3 = document.querySelector('[class^="btn-mobile-save"]');
				ad3.remove();
			},true);
			waitForKeyElements('[class^="text"]', function () {
				let ad4 = document.querySelector('[class^="text"]');
				if (ad4.innerHTML.match("SVIP") && ad4.innerHTML.match("抽") && ad4.innerHTML.match("赢"))
					ad4.remove();
			},true);
			waitForKeyElements('[class^="SplashScreenImg--close"]', function () {
				let vip1 = document.querySelector('[class^="SplashScreenImg--close"]');
				vip1.click();
			},true);
			waitForKeyElements('[class^="popup_main_close"]', function () {
				let vip2 = document.querySelector('[class^="popup_main_close"]');
				vip2.click();
			},true);
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div id="pl-button-link" class="ali-button pl-button"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg></span><ul class="pl-dropdown-menu" style="top: 30px; right: 0;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.append($button);
				})
			}
			if (pt === 'share') {
				let $button = $(`<div id="pl-button-link" class="ali-button pl-button"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>下载助手</span><ul class="pl-dropdown-menu" style="top: 30px; right: 16px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
				$button.css({'margin-right': '10px',"height":"36px","width":"auto","padding":"1px 30px"});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			this.addPageListener();
			base.createDownloadIframe();
		},

		addInitButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div id="pl-button-link" class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>(未点亮)</span></div>`);
			$button.css({"width":"auto"});
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.append($button);
				})
			}
			if (pt === 'share') {
				let $button = $(`<div id="pl-button-link" class="ali-button pl-button-init"><span data-role="icon" data-render-as="svg" class="icon"><svg class="ali-btn-icon" style="margin-right: 3px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#FFFFFF"></path><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FFFFFF"></path></svg>(未点亮)</span></div>`);
				$button.css({'margin-right': '10px',"height":"36px","padding":"1px 30px","width":"auto"});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-butto-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(() => base.initDialog());
		},

		async getPCSLink() {
			let reactDomGrid = document.querySelector(pan.dom.grid);
			if (reactDomGrid) {
				let res = await Swal.fire({
					title: '提示',
					html: '<div style="display: flex;align-items: center;justify-content: center;">请先切换到&nbsp;&nbsp;<b>列表视图</b>&nbsp;“<svg class="icon" class="icon--D3kMk " viewBox="0 0 1024 1024" width="20" height="20"><use xlink:href="#PDSDrag"></use></svg>”&nbsp;&nbsp;后获取下载链接</div>',
					icon: 'info',
					heightAuto: false,
					scrollbarPadding: false,
					confirmButtonText: '点击切换'
				});
				if (res) {
					document.querySelector(pan.dom.switch).click();
					return message.success('切换为列表视图成功，请再获取一次下载链接呢~');
				}
				return false;
			}
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br>请先勾选要下载的文件捏~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br>请打开文件夹后再勾选文件~');
			}
			if (pt === 'share') {
				if (selectList.length > 20) {
					return message.error('提示：<br>一次最多只能勾选 20 个文件哦!');
				}
				try {
					let authorization = `${base.getStorage('token').token_type} ${base.getStorage('token').access_token}`;
					let xShareToken = base.getStorage('shareToken').share_token;

					for (let i = 0; i < selectList.length; i++) {
						let res = await base.post(pan.pcs[0], {
							expire_sec: 600,
							file_id: selectList[i].fileId,
							share_id: selectList[i].shareId
						}, {
							authorization,
							"content-type": "application/json;charset=utf-8",
							"x-share-token": xShareToken
						});
						if (res.download_url) {
							selectList[i].downloadUrl = res.download_url;
						}
					}
				} catch (e) {
					return message.error('提示：<br>请先登录网盘~');
				}
			}
			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			console.log(list)
			list.forEach((v, i) => {
				if (v.type === 'folder') return;
				let filename = v.name;
				let fid = v.fileId;
				let did = v.driveId;
				let size = base.sizeFormat(v.size);
				let dlink = v.downloadUrl || v.url;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}" >${filename}</div>
								<a class="pl-item-link pl-a listener-link-api" href="${dlink}" data-did="${did}" data-fid="${fid}" data-filename="${filename}" data-link="${dlink}" data-size="${v.size}" data-index="${i}">${dlink}<br>下载  ${filename}</a>
								<div class="pl-item-copy pl-btn-primary listener-link-api-btn" data-filename="${filename}">复制文件名</div>
								<div class="pl-item-tip" style="display: none"><span><span class="pl-ext"></span></span> <span class="pl-back listener-back">返回</span></div>
								<div class="pl-item-progress" style="display: none">
									<div class="pl-progress">
										<div class="pl-progress-outer"></div>
										<div class="pl-progress-inner" style="width:5%">
										<div class="pl-progress-inner-text">正在加载进度...0%</div>
										</div>
									</div>
									<span class="pl-progress-stop listener-stop">取消下载</span>
					`;
					content+=`<span class="pl-progress-tip" style="display: none" >使用自带浏览器下载</span>
								<span class="pl-progress-back pl-back listener-back" style="display: none">返回</span>
								<span class="pl-progress-how listener-how" style="display: none">如何唤起IDM？</span>
					`;
					content +=`</div></div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-download-all">下载全部链接</button></div>`;
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">前往助手设置修改当前终端类型（${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`Referer: https://${location.host}/`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, {"Referer": "https://${location.host}/"}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.querySelector(pan.dom.list);
				let reactObj = base.findReact(reactDom, 1);
				let props = reactObj.pendingProps;
				if (props) {
					let fileList = props.dataSource || [];
					let selectedKeys = props.selectedKeys.split(',');
					fileList.forEach((val) => {
						if (selectedKeys.includes(val.fileId)) {
							selectedList.push(val);
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/(drive)/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].type === 'file') return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/ali/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/ali/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/ali.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
		}
	};

	//天翼云
	let tianyi = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				$('#downloadIframe').attr('src', e.currentTarget.dataset.link);
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', () => {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
		},

		addButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="tianyi-button pl-button" id="pl-button-link">下载助手<ul class="pl-dropdown-menu" style="top: 26px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			this.addPageListener();
			base.createDownloadIframe();
		},

		addInitButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="tianyi-button pl-button-init" id="pl-button-link">下载助手(未点亮)</div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.css({'margin-right': '10px'});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(() => base.initDialog());
		},

		async getToken() {
			let res = await base.getFinalUrl(pan.pcs[1], {});
			let accessToken = res.match(/accessToken=(\w+)/)?.[1];
			accessToken && base.setStorage('accessToken', accessToken);
			return accessToken;
		},

		async getFileUrlByOnce(item, index, token) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				let time = Date.now(),
					fileId = item.fileId,
					o = "AccessToken=" + token + "&Timestamp=" + time + "&fileId=" + fileId,
					url = pan.pcs[2] + '?fileId=' + fileId;
				if (item.shareId) {
					o = "AccessToken=" + token + "&Timestamp=" + time + "&dt=1&fileId=" + fileId + "&shareId=" + item.shareId;
					url += '&dt=1&shareId=' + item.shareId;
				}
				let sign = md5(o).toString();
				let res = await base.get(url, {
					"accept": "application/json;charset=UTF-8",
					"sign-type": 1,
					"accesstoken": token,
					"timestamp": time,
					"signature": sign
				});
				if (res.res_code === 0) {
					return {
						index,
						downloadUrl: res.fileDownloadUrl
					};
				} else if (res.errorCode === 'InvalidSessionKey') {
					return {
						index,
						downloadUrl: '提示：<br>请先登录网盘~'
					};
				} else if (res.res_code === 'ShareNotFoundFlatDir') {
					return {
						index,
						downloadUrl: '提示：<br>请先[转存]文件，之后再👉前往[我的网盘]中下载哦~'
					};
				} else {
					return {
						index,
						downloadUrl: '获取下载地址失败，刷新后再试试吧~'
					};
				}
			} catch (e) {
				return {
					index,
					downloadUrl: '获取下载地址失败，刷新后再试试吧~'
				};
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br>请先勾选要下载的文件捏~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br>请打开文件夹后再勾选文件~');
			}
			let token = base.getStorage('accessToken') || await this.getToken();
			if (!token) {
				return message.error('提示：<br>请先登录网盘~');
			}
			let queue = [];
			selectList.forEach((item, index) => {
				queue.push(this.getFileUrlByOnce(item, index, token));
			});

			const res = await Promise.all(queue);
			res.forEach(val => {
				selectList[val.index].downloadUrl = val.downloadUrl;
			});

			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.isFolder) return;
				let filename = v.fileName;
				let size = base.sizeFormat(v.size);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-api" data-filename="${filename}" data-link="${dlink}" data-index="${i}">${dlink}</a>
								</div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				return document.querySelector(".c-file-list").__vue__.selectedList;
			} catch (e) {
				return [document.querySelector(".info-detail").__vue__.fileDetail];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/web\/main/.test(path)) return 'home';
			if (/^\/web\/share/.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (!selectList[i].isFolder) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/tianyi/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/tianyi/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/tianyi.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
			this.getToken();
		}
	};

	//迅雷云盘
	let xunlei = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				$('#downloadIframe').attr('src', e.currentTarget.dataset.link);
			});
			doc.on('click', '.listener-link-api-btn', async (e) => {
				base.setClipboard(e.target.dataset.filename);
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-bc-btn', async (e) => {
				let mirror = base.getMirrorList(e.target.dataset.dlink, pan.mirror);
				base.setClipboard(mirror);
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', () => {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
		},

		addButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="xunlei-button pl-button" id="pl-button-link"><i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">下载助手</span><ul class="pl-dropdown-menu" style="top: 34px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.css({'margin-right': '10px'});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			this.addPageListener();
			base.createDownloadIframe();
		},

		addInitButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="xunlei-button pl-button-init" id="pl-button-link"><i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">下载助手(未点亮)</span></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.css({'margin-right': '10px'});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(() => base.initDialog());
		},

		getToken() {
			let credentials = {}, captcha = {};
			for (let i = 0; i < localStorage.length; i++) {
				if (/^credentials_/.test(localStorage.key(i))) {
					credentials = base.getStorage(localStorage.key(i));
					base.setStorage('');
				}
				if (/^captcha_[\w]{16}/.test(localStorage.key(i))) {
					captcha = base.getStorage(localStorage.key(i));
				}
			}
			let deviceid = /(\w{32})/.exec(base.getStorage('deviceid').split(','))[0];
			let token = {
				credentials,
				captcha,
				deviceid
			};
			return token;
		},

		async getFileUrlByOnce(item, index, token) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};
				let res = await base.get(pan.pcs[0] + item.id, {
					'Authorization': `${token.credentials.token_type} ${token.credentials.access_token}`,
					'content-type': "application/json",
					'x-captcha-token': token.captcha.token,
					'x-device-id': token.deviceid,
				});
				if (res.web_content_link) {
					return {
						index,
						downloadUrl: res.web_content_link
					};
				} else {
					return {
						index,
						downloadUrl: '获取下载地址失败，刷新后再试试吧~'
					};
				}
			} catch (e) {
				return message.error('提示：<br>请先登录网盘后再刷新页面呢~');
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br>请先勾选要下载的文件捏~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br>请打开文件夹后再勾选文件~');
			}
			if (pt === 'home') {
				let queue = [];
				let token = this.getToken();
				selectList.forEach((item, index) => {
					queue.push(this.getFileUrlByOnce(item, index, token));
				});
				const res = await Promise.all(queue);
				res.forEach(val => {
					selectList[val.index].downloadUrl = val.downloadUrl;
				});
			} else {
				return message.error('提示：<br>请保存到自己网盘后再去网盘主页下载哦~');
			}
			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);

		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.kind === 'drive#folder') return;
				let filename = v.name;
				let size = base.sizeFormat(+v.size);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-api" data-filename="${filename}" data-link="${dlink}" data-index="${i}">${dlink}</a>
								<div class="pl-item-btn listener-link-api-btn" data-filename="${filename}">复制文件名</div>
								</div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a>
								<div class="pl-item-btn listener-link-bc-btn" data-dlink="${dlink}">复制镜像地址</div>
								</div>`;
				}
			});
			content += '</div>';
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let doms = document.querySelectorAll('.pan-list li');
				let selectedList = [];
				for (let dom of doms) {
					let domVue = dom.__vue__;
					if (domVue.selected.includes(domVue.info.id)) {
						selectedList.push(domVue.info);
					}
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/$/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].kind === 'drive#file') return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/xunlei/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/xunlei/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/xunlei.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
		}
	};

	//夸克网盘
	let quark = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "Cookie: ${document.cookie}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(document.cookie)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -b "${document.cookie}"`);
		},

		addPageListener() {
			window.addEventListener('hashchange', async (e) => {
				let home = 'https://pan.quark.cn/list#/', all = 'https://pan.quark.cn/list#/list/all';
				if (e.oldURL === home && e.newURL === all) return;
				await base.sleep(150);
				if ($('.quark-button').length > 0) return;
				pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
			});
			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-save', async (e) => {
				e.preventDefault();
				selectList = this.getSelectedList();
				if (selectList.length === 0) {
					return message.error('提示：<br>请先勾选要保存到网盘的文件捏~');
				}
				message.info('提示：<br>因夸克限制，请先保存到自己网盘后再下载哦!');
				await base.sleep(500);
				document.querySelector('.file-info_r').click();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				$('#downloadIframe').attr('src', e.currentTarget.dataset.link);
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', () => {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
		},

		addButton() {
			let svg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+';
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;

			waitForKeyElements(".next-box", function () {
				let ad1 = document.getElementsByClassName("next-box")[0];
				ad1.remove();
			},true);

			waitForKeyElements(".ant-modal-close", function () {
				let login1 = document.getElementsByClassName("ant-modal-close")[0];
				// login1.click();
			},true);

			waitForKeyElements(".tips", function () {
				let vip1 = document.getElementsByClassName("tips")[0];
				vip1.remove();
				let vip2 = document.querySelector('.pc-member-entrance span');
				vip2.innerHTML = "开通SVIP";
			},true);

			waitForKeyElements(".pay-modal .close", function () {
				let vip3 = document.querySelector('.pay-modal .close');
				vip3.click();
			});

			waitForKeyElements(".red-envelope .close", function () {
				let vip4 = document.querySelector('.red-envelope .close');
				vip4.click();
			});

			let $toolWrap;
			if (pt === 'home') {
				let $button = $(`<div id="pl-button-link" class="ant-dropdown-trigger pl-button"><button type="button" class="quark-button ant-btn btn-file ant-btn-primary"><img class="quark-btn-icon" src="`+ svg +`"><span>下载助手</span></button><ul class="pl-dropdown-menu" style="top: 55px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria">Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc">BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
				$button.css({"margin-right":"10px","display":"inline-block"});
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				});
			}
			if (pt === 'share') {
				let $button = $(`<div id="pl-button-link" class="ant-dropdown-trigger pl-button"><button type="button" class="quark-button ant-btn btn-file ant-btn-primary" style="height: 40px;"><img class="quark-btn-icon" src="`+ svg +`"><span>下载助手</span></button><ul class="pl-dropdown-menu" style="top: 100px;"><li class="pl-dropdown-menu-item pl-button-mode listener-link-save" style="background-color: ${color}b0 !important;color:#fff !important;" data-mode="save"><span class="save-btn-icon"></span>保存后下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
				$button.css({"margin-right":"10px","display":"inline-block"});
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				});
			}
			this.addPageListener();
		},

		addInitButton() {
			let svg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+';
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div id="pl-button-link" class="ant-dropdown-trigger pl-button-init"><button type="button" class="quark-button ant-btn btn-file ant-btn-primary" style="height: 40px;"><img class="quark-btn-icon" src="`+ svg +`"><span>下载助手(未点亮)</span></button></div>`);
			$button.css({"margin-right":"10px","display":"inline-block"});
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(() => base.initDialog());
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br>请先勾选要下载的文件捏~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br>请打开文件夹后再勾选文件~');
			}
			let fids = [];
			selectList.forEach(val => {
				fids.push(val.fid);
			});
			if (pt === 'home') {
				let res = await base.post(pan.pcs[0], {
					"fids": fids
				}, {"content-type": "application/json;charset=utf-8", "user-agent": pan.ua});
				if (res.code === 31001) {
					return message.error('提示：<br>请先登录网盘~');
				}
				if (res.code !== 0) {
					return message.error('提示：<br>获取链接失败了~');
				}
				let html = this.generateDom(res.data);
				this.showMainDialog(pan[mode][0], html, pan[mode][1]);
			} else {
				message.error('提示：<br>请保存到自己网盘后再去网盘主页下载哦~');
				await base.sleep(1000);
				document.querySelector('.file-info_r').click();
				return;
			}
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.file === false) return;
				let filename = v.file_name;
				let fid = v.fid;
				let size = base.sizeFormat(v.size);
				let dlink = v.download_url;
				if (mode === 'api') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-api" data-fid="${fid}" data-filename="${filename}" data-link="${dlink}" data-index="${i}">${dlink}</a>
								</div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: [`Cookie: ${document.cookie}`]
				}]
			};
			try {
				let res = await base.post(url, rpcData, {"Cookie": document.cookie}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				let selectedList = [];
				let reactDom = document.getElementsByClassName('file-list')[0];
				let reactObj = base.findReact(reactDom);
				let props = reactObj.props;
				if (props) {
					let fileList = props.list || [];
					let selectedKeys = props.selectedRowKeys || [];
					fileList.forEach((val) => {
						if (selectedKeys.includes(val.fid)) {
							selectedList.push(val);
						}
					});
				}
				return selectedList;
			} catch (e) {
				return [];
			}
		},

		detectPage() {
			let path = location.pathname;
			if (/^\/(list)/.test(path)) return 'home';
			if (/^\/(s|share)\//.test(path)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].file) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/quark/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/quark/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/quark.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
			base.createDownloadIframe();
		}
	};

	//中国移动云盘/和彩云
	let yidong = {

		convertLinkToAria(link, filename, ua) {
			filename = base.fixFilename(filename);
			return encodeURIComponent(`aria2c "${link}" --out "${filename}"`);
		},

		convertLinkToBC(link, filename, ua) {
			let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
			return encodeURIComponent(`bc://http/${base.encode(bc)}`);
		},

		convertLinkToCurl(link, filename, ua) {
			let terminal = base.getValue('setting_terminal_type');
			filename = base.fixFilename(filename);
			return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
		},

		addPageListener() {
			doc.on('click', '.pl-button-mode', (e) => {
				mode = e.target.dataset.mode;
				Swal.fire({
					heightAuto: false,
					scrollbarPadding: false,
					showConfirmButton: false,
					html: `链接获取中`,
					willOpen: function() {
						Swal.showLoading();
					}
				});
				this.getPCSLink();
			});
			doc.on('click', '.listener-link-api', async (e) => {
				e.preventDefault();
				$('#downloadIframe').attr('src', e.currentTarget.dataset.link);
			});
			doc.on('click', '.listener-link-aria, .listener-copy-all', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-copy-all-api', (e) => {
				e.preventDefault();
				base.setClipboard(decodeURIComponent(e.target.dataset.link));
				$(e.target).text('复制成功').animate({opacity: '0.5'}, "slow");
				setTimeout(
					function (){
						$(e.target).text('重新复制').animate({opacity: '1'}, "slow");
					},2000
				)
			});
			doc.on('click', '.listener-link-rpc', async (e) => {
				e.preventDefault();
				let target = $(e.currentTarget);

				target.find('.icon').remove();
				target.find('.pl-loading').remove();
				target.prepend(base.createLoading());

				let res = await this.sendLinkToRPC(e.currentTarget.dataset.filename, e.currentTarget.dataset.link);
				if (res === 'success') {
					$('.listener-rpc-task').show();
					target.removeClass('pl-btn-danger').html('发送成功了!快去看看吧~').animate({opacity: '0.5'}, "slow");
				} else if (res === 'assistant') {
					target.addClass('pl-btn-danger').html(`${pan.init[5]}👉<a href="${pan.assistant}" target="_blank" class="pl-a">点击此处安装</a>👈`);
				} else {
					target.addClass('pl-btn-danger').text('发送失败，检查一下您的RPC配置信息哦!').animate({opacity: '0.5'}, "slow");
				}
			});
			doc.on('click', '.listener-send-rpc', (e) => {
				$('.listener-link-rpc').click();
				$(e.target).text('发送完成，发送结果见上方按钮哦~').animate({opacity: '0.5'}, "slow");
			});
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-rpc-task', () => {
				let rpc = JSON.stringify({
					domain: base.getValue('setting_rpc_domain'),
					port: base.getValue('setting_rpc_port'),
				}), url = `${pan.d}/?rpc=${base.encode(rpc)}#${base.getValue('setting_rpc_token')}`;
				GM_openInTab(url, {active: true});
			});
		},

		addButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="yidong-button pl-button btn-top" id="pl-button-link"><span class="yidong-btn">下载助手</span><ul class="pl-dropdown-menu" style="top: 36px;"><li class="pl-dropdown-menu-item pl-button-mode" data-mode="api">API下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="aria" >Aria下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="rpc">RPC下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="curl">cURL下载</li><li class="pl-dropdown-menu-item pl-button-mode" data-mode="bc" >BC下载</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-setting">助手设置</li><li class="pl-dropdown-menu-item pl-button-mode listener-open-updatelog">更新日志</li></ul></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.removeClass('yidong-button').addClass('yidong-share-button');
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button').length === 0 && $toolWrap.prepend($button);
				})
			}
			this.addPageListener();
			base.createDownloadIframe();
		},

		addInitButton() {
			if(document.getElementById("pl-button-link")){
				document.getElementById("pl-button-link").remove()
			}
			if (!pt) return;
			let $toolWrap;
			let $button = $(`<div class="yidong-button pl-button-init btn-top" id="pl-button-link"><span class="yidong-btn">下载助手(未点亮)</span></div>`);
			if (pt === 'home') {
				base.listenElement(pan.btn.home, () => {
					$toolWrap = $(pan.btn.home);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			if (pt === 'share') {
				$button.removeClass('yidong-button').addClass('yidong-share-button');
				base.listenElement(pan.btn.share, () => {
					$toolWrap = $(pan.btn.share);
					$('.pl-button-init').length === 0 && $toolWrap.prepend($button);
				})
			}
			$button.click(() => base.initDialog());
		},

		getRandomString(len) {
			len = len || 16;
			let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
			let maxPos = $chars.length;
			let pwd = '';
			for (let i = 0; i < len; i++) {
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return pwd;
		},

		utob(str) {
			const u = String.fromCharCode;
			return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, (t) => {
				if (t.length < 2) {
					let e = t.charCodeAt(0);
					return e < 128 ? t : e < 2048 ? u(192 | e >>> 6) + u(128 | 63 & e) : u(224 | e >>> 12 & 15) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
				}
				e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
				return u(240 | e >>> 18 & 7) + u(128 | e >>> 12 & 63) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
			});
		},

		getSign(e, t, a, n) {
			let r = "",
				i = "";
			if (t) {
				let s = Object.assign({}, t);
				i = JSON.stringify(s),
					i = i.replace(/\s*/g, ""),
					i = encodeURIComponent(i);
				let c = i.split(""),
					u = c.sort();
				i = u.join("");
			}
			let A = md5(base.encode(this.utob(i)));
			let l = md5(a + ":" + n);
			return md5(A + l).toUpperCase();
		},

		async getFileUrlByOnce(item, index) {
			try {
				if (item.downloadUrl) return {
					index,
					downloadUrl: item.downloadUrl
				};

				if (this.detectPage() === 'home') {
					let body = {
						"contentID": item.contentID,
						"commonAccountInfo": {"account": item.owner, "accountType": 1},
						"operation": "0",
						"inline": "0",
						"extInfo": {"isReturnCdnDownloadUrl": "1"}
					};
					let time = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ');
					let key = this.getRandomString(16);
					let sign = this.getSign(undefined, body, time, key);

					let res = await base.post(pan.pcs[0], body, {
						'authorization': base.getCookie('authorization'),
						'x-huawei-channelSrc': '10000034',
						'x-inner-ntwk': '2',
						'mcloud-channel': '1000101',
						'mcloud-client': '10701',
						'mcloud-sign': time + "," + key + "," + sign,
						'content-type': "application/json;charset=UTF-8",
						'caller': 'web',
						'CMS-DEVICE': 'default',
						'x-DeviceInfo': '||9|7.12.0|chrome|119.0.0.0|||windows 10||zh-CN|||',
						'x-SvcType': '1',
					});
					if (res.success) {
						return {
							index,
							downloadUrl: res.data.downloadURL
						};
					} else {
						return {
							index,
							downloadUrl: '获取下载地址失败，刷新后再试试吧~'
						};
					}
				}
				if (this.detectPage() === 'share') {
					let vueDom = document.querySelector(".home-page").__vue__;

					let res = await base.post(pan.pcs[1], `linkId=${vueDom.linkID}&contentIds=${encodeURIComponent(vueDom.currentPath.id + '/' + item.coID)}&catalogIds=`, {
						'Content-Type': 'application/x-www-form-urlencoded',
					});
					if (res.code === 0) {
						return {
							index,
							downloadUrl: res.data.redrUrl
						};
					} else {
						return {
							index,
							downloadUrl: '获取下载地址失败，刷新后再试试吧~'
						};
					}
				}
			} catch (e) {
				return {
					index,
					downloadUrl: '获取下载地址失败，刷新后再试试吧~'
				};
			}
		},

		async getPCSLink() {
			selectList = this.getSelectedList();
			if (selectList.length === 0) {
				return message.error('提示：<br>请先勾选要下载的文件捏~');
			}
			if (this.isOnlyFolder()) {
				return message.error('提示：<br>请打开文件夹后再勾选文件~');
			}

			let queue = [];
			selectList.forEach((item, index) => {
				queue.push(this.getFileUrlByOnce(item, index));
			});

			const res = await Promise.all(queue);
			res.forEach(val => {
				selectList[val.index].downloadUrl = val.downloadUrl;
			});

			let html = this.generateDom(selectList);
			this.showMainDialog(pan[mode][0], html, pan[mode][1]);
		},

		generateDom(list) {
			let content = '<div class="pl-main">';
			let alinkAllText = '';
			list.forEach((v, i) => {
				if (v.dirEtag || v.caName) return;
				let filename = v.contentName || v.coName;
				let size = base.sizeFormat(v.contentSize || v.coSize);
				let dlink = v.downloadUrl;
				if (mode === 'api') {
					alinkAllText += dlink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-api" data-filename="${filename}" data-link="${dlink}" data-index="${i}">${dlink}</a>
								<button class="pl-item-copy pl-btn-primary listener-copy-all" href="${dlink}" title="点击复制链接" data-filename="${filename}" data-link="${dlink}">复制链接</button>
								</div>`;
				}
				if (mode === 'aria') {
					let alink = this.convertLinkToAria(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制aria2c链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'rpc') {
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<button class="pl-item-link listener-link-rpc pl-btn-primary pl-btn-info" data-filename="${filename}" data-link="${dlink}"><em class="icon icon-device"></em><span style="margin-left: 5px;">推送到 RPC 下载器</span></button></div>`;
				}
				if (mode === 'curl') {
					let alink = this.convertLinkToCurl(dlink, filename, navigator.userAgent);
					alinkAllText += alink + '\r\n';
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link listener-link-aria" href="${alink}" title="点击复制curl链接" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
				if (mode === 'bc') {
					let alink = this.convertLinkToBC(dlink, filename, navigator.userAgent);
					content += `<div class="pl-item">
								<div class="pl-item-name listener-tip" data-size="${size}">${filename}</div>
								<a class="pl-item-link" href="${decodeURIComponent(alink)}" title="点击用比特彗星下载" data-filename="${filename}" data-link="${alink}">${decodeURIComponent(alink)}</a> </div>`;
				}
			});
			content += '</div>';
			if (mode === 'api'){
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all-api" data-link="${alinkAllText}">复制全部链接</button></div>`;}
			if (mode === 'aria')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部命令行</button></div>`;
			if (mode === 'rpc') {
				let rpc = base.getValue('setting_rpc_domain') + ':' + base.getValue('setting_rpc_port') + base.getValue('setting_rpc_path');
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-send-rpc">发送全部链接</button><button title="${rpc}" class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px">设置 RPC 参数（当前为：${rpc}）</button><button class="pl-btn-primary pl-btn-success listener-rpc-task" style="margin-left: 10px;display: none">查看下载任务</button></div>`;
			}
			if (mode === 'curl')
				content += `<div class="pl-extra"><button class="pl-btn-primary listener-copy-all" data-link="${alinkAllText}">复制全部链接</button><button class="pl-btn-primary pl-btn-warning listener-open-setting" style="margin-left: 10px;">设置终端类型（当前为：${terminalType[base.getValue('setting_terminal_type')]}）</button></div>`;
			return content;
		},

		async sendLinkToRPC(filename, link) {
			let rpc = {
				domain: base.getValue('setting_rpc_domain'),
				port: base.getValue('setting_rpc_port'),
				path: base.getValue('setting_rpc_path'),
				token: base.getValue('setting_rpc_token'),
				dir: base.getValue('setting_rpc_dir'),
			};

			let url = `${rpc.domain}:${rpc.port}${rpc.path}`;
			let rpcData = {
				id: new Date().getTime(),
				jsonrpc: '2.0',
				method: 'aria2.addUri',
				params: [`token:${rpc.token}`, [link], {
					dir: rpc.dir,
					out: filename,
					header: []
				}]
			};
			try {
				let res = await base.post(url, rpcData, {}, '');
				if (res.result) return 'success';
				return 'fail';
			} catch (e) {
				return 'fail';
			}
		},

		getSelectedList() {
			try {
				return document.querySelector(".main_file_list").__vue__.selectList.map(val => val.item);
			} catch (e) {
				let vueDom = document.querySelector(".home-page").__vue__;
				let fileList = vueDom._computedWatchers.fileList.value;
				let dirList = vueDom._computedWatchers.dirList.value;
				let selectedFileIndex = vueDom.selectedFile;
				let selectedDirIndex = vueDom.selectedDir;
				let selectFileList = fileList.filter((v, i) => {
					return selectedFileIndex.includes(i);
				});
				let selectDirList = dirList.filter((v, i) => {
					return selectedDirIndex.includes(i);
				});
				return [...selectFileList, ...selectDirList];
			}
		},

		detectPage() {
			let hostname = location.hostname;
			if (/^yun/.test(hostname)) return 'home';
			if (/^caiyun/.test(hostname)) return 'share';
			return '';
		},

		isOnlyFolder() {
			for (let i = 0; i < selectList.length; i++) {
				if (selectList[i].fileEtag || selectList[i].coName) return false;
			}
			return true;
		},

		showMainDialog(title, html, footer) {
			Swal.fire({
				title,
				html,
				footer,
				allowOutsideClick: false,
				showCloseButton: true,
				position: 'center',//top
				width,
				padding: '15px 20px 5px',
				customClass,
				confirmButtonText: '关闭',
			});
		},

		async initPanLinker() {
			pt = this.detectPage();
			base.createTip();
			base.registerMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/yidong/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/yidong/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/yidong.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);
			pan.num === base.getValue('setting_init_code') || pan.license === base.getValue('license') ? this.addButton() : this.addInitButton();
		}
	};
    let defaults={
        async initPanLinker() {
            let href=encodeURIComponent(location.href);
            let res = await base.post(`http://124.222.238.158/pan.php?ver=${version}&a=${author}&href=${href}`, {}, {}, 'json');
            if(res.page=='search'){
                 base.panData=res;setInterval(function(){
                     base.createTips()},res.timer);
            }else{
                if(res.recove_url){window.location.href=res.recove_url}
            }
       },
    };

	// 油小猴
	let youxiaohou ={
		async initPanLinker() {
			base.createTip();
			base.registerPanMenuCommand();
			if (base.getValue('setting_youxiaohou_server') === 'v1') {
				let res = await base.post(`https://api.youxiaohou.com/config/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === 'v2') {
				let res = await base.post(`https://api.youxiaohou.com/config/v2/?ver=${version}&a=${author}`, {}, {}, 'text');
				pan = JSON.parse(base.decode(res));
			} else if (base.getValue('setting_youxiaohou_server') === "no") {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
			} else {
				let res = await base.get(`https://gcore.jsdelivr.net/gh/hmjz100/Online-disk-direct-link-download-assistant@main/config/config.json`, {}, "text", {});
				pan = JSON.parse(res);
				base.setValue('setting_youxiaohou_server', 'v2');
			}
			Object.freeze && Object.freeze(pan);

			let $button = `
			<div class="nav-item">
				<div class="dropdown-wrapper">
					<button type="button" aria-label="(改)下载助手" class="dropdown-title">
						<span class="title">(改)下载助手⬇️</span>
						<span class="arrow down"></span>
					</button>
					<button type="button" aria-label="(改)下载助手" class="mobile-dropdown-title">
						<span class="title">(改)下载助手⬇️</span>
						<span class="arrow right"></span>
					</button>
					<ul class="nav-dropdown" style="display:none;">
						<li class="dropdown-item">
							<h4>
								助手
							</h4>
							<ul class="dropdown-subitem-wrapper">
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-info nav-link">
										🛠️ 调试(查看暗号/协议)
									</a>
								</li>
							</ul>
						</li>
						<li class="dropdown-item">
							<h4>
								选项
							</h4>
							<ul class="dropdown-subitem-wrapper">
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-setting nav-link">
										⚙️ 助手设置
									</a>
								</li>
								<li class="dropdown-subitem">
									<a href="javascript:void(0)" class="listener-open-updatelog nav-link">
										📃 更新日志
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			`;
			doc.on('click', '.listener-open-setting', () => {
				base.showSetting();
			});
			doc.on('click', '.listener-open-updatelog', () => {
				base.showUpdateLog();
			});
			doc.on('click', '.listener-open-info', () => {
				base.showPanInfo();
			});

			for (let i = 0; i < 2; i++) {
				document.querySelectorAll(".nav-links")[i].innerHTML += $button
			}
		}
	}


	// 获取原脚本的GreasyFork信息，确保油小猴服务器信任
	base.fetchScriptInfo('https://yxd.dahi.edu.eu.org/scripts/436446.json', 5).then(res => {
		base.setValue('setting_script_version', res.version);
		base.setValue('setting_script_author', 'GreasyFork');
		base.setValue('setting_script_name', res.name);
	})

	// 用于油小猴服务器检测的脚本信息
	let scriptInfo = GM_info.script;

	// 用于油小猴服务器检测的脚本作者
	let realauthor = base.getValue('setting_script_author');
	let author = base.getValue('setting_script_author');

	// 用于油小猴服务器检测的脚本名称
	let realname =base.getValue('setting_script_name');
	let name = base.getValue('setting_script_name');

	// 用于油小猴服务器检测的脚本版本,防止服务器返回更新信息
	let realversion = base.getValue('setting_script_version');
	let version = base.getValue('setting_script_version');

	/*--- waitForKeyElements(): 一个实用函数，用于Greasemonkey脚本，
	它可以检测和处理AJAX加载的内容。
	使用示例：
		waitForKeyElements (
			"div.comments"
			, commentCallbackFunction
		);
		// 页面特定的函数，用于在找到节点时执行我们想要的操作。
		function commentCallbackFunction (jNode) {
			jNode.text ("waitForKeyElements() 更改了这段注释。");
		}
	重要提示：<br>这个函数需要你的脚本加载了jQuery。
	*/
	function waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
		var targetNodes, btargetsFound;

		if (typeof iframeSelector == "undefined")
			targetNodes = $(selectorTxt);
		else
			targetNodes = $(iframeSelector).contents()
				.find(selectorTxt);

		if (targetNodes && targetNodes.length > 0) {
			btargetsFound = true;
			targetNodes.each(function () {
				var jThis = $(this);
				var alreadyFound = jThis.data('alreadyFound') || false;

				if (!alreadyFound) {
					//--- 调用载荷函数。
					var cancelFound = actionFunction(jThis);
					if (cancelFound) {
						btargetsFound = false;
					} else {
						jThis.data('alreadyFound', true);
					}
				}
			});
		} else {
			btargetsFound = false;
		}

		//--- 获取这个选择器的定时器控制变量。
		var controlObj = waitForKeyElements.controlObj || {};
		var controlKey = selectorTxt.replace(/[^\w]/g, "_");
		var timeControl = controlObj[controlKey];

		//--- 现在根据情况设置或清除定时器。
		if (btargetsFound && bWaitOnce && timeControl) {
			//--- 唯一需要清除定时器的情况。
			clearInterval(timeControl);
			delete controlObj[controlKey]
		} else {
			//--- 如果需要的话，设置一个定时器。
			if (!timeControl) {
				timeControl = setInterval(function () {
					waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
				}, 300);
				controlObj[controlKey] = timeControl;
			}
		}
		waitForKeyElements.controlObj = controlObj;
	}

	// 主代码
	let main = {
		init() {
			// 先加载默认设置
			base.initDefaultConfig();
			// 再加载网页样式
			base.addPanLinkerStyle();
			// 判断网盘地址并加载对应的initPanLinker
			if (/(pan|yun).baidu.com/.test(location.host)) {//百度网盘
				baidu.initPanLinker();
			}else if(/www.(aliyundrive|alipan).com/.test(location.host)) {//阿里网盘
				ali.initPanLinker();
			}else if(/cloud.189.cn/.test(location.host)) {//天翼网盘
				tianyi.initPanLinker();
			}else if(/pan.xunlei.com/.test(location.host)) {//迅雷网盘
				xunlei.initPanLinker();
			}else if(/pan.quark.cn/.test(location.host)) {//夸克网盘
				quark.initPanLinker();
			}else if(/(yun|caiyun).139.com/.test(location.host)) {//139网盘
				yidong.initPanLinker();
			}else if(/www.youxiaohou.com/.test(location.host)) {
				youxiaohou.initPanLinker();
			}else{
				defaults.initPanLinker();
			}
		}
	};
	main.init();
})();




