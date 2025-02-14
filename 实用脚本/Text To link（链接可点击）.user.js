// ==UserScript==
// @name						Text To link
// @description					Turn plain text URLs into clickable links
// @description:zh				把文字链接转换为可点击链接
// @author						lkytal
// @namespace					Lkytal
// @version						2.8.7
// @homepage					https://lkytal.github.io/
// @homepageURL					https://lkytal.github.io/GM
// @license						AGPL
// @include						*
// @exclude						*pan.baidu.com/*
// @exclude						*renren.com/*
// @exclude						*exhentai.org/*
// @exclude						*music.google.com/*
// @exclude						*play.google.com/music/*
// @exclude						*mail.google.com/*
// @exclude						*docs.google.com/*
// @exclude						*www.google.*
// @exclude						*acid3.acidtests.org/*
// @exclude						*.163.com/*
// @exclude						*.alipay.com/*
// @run-at						document-end
// @icon	data:image/png;base64,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
// @grant						unsafeWindow
// @charset						UTF-8
// @supportURL					https://github.com/lkytal/GM/issues
// ==/UserScript==

"use strict";
;
var clearLink, excludedTags, linkFilter, linkMixInit, linkPack, linkify, observePage, observer, setLink, urlPrefixes, url_regexp, xPath;

url_regexp = /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/=]|\w([\w._-])+@\w[\w\._-]+\.(com|cn|org|net|info|tv|cc|gov|edu)|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc|gov|edu))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;

urlPrefixes = ['http://', 'https://', 'ftp://', 'thunder://', 'ed2k://', 'mailto://', 'file://'];

clearLink = function (event) {
  var j, len, link, prefix, ref, ref1, url;
  link = (ref = event.originalTarget) != null ? ref : event.target;
  if (!(link != null && link.localName === "a" && ((ref1 = link.className) != null ? ref1.indexOf("textToLink") : void 0) !== -1)) {
    return;
  }
  url = link.getAttribute("href");
  //console.log url
  for (j = 0, len = urlPrefixes.length; j < len; j++) {
    prefix = urlPrefixes[j];
    if (url.indexOf(prefix) === 0) {
      return;
    }
  }
  if (url.indexOf('@') !== -1) {
    return link.setAttribute("href", "mailto://" + url);
  } else {
    return link.setAttribute("href", "http://" + url);
  }
};

document.addEventListener("mouseover", clearLink);

setLink = function (candidate) {
  var ref, ref1, ref2, span, text;
  if (candidate == null || ((ref = candidate.parentNode) != null ? (ref1 = ref.className) != null ? typeof ref1.indexOf === "function" ? ref1.indexOf("textToLink") : void 0 : void 0 : void 0) !== -1 || candidate.nodeName === "#cdata-section") {
    return;
  }
  text = candidate.textContent.replace(url_regexp, '<a href="$1" target="_blank" class="textToLink">$1</a>');
  if (((ref2 = candidate.textContent) != null ? ref2.length : void 0) === text.length) {
    return;
  }
  span = document.createElement("span");
  span.innerHTML = text;
  return candidate.parentNode.replaceChild(span, candidate);
};

excludedTags = "a,svg,canvas,applet,input,button,area,pre,embed,frame,frameset,head,iframe,img,option,map,meta,noscript,object,script,style,textarea,code".split(",");

xPath = `//text()[not(ancestor::${excludedTags.join(') and not(ancestor::')})]`;

linkPack = function (result, start) {
  var i, j, k, ref, ref1, ref2, ref3, startTime;
  startTime = Date.now();
  while (start + 10000 < result.snapshotLength) {
    for (i = j = ref = start, ref1 = start + 10000; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
      setLink(result.snapshotItem(i));
    }
    start += 10000;
    if (Date.now() - startTime > 2500) {
      return;
    }
  }
  for (i = k = ref2 = start, ref3 = result.snapshotLength; ref2 <= ref3 ? k <= ref3 : k >= ref3; i = ref2 <= ref3 ? ++k : --k) {
    setLink(result.snapshotItem(i));
  }
};

linkify = function (node) {
  var result;
  result = document.evaluate(xPath, node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return linkPack(result, 0);
};

linkFilter = function (node) {
  var j, len, tag;
  for (j = 0, len = excludedTags.length; j < len; j++) {
    tag = excludedTags[j];
    if (tag === node.parentNode.localName.toLowerCase()) {
      return NodeFilter.FILTER_REJECT;
    }
  }
  return NodeFilter.FILTER_ACCEPT;
};

observePage = function (root) {
  var tW;
  tW = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { //+ NodeFilter.SHOW_ELEMENT,
    acceptNode: linkFilter
  }, false);
  while (tW.nextNode()) {
    setLink(tW.currentNode);
  }
};

observer = new window.MutationObserver(function (mutations) {
  var Node, j, k, len, len1, mutation, ref;
  for (j = 0, len = mutations.length; j < len; j++) {
    mutation = mutations[j];
    if (mutation.type === "childList") {
      ref = mutation.addedNodes;
      for (k = 0, len1 = ref.length; k < len1; k++) {
        Node = ref[k];
        observePage(Node);
      }
    }
  }
});

linkMixInit = function () {
  if (window !== window.top || window.document.title === "") {
    return;
  }
  //console.time('a')
  linkify(document.body);
  //console.timeEnd('a')
  return observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

setTimeout(linkMixInit, 100);