// ==UserScript==
// @name         Telegram Web界面汉化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将Telegram Web界面翻译成中文
// @author       Your Name
// @match        https://web.telegram.org/*
// @match        https://web.telegram.org/k/*
// @match        https://web.telegram.org/z/*
// @match        https://web.telegram.org/a/*
// @grant        none
// @run-at       document-idle
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';

    // 翻译字典 - 按类别整理分类
    const categorizedTranslations = {
        // 基本操作按钮
        basicActions: {
            "Send": "发送",
            "Cancel": "取消",
            "CANCEL": "取消",
            "OK": "确定",
            "Ok": "确定",
            "ok": "确定",
            "Done": "完成",
            "Edit": "编辑",
            "Delete": "删除",
            "Forward": "转发",
            "Reply": "回复",
            "Pin": "置顶",
            "Unpin": "取消置顶",
            "Copy": "复制",
            "Translate": "翻译",
            "Select": "选择",
            "Search": "搜索",
            "Add": "添加",
            "Remove": "移除",
            "Close": "关闭",
            "Save": "保存",
            "Next": "下一步",
            "Back": "返回",
            "Share": "分享",
            "Download": "下载",
            "HIDE": "隐藏",
            "Hide": "隐藏",
            "Show": "显示"
        },

        // 基本界面元素
        basicElements: {
            "Contacts": "联系人",
            "Settings": "设置",
            "Saved Messages": "收藏信息",
            "Calls": "通话",
            "Chats": "聊天",
            "Chat": "聊天",
            "chat": "聊天",
            "chats": "聊天",
            "More": "更多",
            "Channel": "频道",
            "channel": "频道",
            "Channels": "频道",
            "Group": "群组",
            "Help": "帮助",
            "members": "成员",
            "Members": "成员",
            "MEMBERS": "成员",
            " members": "成员",
            "member": "成员",
            "users": "用户",
            " users": "用户",
            "subscribers": "订阅者",
            "Subscribers": "订阅者",
            "SUBSCRIBERS": "订阅者",
            " subscribers": "订阅者",
            "subscriber": "订阅者",
            "Apps": "应用",
            "NEW": "新",
            "All": "全部消息",
            "Info": "信息",
            "Balance": "余额"
        },

        // 媒体类型
        mediaTypes: {
            "Photo": "照片",
            "Photos": "照片",
            "Video": "视频",
            "Videos": "视频",
            "File": "文件",
            "Files": "文件",
            "Voice": "语音",
            "Voice Message": "语音消息",
            "Voice Messages": "语音消息",
            "Music": "音乐",
            "Sticker": "贴纸",
            "Stickers": "贴纸",
            "GIF": "动图",
            "Poll": "投票",
            "Location": "位置",
            "Media": "媒体",
            "Link": "链接",
            "Links": "链接",
            "Animation": "动画",
            "Animations": "动画",
            "ANIMATIONS": "动画",
            "animations": "动画",
            " Animations": "动画",
            "Animations ": "动画",
            " Animations ": "动画",
            "ANIMATION": "动画",
            "animation": "动画",
            "Document": "文档",
            "Shared Media": "共享媒体"
        },

        // 状态指示
        statusIndicators: {
            "online": "在线",
            "ONLINE": "在线",
            "Online": "在线",
            " online": "在线",
            "last seen": "最后在线",
            "last seen just now": "刚刚在线",
            "Today": "今天",
            "Yesterday": "昨天",
            "Muted": "关闭通知",
            "Read": "已读",
            "Archived": "已归档",
            "Unread": "未读",
            "Mute": "静音",
            "Unmute": "取消静音",
            "Block": "屏蔽",
            "Unblock": "取消屏蔽",
            "Archive": "归档",
            "Unarchive": "取消归档",
            "Collapse": "收起",
            "Expand": "展开",
            "typing": "正在输入",
            "Level": "等级",
            "Level 0": "等级 0",
            "Level 1": "等级 1",
            "Level 2": "等级 2",
            "Level 3": "等级 3",
            "edited": "已编辑",
            "edited yesterday at": "昨天编辑于",
            "edited today at": "今天编辑于",
            "Create a New Link": "新建链接",
            "edited at": "编辑于",
            "Enabled": "已启用",
            "Disabled": "已禁用",
            "off": "关闭"
        },

        // 聊天相关操作
        chatOperations: {
            "New Message": "新消息",
            "New Private Chat": "新建私聊",
            "Pinned message": "置顶消息",
            "Pinned Message": "置顶消息",
            "Pinned Messages": "置顶消息",
            "Mark as unread": "标记为未读",
            "Mark as read": "标记为已读",
            "Pin to top": "置顶",
            "View in chat": "在聊天中查看",
            "View in Chat": "在聊天中查看",
            "message selected": "消息已选择",
            "messages selected": "消息已选择",
            "Open in new tab": "在新标签页中打开",
            "Copy Text": "复制文本",
            "Copy Message Link": "复制消息链接",
            "Delete chat": "删除聊天",
            "Delete Chat": "删除聊天",
            "Delete message": "删除消息",
            "Delete Messages": "删除消息",
            "Delete Selected Messages": "删除选中的消息",
            "Hide chat": "隐藏聊天",
            "Hide pinned message": "隐藏置顶消息",
            "Hide replies": "隐藏回复",
            "Show in chat": "在聊天中显示",
            "Show replies": "显示回复",
            "Message": "发送消息",
            "Unread Messages": "未读消息",
            "forward here to save": "在此转发以保存",
            "Forward here to save": "转发到这里保存",
            "Forward messages here to save them": "转发消息到这里保存",
            "Pin message": "置顶消息",
            "Pin Message": "置顶消息",
            "Unpin all messages": "取消所有置顶消息",
            "Unpin All Messages": "取消所有置顶消息"
        },

        // 群组和频道相关
        groupAndChannel: {
            "Groups": "群组",
            "New Channel": "新建频道",
            "New Group": "新建群组",
            "Channel Info": "频道信息",
            "Group Info": "群组信息",
            "JOIN CHANNEL": "加入频道",
            "Channel created": "频道已创建",
            "APPLY TO JOIN GROUP": "申请加入群组",
            "Join": "加入",
            "Leave": "退出",
            "Leave Channel": "退出频道",
            "Leave Group": "退出群组",
            "Leave group": "退出群组",
            "Delete and leave": "删除并退出",
            "DELETE AND LEAVE": "删除并退出",
            "Delete Channel": "删除频道",
            "DELETE CHANNEL": "删除频道",
            "Delete group": "删除群组",
            "DELETE GROUP": "删除群组",
            "Delete Group": "删除群组",
            "Delete and Exit": "删除并退出",
            "Boost Channel": "加速频道",
            "View Discussion": "查看讨论",
            "View discussion": "查看讨论",
            "View Channel": "查看频道",
            "Channel name": "频道名称",
            "Channel Type": "频道类型",
            "Invite Link": "邀请链接",
            "Invite Links": "邀请链接",
            "Administrators": "管理员",
            "Permissions": "权限",
            "Private": "私有",
            "Comments": "评论",
            "comments": "评论",
            "comment": "评论",
            "Discussion": "讨论",
            "Add Bot": "添加机器人"
        },

        // 权限和确认对话框
        permissionsAndConfirmation: {
            "CONFIRM": "确认",
            "Open page": "打开页面",
            "Open": "打开",
            "Are you sure you want to leave and delete": "确定要退出并删除吗?",
            "Are you sure you want to delete and leave the group？": "您确定要删除并退出群组吗?",
            "Are you sure you want to delete": "确定要删除吗?",
            "Are you sure you want to leave and delete?": "确定要退出并删除吗？",
            "Are you sure you want to leave and delete this": "确定要退出并删除这个",
            "Are you sure you want to delete?": "确定要删除吗？",
            "Delete and leave?": "删除并退出？",
            "delete and leave": "删除并退出",
            "Are you sure you want to leave": "确定要退出吗",
            "Are you sure you want to leave?": "确定要退出吗？",
            "Are you sure you want to leave this channel": "确定要退出此频道吗",
            "Are you sure you want to leave this channel?": "确定要退出此频道吗？",
            "Are you sure you want to leave this group": "确定要退出此群组吗",
            "Are you sure you want to leave this group?": "确定要退出此群组吗？",
            "DELETE FOR ALL MEMBERS": "为所有成员删除?",
            "DELETE FOR EVERYONE": "为所有人删除?",
            "Delete For All Members": "为所有成员删除",
            "Delete for all members": "为所有成员删除",
            "delete for all members": "为所有成员删除",
            "Delete For Everyone": "为所有人删除",
            "Delete for everyone": "为所有人删除",
            "delete for everyone": "为所有人删除",
            "DELETE AND BLOCK": "删除并屏蔽",
            "Would you like to unpin this message?": "您想要取消置顶此消息吗？",
            "Do you want to hide the pinned message bar?": "您要隐藏置顶消息栏吗？",
            "It wil stay hidden until a new message is pinned.": "在有新消息被置顶之前，它将保持隐藏。",
            "Are you sure you want to delete this message?": "确定要删除此消息吗？",
            "This will delete it just for you,not for other participants of the chat.": "这将仅为您删除消息，不会对聊天中的其他参与者生效。",
            "This will delete it for everyone in this chat.": "这将为聊天中的所有人删除此消息。"
        },

        // 设置相关
        settings: {
            "General": "通用",
            "Emoji": "表情",
            "All Sets": "所有设置",
            "My Sets": "我的设置",
            "None": "无",
            "General Settings": "常规设置",
            "Notifications": "通知",
            "All Accounts": "所有帐户",
            "Notifications and Sounds": "通知和声音",
            "Privacy and Security": "隐私与安全",
            "Data and Storage": "数据和存储",
            "Chat Folders": "聊天文件夹",
            "Advanced": "高级设置",
            "Language": "语言",
            "Theme": "主题",
            "Color theme": "颜色主题",
            "Dark mode": "深色模式",
            "Light mode": "浅色模式",
            "Night Mode": "夜间模式",
            "Enable Dark Mode": "启用深色模式",
            "Stickers and Emoji": "贴纸和表情",
            "Quick Reaction": "快速回应",
            "Suggest Stickers by Emoji": "通过表情符号建议贴纸",
            "Loop Animated Stickers": "循环播放动画贴纸",
            "Suggest Emoji": "建议表情",
            "Large Emoji": "大号表情",
           "Dynamic Pack Order": "动态包排序",
            "Devices": "设备",
            "This device": "此设备",
            "Telegram Premium": "Telegram高级版",
            "Message Text Size": "消息文字大小",
            "Chat Wallpaper": "聊天壁纸",
            "Enable Animations": "启用动画",
            "Disable Animations": "禁用动画",
            "Power Saving Mode": "省电模式",
            "Translate Messages": "翻译消息",
            "Show Notifications From": "显示来自通知",
            "Private Chats": "私人聊天",
            "Show Translate Button": "显示翻译按钮",
            "Translate Entire Chats": "翻译整个聊天",
            "Do Not Translate": "不要翻译"
        },

        // 日历和时间相关
        dateAndTime: {
            "January": "一月",
            "February": "二月",
            "March": "三月",
            "April": "四月",
            "May": "五月",
            "June": "六月",
            "July": "七月",
            "August": "八月",
            "September": "九月",
            "October": "十月",
            "November": "十一月",
            "December": "十二月",
            
            "Jan": "1月",
            "Feb": "2月",
            "Mar": "3月",
            "Apr": "4月",
            "May": "5月",
            "Jun": "6月",
            "Jul": "7月",
            "Aug": "8月",
            "Sep": "9月",
            "Oct": "10月",
            "Nov": "11月",
            "Dec": "12月",
            
            "Monday": "星期一",
            "Tuesday": "星期二",
            "Wednesday": "星期三",
            "Thursday": "星期四",
            "Friday": "星期五",
            "Saturday": "星期六",
            "Sunday": "星期日",
            
            "Mon": "周一",
            "Tue": "周二",
            "Wed": "周三",
            "Thu": "周四",
            "Fri": "周五",
            "Sat": "周六",
            "Sun": "周日",
            
            "Calendar": "日历",
            "Select date": "选择日期",
            "Choose date": "选择日期",
            "Choose time": "选择时间",
            "Select time": "选择时间",
            "Time": "时间",
            "Time Format": "时间格式",
            "hour": "小时",
            "minute": "分钟",
            "second": "秒",
            "AM": "上午",
            "PM": "下午",
            "Day": "日",
            "Week": "周",
            "Month": "月",
            "Year": "年"
        },

        // 特殊功能
        specialFeatures: {
            "Stories": "状态",
            "My Stories": "我的状态",
            "Story Archive": "状态存档",
            "Create Story": "创建状态",
            "View Story": "查看状态",
            "Post Story": "发布状态",
            "No posted stories": "暂无发布的状态",
            "Hide story": "隐藏状态",
            "Start Video chat": "开始视频聊天",
            "Start Video Chat": "视频聊天",
            "Join video chat": "加入视频聊天",
            "Leave video chat": "离开视频聊天",
            "End video chat": "结束视频聊天",
            "this video chat?": "此视频聊天？",
            "Live Stream": "直播",
            "Live stream started": "直播已开始",
            "Stream With...": "直播流",
            "START STREAMING": "开始推流",
            "Boosts": "加速",
            "Boost History": "加速历史",
            "Send a Gift": "发送礼物",
            "Gift Premium": "赠送Premium",
            "Premium Gifting": "赠送高级版",
            "All gifts": "所有礼物",
            "Buy a Gift": "购买礼物"
        },

        // 文件夹相关
        folders: {
            "New Folder": "新建分组",
            "Edit Folder": "编辑分组",
            "Remove Folder": "移除分组",
            "Folder name": "分组名",
            "Include Chats": "包含的对话",
            "Included Chats": "包含的对话",
            "Add Chats": "添加对话",
            "Exclude Chats": "不包含的对话",
            "Excluded Chats": "不包含的对话",
            "Remove Chats": "移除对话",
            "Chat types": "聊天类型",
            "Delete Folder": "删除分组",
            "Create Folder": "创建分组",
           "Recommended Folders": "推荐分组",
            "Edit folders": "编辑分组",
            "Folders": "文件夹",
            "Unread": "未读",
            "Personal": "个人",
            "Archived Chats": "收纳聊天",
            "ARCHIVED CHATS": "已归档的聊天",
            "Hide folder": "隐藏文件夹",
            "Show in folder": "在文件夹中显示",
            "Hide from folder": "从文件夹中隐藏",
            "Folders on the Left": "文件夹在左侧",
            "Folders above chats": "文件夹在聊天上方",
            "Folders view": "文件夹视图"
        },

        // 消息输入相关
        messageInput: {
            "Add a caption...": "添加说明...",
            "Send File": "发送文件",
            "Drop files here to send them": "拖放文件到这里发送",
            "Send Photo": "发送图片",
            "Photo or Video": "照片或视频",
            "Leave a comment": "发表评论",
            "Keyboard": "键盘",
            "New line by Shift Enter": "按Shift+Enter换行",
            "Send by Ctrl Enter": "按Ctrl+Enter发送",
            "New line by Enter": "按Enter换行",
            "Forward to...": "转发到......",
            "Forward to.": "转发至。",
            "Forward to Chat": "转发到聊天",
            "Send As Copy": "以复制形式发送",
            "Send to multiple chats": "发送到多个聊天",
            "Choose recipients": "选择接收者"
        },

        // 隐私和安全相关
        privacyAndSecurity: {
            "Blocked Users": "已屏蔽用户",
            "Block user": "屏蔽用户",
            "Block Bot": "屏蔽机器人",
            "Passcode Lock": "密码锁",
            "Active Sessions": "活动会话",
            "Two-Step Verification": "两步验证",
            "Payments": "支付",
            "CLEAR": "清理",
            "Privacy": "隐私",
            "Privacy Policy": "隐私政策",
            "Clear payment info": "清理付款信息",
            "Delete cloud drafts": "删除云端草稿",
            "Who can see my phone number？": "谁可以看到我的电话号码?",
            "My Contacts": "我的联系人",
            "Who can see my Last Seen time？": "谁可以看到我的最后在线时间?",
            "Nobody": "没有人",
            "Who can see my profile photos？": "谁可以看到我的头像?",
            "Everybody": "所有人",
            "Who can see my bio？": "谁可以看到我的个人简介?",
            "Who can call me？": "谁可以给我打电话?",
            "Who can add a link to my account when forwarding my messages？": "转发我的消息时谁可以添加我的账号链接？",
            "Who can add me to group chats？": "谁可以将我添加到群聊？",
            "Who can send me voice or video messages？": "谁可以给我发送语音或视频消息？",
            "Who can send me messages？": "谁可以给我发消息？",
            "Change who can send you messages.": "更改谁可以给您发送消息。",
            "Delete All Cloud Drafts": "删除所有云端草稿",
            "Delete drafts": "删除草稿",
            "Terminate All Other Sessions": "终止所有其他会话",
            "Clear Payment and Shipping Info": "清除支付和配送信息",
            "Sensitive Content": "敏感内容",
            "Never Share With": "从不分享给",
            "Always Share With": "始终分享给"
        },

        // 其他界面元素
        otherInterface: {
            "You": "你",
            "Bot": "机器人",
            "Bots": "机器人",
            "Report": "举报",
            "Report a Bug": "报告问题",
            "Report Bug": "报告问题",
            "What is wrong with this channel?": "这个频道有什么问题？",
            "Edit Profile": "编辑资料",
            "Username": "用户名",
            "optional": "可选",
            "Name": "名字",
            "Last Name": "姓氏",
            "Bio": "个人简介",
            "Phone": "电话",
            "Phone Number": "电话号码",
            "Loading...": "加载中...",
            "Connecting...": "正在连接...",
            "Waiting for network...": "等待网络连接...",
            "Updating...": "更新中...",
            "Loading messages...": "加载消息中...",
            "Loading chats...": "加载聊天中...",
            "Loading media...": "加载媒体中...",
            "Loading stickers...": "加载贴纸中...",
            "Loading history...": "加载历史记录...",
            "History was cleared": "历史记录已清除",
            "Message History": "消息历史",
            "No messages here yet": "这里还没有消息",
            "No comments here yet...": "暂无评论...",
            "No saved GIFs.": "没有已保存的GIF。",
            "No stickers yet": "暂无贴纸",
            "No files here yet": "这里还没有文件",
            "No voice messages here yet": "这里还没有语音消息",
            "No music files here yet": "这里还没有音乐文件",
            "No media files yet": "暂无媒体文件",
            "No bots here yet...": "这里还没有机器人...",
            "Forwarded from": "转发自",
            "LAUNCH": "启动",
            "Open Link": "打开链接"
        },

        // 举报选项
        reportOptions: {
            "I don't like it": "我不喜欢它",
            "I don't like it.": "我不喜欢它",
            "Child abuse": "儿童虐待",
            "Violence": "暴力内容",
            "Illegal goods": "非法物品",
            "lllegal goods": "非法物品",
            "Illegal goods.": "非法物品",
            "Illegal adult content": "非法成人内容",
            "Personal data": "个人数据",
            "Terrorism": "恐怖主义",
            "Scam or spam": "诈骗或垃圾信息",
            "Copyright": "版权问题",
            "Other": "其他",
            "It's not illegal, but must be taken down": "它不违法，但必须下架",
            "It's not illegal,but must be taken down": "它不违法，但必须下架",
            "It's not illegal, but must be taken down.": "它不违法，但必须下架"
        },

        // APP相关
        appRelated: {
            "Install App": "安装应用",
            "Switch to K Version": "切换到K版本",
            "Switch to A version": "切换到A版本",
            "Telegram Features": "Telegram功能",
            "Add Account": "添加账户",
            "Log Out": "退出登录",
            "Powered by": "技术支持",
            "Show Calls Tab": "显示通话标签",
            "would like to open its web app to proceed. It will be able to access your IP address and basic device info.": "想要打开其网页应用继续操作。它将能够访问您的IP地址和基本设备信息。",
            "To launch this web app,you will connect to its website.": "启动Web应用程序打开网页。",
            "By launching this mini app,you agree to the Terms of Service for Mini Apps.": "启动此小程序，即表示您同意小程序服务条款。"
        },

        // 其他未分类词条
        miscellaneous: {
            // ... (其他无法分类的词条)
            "Sending messages is not allowed in this group.": "此群组不允许发送消息。",
            "Select messages": "选择消息",
            "Select Messages": "选择消息",
            "Clear Selection": "清理所选",
            "Hide All": "全部隐藏",
            "Show All": "显示全部",
            "Show more": "显示更多",
            "Preview": "预览",
            "Posts": "帖子",
            "All Chats": "全部聊天",
            "Permanently delete the chat with Group Help?": "永久删除与群组帮助的聊天？",
            "Permanently delete the chat with": "永久删除与",
            "Permanently delete the chat with XXXX?": "永久删除与XXXX的聊天？",
            "Your cloud storage": "你的云存储",
            "Send media and files to store them": "发送媒体和文件以保存",
            "Access this chat from any device": "从任何设备访问此聊天",
            "Use search to quickly find things": "使用搜索快速找到内容"
        }
    };

    // 合并所有分类为一个平面词典，以保持与原有实现的兼容性
    const translations = {};
    
    for (const category in categorizedTranslations) {
        for (const key in categorizedTranslations[category]) {
            translations[key] = categorizedTranslations[category][key];
        }
    }

    // 控制变量
    let observer = null;
    let isTranslating = false;

    // 简化的初始化函数
    function initTranslation() {
        console.log('开始初始化翻译...');
        translateUI();
        setupObserver();
    }

    // 简化的观察者设置
    function setupObserver() {
        if (observer) {
            observer.disconnect();
        }

        observer = new MutationObserver(() => {
            if (!isTranslating) {
                translateUI();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 核心翻译函数
    function translateUI() {
        if (isTranslating) return;
        isTranslating = true;

        try {
            // 获取所有文本节点
            const elements = document.querySelectorAll('div, span, button, a, p, h1, h2, h3, h4, h5, label');
            
            elements.forEach(el => {
                if (!el || !el.textContent) return;
                
                // 翻译文本内容
                const text = el.textContent.trim();
                if (translations[text]) {
                    el.textContent = translations[text];
                }
                
                // 翻译属性
                if (el.hasAttribute('placeholder')) {
                    const placeholder = el.getAttribute('placeholder');
                    if (placeholder && translations[placeholder]) {
                        el.setAttribute('placeholder', translations[placeholder]);
                    }
                }
                
                if (el.hasAttribute('title')) {
                    const title = el.getAttribute('title');
                    if (title && translations[title]) {
                        el.setAttribute('title', translations[title]);
                    }
                }
            });
        } catch (error) {
            console.error('翻译出错:', error);
        }

        setTimeout(() => {
            isTranslating = false;
        }, 100);
    }

    // 等待页面加载完成后开始翻译
    function waitForLoad() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(initTranslation, 1000);
            });
        } else {
            setTimeout(initTranslation, 1000);
        }
    }

    // 重置功能
    window.resetTelegramTranslation = function() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        isTranslating = false;
        setTimeout(initTranslation, 1000);
    };

    // 开始执行
    waitForLoad();

})();