// ==UserScript==
// @name        百度百科 - 将图片改为无水印版本
// @description 本脚本为 百度百科 无水印图片查看 的修改版本。
// @namespace   RainSlide
// @author      RainSlide
// @version     2.1
// @license     bless
// @icon        https://baike.baidu.com/favicon.ico
// @run-at      document-end
// @grant       none
// @match       https://baike.baidu.com/pic/*
// @match       https://baike.baidu.com/picture/*
// @match       https://baike.baidu.com/historypic/*
// @match       https://baike.baidu.com/picview/history/*
// @match       https://bkimg.cdn.bcebos.com/pic/*
// @match       http://bkimg.cdn.bcebos.com/pic/*
// ==/UserScript==

// https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258dbbe38929382d158cdbf4ec7?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5
// https://bkimg.cdn.bcebos.com/pic/0823dd54564e9258dbbe38929382d158cdbf4ec7
// https://imgsrc.baidu.com/baike/pic/item/0823dd54564e9258dbbe38929382d158cdbf4ec7.jpg

"use strict";

const checkHostname = url => url.hostname === "bkimg.cdn.bcebos.com";
const  hasWatermark = url => url.search.includes("watermark");
const       trimUrl = url => url.origin + url.pathname;

if ( checkHostname(location) ) {

	hasWatermark(location) &&
	location.reload( trimUrl(location) );

} else {

	const targetMap = new Map(
		[
			[ document.getElementById("imgPicture"), "src" ],
			[ document.querySelector('a.tool-button.origin'), "href" ]
		].filter(
			pair => pair[0] !== null
		)
	);

	targetMap.forEach(
		(prop, element) => {

			const replaceUrl = () => {
				if (element[prop] !== "") {
					const url = new URL(element[prop]);
					if ( checkHostname(url) && hasWatermark(url) ) {
						element[prop] = trimUrl(url);
					}
				}
			};

			replaceUrl();

			new MutationObserver(replaceUrl).observe(
				element, {
					attributes: true,
					attributeFilter: [prop]
				}
			);

		}
	);

}
