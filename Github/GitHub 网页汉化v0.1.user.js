// ==UserScript==
// @name         GitHub 网页汉化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将 GitHub 网页界面翻译为中文
// @author       Your Name
// @icon         data:image/png;base64,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
// @match        https://github.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 翻译映射表
    const translations = {
        // 导航栏
        "Dashboard": "仪表盘",
        "Pull requests": "拉取请求",
        "Issues": "问题",
        "Marketplace": "应用市场",
        "Explore": "探索",
        "Codespaces": "代码空间",
        "Sponsors": "赞助者",
        "Settings": "设置",
        "Sign out": "退出登录",
        "View profile and more": "查看个人资料和更多",
        
        // 仓库页面
        "Code": "代码",
        "Pull requests": "拉取请求",
        "Actions": "操作",
        "Projects": "项目",
        "Wiki": "百科",
        "Security": "安全",
        "Insights": "洞察",
        "New": "新建",
        "Add file": "添加文件",
        "Go to file": "跳转到文件",
        "Find file": "查找文件",
        "Clone": "克隆",
        "Download": "下载",
        "Watch": "关注",
        "Fork": "复刻",
        "Star": "星标",
        "Unwatch": "取消关注",
        "Unfork": "取消复刻",
        "Unstar": "取消星标",
        "Commits": "提交",
        "Branches": "分支",
        "Tags": "标签",
        "Contributors": "贡献者",
        "README": "自述文件",
        "Edit": "编辑",
        "Raw": "原始",
        "Blame": "追溯",
        "Delete": "删除",
        
        // 新增翻译
        "Add a README": "添加自述文件",
        "Ask about this file": "询问关于此文件",
        "Open symbols on click": "点击时打开符号",
        "Load diff": "加载差异",
        "This file was deleted.": "此文件已被删除。",
        "Cancel": "取消",
        "changes": "更改",
        "main": "主干",
        
        // 问题和PR页面
        "Open": "打开",
        "Closed": "已关闭",
        "Merged": "已合并",
        "New issue": "新建问题",
        "Submit new issue": "提交新问题",
        "Comment": "评论",
        "Submit": "提交",
        "Save": "保存",
        "Assignees": "受理人",
        "Labels": "标签",
        "Milestone": "里程碑",
        "No description provided": "未提供描述",
        "Add your reaction": "添加你的反应",
        "Copy link": "复制链接",
        "Quote reply": "引用回复",
        "Reference in new issue": "在新问题中引用",
        
        // 设置页面
        "Account": "账户",
        "Appearance": "外观",
        "Accessibility": "无障碍",
        "Notifications": "通知",
        "Billing and plans": "账单和计划",
        "Emails": "电子邮件",
        "Password and authentication": "密码和认证",
        "SSH and GPG keys": "SSH和GPG密钥",
        "Organizations": "组织",
        "Repositories": "仓库",
        "Moderation": "审核",
        "Packages": "包",
        "Pages": "页面",
        "Developer settings": "开发者设置",
        
        // 通用按钮和提示
        "Search": "搜索",
        "Search or jump to...": "搜索或跳转到...",
        "Clear": "清除",
        "Help": "帮助",
        "Learn more": "了解更多",
        "More actions": "更多操作",
        "Loading...": "加载中...",
        "No results matched your search.": "没有与你的搜索匹配的结果。",
        "See all": "查看全部",
        "Show more": "显示更多",
        "Show less": "显示更少",
        "Copy to clipboard": "复制到剪贴板",
        "Copied!": "已复制!",
        "View all": "查看全部",
        "Back": "返回",
        "Next": "下一步",
        "Previous": "上一步",
        "Skip": "跳过",
        "Done": "完成",
        "Close": "关闭",
        "Yes": "是",
        "No": "否",
        
        // 时间相关
        "Today": "今天",
        "Yesterday": "昨天",
        "days ago": "天前",
        "hours ago": "小时前",
        "minutes ago": "分钟前",
        "seconds ago": "秒前",
        "just now": "刚刚",
        
        // 更多高级术语
        "Pull request": "拉取请求",
        "Merge pull request": "合并拉取请求",
        "Squash and merge": "压缩并合并",
        "Rebase and merge": "变基并合并",
        "Create merge commit": "创建合并提交",
        "Conversation": "对话",
        "Files changed": "文件变更",
        "Review changes": "审查变更",
        "Approve": "批准",
        "Request changes": "请求更改",
        "Submit review": "提交审查",
        
        // 新增翻译
        "Add a README": "添加自述文件",
        "Ask about this file": "询问关于此文件",
        "Open symbols on click": "点击时打开符号",
        "Delete file": "删除文件",
        "Load diff": "加载差异",
        "This file was deleted.": "此文件已被删除。",
        "Cancel changes": "取消更改",
        "main": "主干",
        "Sort": "排序",
        "Link a project": "链接项目",
        "Provide quick access to relevant projects.": "提供对相关项目的快速访问。",
        "Add projects to view them here.": "添加项目以在此处查看它们。",
        "Welcome to projects": "欢迎使用项目",
        "Built like a spreadsheet, project tables give you a live canvas to filter, sort, group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "项目表格像电子表格一样，为您提供一个实时画布来过滤、排序、分组问题和拉取请求。通过自定义字段和保存的视图来满足您的需求。",
        "Dependabot": "依赖机器人",
        "Assistive": "辅助",
        "Download for": "下载用于"
    };

    // 递归翻译DOM节点
    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // 翻译文本节点
            const text = node.nodeValue.trim();
            if (text && translations[text]) {
                node.nodeValue = node.nodeValue.replace(text, translations[text]);
            } else {
                // 尝试部分匹配和替换
                for (const [english, chinese] of Object.entries(translations)) {
                    if (node.nodeValue.includes(english)) {
                        node.nodeValue = node.nodeValue.replace(english, chinese);
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 翻译元素节点的属性
            if (node.hasAttribute('placeholder')) {
                const placeholder = node.getAttribute('placeholder');
                if (translations[placeholder]) {
                    node.setAttribute('placeholder', translations[placeholder]);
                }
            }
            
            if (node.hasAttribute('aria-label')) {
                const ariaLabel = node.getAttribute('aria-label');
                if (translations[ariaLabel]) {
                    node.setAttribute('aria-label', translations[ariaLabel]);
                }
            }
            
            // 排除脚本和样式标签
            if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
                // 递归翻译子节点
                node.childNodes.forEach(translateNode);
            }
        }
    }

    // 主翻译函数
    function translatePage() {
        translateNode(document.body);
    }

    // 初始翻译
    translatePage();

    // 监听DOM变化，对新加载的内容进行翻译
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(translateNode);
            }
        });
    });

    // 开始监听DOM变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 添加一个自定义样式以优化汉化后的显示效果
    const style = document.createElement('style');
    style.textContent = `
        /* 设置字体，优先使用中文友好的字体 */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
    `;
    document.head.appendChild(style);

    console.log("GitHub 汉化脚本已启用");
})(); 