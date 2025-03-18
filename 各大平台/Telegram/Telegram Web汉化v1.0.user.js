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

    // 翻译字典
    const translations = {
        // 导航和标题
        "Contacts": "联系人",
        "Settings": "设置",
        "Saved Messages": "收藏信息",
        "Calls": "通话",
        "Chats": "聊天",
        "New Channel": "新建频道",
        "New Group": "新建群组",
        "New Message": "新消息",
        "More": "更多",
        "Log Out": "退出登录",

        // 右键菜单选项
        "Open in new tab": "在新标签页中打开",
        "Add to folder...": "添加到文件夹...",
        "ADD TO FOLDER": "添加到文件夹",
        "Mark as unread": "标记为未读",
        "Mark as read": "标记为已读",
        "Pin to top": "置顶",
        "Mute...": "静音...",
        "Mute for 1 hour": "静音1小时",
        "Mute for 4 hours": "静音4小时",
        "Mute for 8 hours": "静音8小时",
        "Mute for 1 day": "静音1天",
        "Mute for 3 days": "静音3天",
        "Mute Forever": "永久静音",
        "Delete and leave": "删除并退出",
        "DELETE AND LEAVE": "删除并退出",
        "Delete Channel": "删除频道",
        "DELETE CHANNEL": "删除频道",
        "Are you sure you want to leave and delete": "确定要退出并删除吗",
        "Are you sure you want to delete": "确定要删除吗",
        "DELETE FOR ALL MEMBERS": "为所有成员删除",
        "DELETE FOR EVERYONE": "为所有人删除",

        // 群组与频道信息和媒体分类
        "Group Info": "群组信息",
        "Channel Info": "频道信息",
        "Media": "媒体",
        "Link": "链接",
        "Links": "链接",
        "Files": "文件",
        "Music": "音乐",
        "Voice": "语音",
        "member": "成员",
        "subscriber": "订阅者",

        // 新增的频道和消息相关翻译
        "JOIN CHANNEL": "加入频道",
        "Pinned message": "置顶消息",
        "Channel created": "频道已创建",

        // 新增的评论和群组相关翻译
        "Comments": "评论",
        "APPLY TO JOIN GROUP": "申请加入群组",

        // 新增评论相关翻译
        "comments": "评论",
        "comment": "评论",
        "Leave a comment": "发表评论",
        "9 comments": "9 条评论",
        "1 comment": "1 条评论",

        // 新增的权限和确认对话框翻译
        "CONFIRM": "确认",
        "Open page": "打开页面",
        "would like to open its web app to proceed. It will be able to access your IP address and basic device info.": "想要打开其网页应用继续操作。它将能够访问您的IP地址和基本设备信息。",
        "Open": "打开",

        // 用户新提到的翻译项
        "Sending messages is not allowed in this group.": "此群组不允许发送消息。",
        "Start Video chat": "开始视频聊天",
        "Select messages": "选择消息",
        "Boosts": "加速",
        "Send a Gift": "发送礼物",
        "Delete and Exit": "删除并退出",

        // 新增用户请求的翻译项
        "members": "成员",
        "Members": "成员",
        "MEMBERS": "成员",
        " members": "成员",
        "subscribers": "订阅者",
        "Subscribers": "订阅者",
        "SUBSCRIBERS": "订阅者",
        " subscribers": "订阅者",
        "Pinned Messages": "置顶消息",
        "Delete chat": "删除聊天",
        "ActionCreatedChatYou": "你创建了聊天",
        "Boost Channel": "加速频道",
        "View Discussion": "查看讨论",
        "Leave Channel": "退出频道",

        // 2023-12-05新增翻译
        "Powered by": "技术支持",
        "channel": "频道",
        "No comments here yet...": "暂无评论...",
        "Leave a comment": "发表评论",

        // 最新增加的翻译项
        "Forwarded from": "转发自",
        "Unread Messages": "未读消息",
        "No saved GIFs.": "没有已保存的GIF。",
        "No stickers yet": "暂无贴纸",
        "Duck Emoji": "鸭子表情",
        "emoji": "表情",
        "Recently Used": "最近使用",
        "Flags": "旗帜",
        "Symbols": "符号",
        "Objects": "物品",
        "Travel and places": "旅行和地点",
        "Activity": "活动",
        "Food and drink": "食物和饮料",
        "Animals and nature": "动物和自然",
        "Emoji People": "人物表情",
        "EMOJI PEOPLE": "人物表情",
        "Emoji people": "人物表情",
        "emoji people": "人物表情",
        "Photo or Video": "照片或视频",

        // 用户提到的未翻译侧边栏项目
        "My Stories": "我的状态",
        "Night Mode": "夜间模式",
        "Telegram Features": "Telegram功能",
        "Report a Bug": "报告问题",
        "Switch to K Version": "切换到K版本",
        "Install App": "安装应用",

        // 用户提到的右键菜单项
        "Copy Text": "复制文本",
        "Copy Message Link": "复制消息链接",

        // 新增翻译项
        "Animations": "动画",
        "ANIMATIONS": "动画",
        "animations": "动画",
        " Animations": "动画",
        "Animations ": "动画",
        " Animations ": "动画",
        "Animation": "动画",
        "ANIMATION": "动画",
        "animation": "动画",
        "All": "全部消息",
        "Archived Chats": "收纳聊天",
        "Message": "发送消息",

        // 日历相关
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
        "Today": "今天",
        "Selected": "已选择",
        "Choose time": "选择时间",
        "Select time": "选择时间",
        "Time": "时间",
        "hour": "小时",
        "minute": "分钟",
        "second": "秒",
        "AM": "上午",
        "PM": "下午",
        "Day": "日",
        "Week": "周",
        "Month": "月",
        "Year": "年",

        // 消息相关
        "Edit": "编辑",
        "Delete": "删除",
        "Forward": "转发",
        "Reply": "回复",
        "Pin": "置顶",
        "Unpin": "取消置顶",
        "Copy": "复制",
        "Select": "选择",
        "online": "在线",
        "ONLINE": "在线",
        "Online": "在线",
        " online": "在线",
        "last seen": "最后在线",
        "typing": "正在输入",
        "Today": "今天",
        "Yesterday": "昨天",

        // 设置相关
        "General": "通用",
        "Notifications": "通知",
        "Privacy and Security": "隐私与安全",
        "Chat Folders": "聊天文件夹",
        "Advanced": "高级设置",
        "Language": "语言",
        "Theme": "主题",
        "Dark mode": "深色模式",
        "Light mode": "浅色模式",

        // 群组和频道
        "Channel": "频道",
        "Group": "群组",
        "Members": "成员",
        "Invite Link": "邀请链接",
        "Administrators": "管理员",
        "Permissions": "权限",
        "Join": "加入",
        "Leave": "退出",

        // 按钮和操作
        "Send": "发送",
        "Cancel": "取消",
        "CANCEL": "取消",
        "Save": "保存",
        "Next": "下一步",
        "Back": "返回",
        "Done": "完成",
        "Search": "搜索",
        "Add": "添加",
        "Remove": "移除",
        "Close": "关闭",
        "OK": "确定",
        "Ok": "确定",
        "ok": "确定",

        // 文件和媒体
        "Photo": "照片",
        "Video": "视频",
        "File": "文件",
        "Voice Message": "语音消息",
        "Sticker": "贴纸",
        "GIF": "动图",
        "Poll": "投票",
        "Location": "位置",

        // 更多界面元素
        "You": "你",
        "Bot": "机器人",
        "Mute": "静音",
        "Unmute": "取消静音",
        "Block": "屏蔽",
        "Unblock": "取消屏蔽",
        "Report": "举报",
        "Share": "分享",
        "Info": "信息",
        "Download": "下载",
        "Archive": "归档",
        "Unarchive": "取消归档",
        "Edit Profile": "编辑资料",
        "Username": "用户名",
        "Bio": "个人简介",
        "Phone Number": "电话号码",
        "Two-Step Verification": "两步验证",
        "Active Sessions": "活动会话",
        "Delete Account": "删除账户",

        // 新增用户提到的未翻译项
        "Collapse": "收起",
        "Expand": "展开",
        "Move to main menu": "移至主菜单",
        "Leave Group": "退出群组",

        // 置顶消息相关
        "Pinned message": "置顶消息",
        "Pinned Message": "置顶消息",
        "Pinned Messages": "置顶消息",
        "Unpin": "取消置顶",
        "Unpin all messages": "取消所有置顶消息",
        "Unpin All Messages": "取消所有置顶消息",
        "Pin": "置顶",
        "Pin message": "置顶消息",
        "Pin Message": "置顶消息",
        "View in chat": "在聊天中查看",
        "View in Chat": "在聊天中查看",
        "6 Pinned Messages": "6 置顶消息",

        // 等级和选择相关
        "Level": "等级",
        "Level 0": "等级 0",
        "Level 1": "等级 1",
        "Level 2": "等级 2",
        "Level 3": "等级 3",
        "message selected": "消息已选择",
        "messages selected": "消息已选择",
        "1 message selected": "已选择 1 条消息",
        "2 messages selected": "已选择 2 条消息",

        // 加速频道相关
        "Boost Channel": "加速频道",
        "needs more boosts to unlock new features": "需要更多加速才能解锁新功能",
        "needs 53 more boosts to unlock new features": "需要再增加 53 个加速才能解锁新功能",

        // 确认对话框补充翻译变体
        "Are you sure you want to leave and delete?": "确定要退出并删除吗？",
        "Are you sure you want to leave and delete this": "确定要退出并删除这个",
        "Are you sure you want to delete?": "确定要删除吗？",
        "Delete and leave?": "删除并退出？",
        "delete and leave": "删除并退出",
        "Delete For All Members": "为所有成员删除",
        "Delete for all members": "为所有成员删除",
        "delete for all members": "为所有成员删除",
        "Delete For Everyone": "为所有人删除",
        "Delete for everyone": "为所有人删除",
        "delete for everyone": "为所有人删除",

        // 新增用户请求的翻译项 (2023-03-15)
        "By launching this mini app,you agree to the Terms of Service for Mini Apps.": "启动此小程序，即表示您同意小程序服务条款。",
        "Preview": "预览",
        "No media files yet": "暂无媒体文件",
        "Posts": "帖子",
        "Story Archive": "状态存档",

        // 新增用户请求的翻译项 (2023-03-16)
        "Permanently delete the chat with Group Help?": "永久删除与群组帮助的聊天？",
        "DELETE AND BLOCK": "删除并屏蔽",

        // 新增频道和群组退出确认翻译 (2023-03-17)
        "Are you sure you want to leave": "确定要退出吗",
        "Are you sure you want to leave?": "确定要退出吗？",
        "Are you sure you want to leave this channel": "确定要退出此频道吗",
        "Are you sure you want to leave this channel?": "确定要退出此频道吗？",
        "Are you sure you want to leave this group": "确定要退出此群组吗",
        "Are you sure you want to leave this group?": "确定要退出此群组吗？",

        // 新增用户请求的翻译项 (2023-03-18)
        "monthly users": "月活跃用户",
        "Monthly users": "月活跃用户",
        "MONTHLY USERS": "月活跃用户",
        "chat": "聊天",
        "Chat": "聊天",
        "chats": "聊天",
        "Chats": "聊天",
        "1 chat": "1 个聊天",
        "My Notes": "我的笔记",
        "Shared Media": "共享媒体",
        "No posted stories": "暂无发布的状态",
        "No files here yet": "这里还没有文件",
        "No voice messages here yet": "这里还没有语音消息",
        "No music files here yet": "这里还没有音乐文件",

        // 新增用户请求的翻译项 (2023-03-19)
        "edited": "已编辑",
        "edited yesterday at": "昨天编辑于",
        "edited today at": "今天编辑于",
        "edited at": "编辑于",
        "Do you want to open": "您要打开吗",
        "Help": "帮助",
        "Privacy Policy": "隐私政策",
        "Block Bot": "屏蔽机器人",
        "Open Link": "打开链接",
        "Delete message": "删除消息",
        "Are you sure you want to delete this message?": "确定要删除此消息吗？",
        "This will delete it just for you,not for other participants of the chat.": "这将仅为您删除消息，不会对聊天中的其他参与者生效。",
        "This will delete it for everyone in this chat.": "这将为聊天中的所有人删除此消息。",

        // 新增翻译项 (2023-03-20)
        "Would you like to unpin this message?": "您想要取消置顶此消息吗？",
        "Permanently delete the chat with": "永久删除与",
        "View Channel": "查看频道",
        "participant": "参与者",
        "participants": "参与者",
        "Participant": "参与者",
        "Participants": "参与者",
        "1 participant": "1 名参与者",

        // 新增翻译项 (2023-03-21)
        "Live stream started": "直播已开始",
        "1 member": "1 名成员",
        "1 subscriber": "1 名订阅者",
        "subscriber": "订阅者",
        "member": "成员",

        // 新增翻译项 (2023-03-22)
        "Balance": "余额",
        "What is wrong with this channel?": "这个频道有什么问题？",
        "I don't like it": "我不喜欢它",
        "Child abuse": "儿童虐待",
        "Violence": "暴力内容",
        "lllegal goods": "非法物品",
        "Illegal adult content": "非法成人内容",
        "Personal data": "个人数据",
        "Terrorism": "恐怖主义",
        "Scam or spam": "诈骗或垃圾信息",
        "Copyright": "版权问题",
        "Other": "其他",
        "It's not illegal,but must be taken down": "它不违法，但必须下架",
        "Join video chat": "加入视频聊天",
        "Leave video chat": "离开视频聊天",
        "this video chat?": "此视频聊天？",
        "End video chat": "结束视频聊天",

        // 新增礼物相关翻译项 (2023-03-23)
        "All gifts": "所有礼物",
        "Limited": "限量",
        "In Stock": "有库存",
        "Select gift to show appreciation to": "选择礼物以表达对",
        "Buy a Gift": "购买礼物",
        "Buy yourself a gift to add to your profile or reserve for later.": "给自己购买礼物，添加到个人资料或留作备用。",
        "Limited-edition gifts upgraded to collectibles can be gifted to others.": "升级为收藏品的限量版礼物可以赠送给他人。",

        // 新增频道加速相关翻译项 (2023-03-24)
        "Get Boosts via Gifts": "通过礼物获取加速",
        "SHARE": "分享",
        "Link for boosting": "加速链接",
        "No users currently boost your channel": "目前没有用户加速您的频道",
        "Boosts to Level Up": "升级所需加速数",
        "Active Boosts": "活跃加速",
        "Premium Subscribers": "高级订阅者",
        "Get more boosts for your channel by gifting Premium to your subscribers.": "向您的订阅者赠送Premium以获取更多频道加速。",
        "0 Boosts": "0 个加速",
        "Level 0": "等级 0",
        "Level": "等级",

        // 新增频道管理相关翻译项 (2023-03-25)
        "Forward here to save": "转发到这里保存",
        "Forward to.": "转发至。",
        "Channel name": "频道名称",
        "Description": "描述",
        "Channel Type": "频道类型",
        "Private": "私有",
        "Discussion": "讨论",
        "Invite Links": "邀请链接",
        "Reactions": "互动表情",
        "Removed users": "已移除用户",

        // 修复举报页面翻译问题 (2023-03-26)
        "I don't like it": "我不喜欢它",
        "I don't like it.": "我不喜欢它",
        "Illegal goods": "非法物品",
        "lllegal goods": "非法物品", // 注意原文可能使用了三个小写L
        "Illegal goods.": "非法物品",
        "It's not illegal, but must be taken down": "它不违法，但必须下架",
        "It's not illegal,but must be taken down": "它不违法，但必须下架",
        "It's not illegal, but must be taken down.": "它不违法，但必须下架",

        // 新增删除确认对话框翻译
        "Permanently delete the chat with XXXX?": "永久删除与XXXX的聊天？",

        // 新增文件和消息输入相关翻译
        "Add a caption...": "添加说明...",
        "Send File": "发送文件",
        "Drop files here to send them": "拖放文件到这里发送"
    };

    // 月份英文与中文对照表（用于日期翻译）
    const monthTranslations = {
        "January": "1月",
        "February": "2月",
        "March": "3月",
        "April": "4月",
        "May": "5月",
        "June": "6月",
        "July": "7月",
        "August": "8月",
        "September": "9月",
        "October": "10月",
        "November": "11月",
        "December": "12月",
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
        "Dec": "12月"
    };

    // 控制变量
    let isTranslating = false;
    let observerActive = false;
    let observer = null;
    let translationInterval = null;
    let translationCount = 0;
    const MAX_TRANSLATIONS = 50; // 限制连续翻译次数
    const TRANSLATION_INTERVAL = 500; // 翻译间隔时间(毫秒)，从300ms增加到500ms
    const OBSERVER_THROTTLE = 800; // 观察者节流时间(毫秒)，从500ms增加到800ms
    let lastObserverTime = 0;
    let isProcessingDeleteAndLeave = false; // 防止重复处理"删除并退出"
    let translatedElements = new WeakSet(); // 用于记录已翻译过的元素
    let pageInitialized = false; // 标记页面是否已初始化
    let visibilityObserver = null; // 用于观察元素可见性的观察者

    // 添加全局变量来临时禁用翻译
    window.disableTranslation = false;

    // 添加全局变量来临时禁用特定翻译功能
    window.disableContextMenuTranslation = false;
    window.disableDialogTranslation = false;

    // 错误处理函数
    function handleError(error, context) {
        console.error(`Telegram翻译脚本错误 [${context}]:`, error);
        // 如果发生严重错误，尝试重置状态
        if (context === 'observer' || context === 'main') {
            resetTranslationState();
        }
    }

    // 安全包装函数，捕获所有可能的错误
    function safeExecute(fn, context, ...args) {
        try {
            return fn(...args);
        } catch (error) {
            console.error(`执行 ${context} 时出错:`, error);
            return null;
        }
    }

    // 重置翻译状态
    function resetTranslationState() {
        try {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
            if (translationInterval) {
                clearInterval(translationInterval);
                translationInterval = null;
            }
            isTranslating = false;
            observerActive = false;
            translationCount = 0;

            // 尝试在一段时间后重新初始化
            setTimeout(() => {
                console.log('尝试重新初始化翻译功能...');
                initTranslation();
            }, 5000);
        } catch (error) {
            console.error('重置翻译状态时出错:', error);
        }
    }

    // 等待DOM加载完成
    function waitForLoad() {
        try {
            // 延迟执行，确保页面完全加载
            setTimeout(() => {
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                    initTranslation();
                } else {
                    window.addEventListener('DOMContentLoaded', () => {
                        setTimeout(initTranslation, 1500);
                    });
                }
            }, 2500); // 将延迟从1500ms增加到2500ms，给页面更多加载时间
        } catch (error) {
            handleError(error, 'waitForLoad');
        }
    }

    // 初始化翻译功能
    function initTranslation() {
        try {
            if (observerActive || pageInitialized) return;
            pageInitialized = true;

            console.log('Telegram Web汉化脚本开始初始化...');

            // 分阶段初始化，减轻初始加载压力
            // 第一阶段：仅翻译关键UI元素
            setTimeout(() => {
                translateUISimplified(); // 首先只翻译关键UI元素
                observerActive = true;

                // 第二阶段：完整翻译
                setTimeout(() => {
                    translateUI();

                    // 第三阶段：设置定期翻译和观察者
                    setTimeout(() => {
                        // 设置定期翻译，降低频率
                        translationInterval = setInterval(() => {
                            if (translationCount > MAX_TRANSLATIONS) {
                                clearInterval(translationInterval);
                                translationInterval = null;
                                translationCount = 0;
                                console.log('已达到最大连续翻译次数，暂停定期翻译');
                            } else {
                                translateUI();
                                translationCount++;
                            }
                        }, TRANSLATION_INTERVAL);

                        // 创建MutationObserver监听DOM变化
                        setupObserver();
                        setupVisibilityObserver(); // 设置可见性观察者

                        // 监听点击事件，用于在弹出菜单或对话框时进行翻译
                        document.addEventListener('click', () => {
                            setTimeout(translateUISimplified, 50); // 使用简化翻译
                        }, true);

                        // 监听右键菜单事件
                        document.addEventListener('contextmenu', () => {
                            // 使用多个延迟，分散处理负载
                            setTimeout(() => {
                                try {
                                    translateContextMenu();
                                } catch (e) {
                                    console.error('右键菜单翻译失败(50ms):', e);
                                }
                            }, 50);

                            setTimeout(() => {
                                try {
                                    translateContextMenu();
                                } catch (e) {
                                    console.error('右键菜单翻译失败(150ms):', e);
                                }
                            }, 150);

                            setTimeout(() => {
                                try {
                                    translateContextMenu();
                                } catch (e) {
                                    console.error('右键菜单翻译失败(300ms):', e);
                                }
                            }, 300);
                        }, true);

                        // 添加滚动事件监听，仅在滚动时翻译新区域
                        window.addEventListener('scroll', debounce(() => {
                            translateVisibleArea();
                        }, 200), { passive: true });
                    }, 500);
                }, 1000);
            }, 500);
        } catch (error) {
            handleError(error, 'initTranslation');
            resetTranslationState();
        }
    }

    // 设置观察者
    function setupObserver() {
        try {
            if (observer) {
                observer.disconnect();
            }

            observer = new MutationObserver((mutations) => {
                try {
                    // 节流处理，避免过于频繁的翻译
                    const now = Date.now();
                    if (now - lastObserverTime < OBSERVER_THROTTLE) return;
                    lastObserverTime = now;

                    // 检查是否有实质性变化
                    let hasTextChange = false;
                    for (const mutation of mutations) {
                        if (mutation.type === 'childList' || mutation.type === 'characterData') {
                            hasTextChange = true;
                            break;
                        }
                    }

                    if (hasTextChange) {
                        translateUI();
                    }
                } catch (error) {
                    handleError(error, 'observer');
                }
            });

            // 监听整个文档的变化，但使用更精细的配置
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true,
                attributes: false
            });
        } catch (error) {
            handleError(error, 'setupObserver');
        }
    }

    // 设置可见性观察者，只翻译可见元素
    function setupVisibilityObserver() {
        try {
            if (visibilityObserver) {
                visibilityObserver.disconnect();
            }

            visibilityObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 元素可见时翻译它
                        const element = entry.target;
                        if (!translatedElements.has(element)) {
                            translateElement(element);
                            translatedElements.add(element);
                            // 一旦翻译完成，停止观察此元素
                            visibilityObserver.unobserve(element);
                        }
                    }
                });
            }, { threshold: 0.1 }); // 元素10%可见时触发

            // 观察主要内容区域
            const contentAreas = document.querySelectorAll('.chat-list, .message-list, .dialog-content, .sidebar');
            contentAreas.forEach(area => {
                if (area) {
                    visibilityObserver.observe(area);
                }
            });
        } catch (error) {
            handleError(error, 'setupVisibilityObserver');
        }
    }

    // 翻译单个元素及其子元素
    function translateElement(element) {
        try {
            const textNodes = getTextNodes(element);
            processTextNodesBatch(textNodes);

            // 翻译元素的属性
            const attributeElements = element.querySelectorAll('[placeholder], [title], [aria-label], button');
            attributeElements.forEach(el => {
                translateElementAttributes(el);
            });
        } catch (error) {
            handleError(error, 'translateElement');
        }
    }

    // 只翻译元素的属性
    function translateElementAttributes(element) {
        try {
            // 已经翻译过的直接跳过
            if (translatedElements.has(element)) return;

            // 翻译placeholder
            if (element.hasAttribute('placeholder')) {
                const placeholder = element.getAttribute('placeholder');
                if (placeholder && translations[placeholder]) {
                    element.setAttribute('placeholder', translations[placeholder]);
                }
            }

            // 翻译title
            if (element.hasAttribute('title')) {
                const title = element.getAttribute('title');
                if (title && translations[title]) {
                    element.setAttribute('title', translations[title]);
                }
            }

            // 翻译aria-label
            if (element.hasAttribute('aria-label')) {
                const ariaLabel = element.getAttribute('aria-label');
                if (ariaLabel && translations[ariaLabel]) {
                    element.setAttribute('aria-label', translations[ariaLabel]);
                }
            }

            // 翻译按钮文本
            if (element.tagName === 'BUTTON' && element.textContent) {
                const text = element.textContent.trim();
                if (translations[text]) {
                    element.textContent = translations[text];
                }
            }

            // 标记为已翻译
            translatedElements.add(element);
        } catch (error) {
            // 忽略单个元素的错误
        }
    }

    // 只翻译当前可见区域
    function translateVisibleArea() {
        try {
            if (isTranslating || window.disableTranslation) return;
            isTranslating = true;

            // 获取可见区域范围
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const viewportHeight = window.innerHeight;
            const visibleTop = scrollTop;
            const visibleBottom = scrollTop + viewportHeight;

            // 查找所有在可见区域内的元素
            const allElements = document.querySelectorAll('div, span, p, h1, h2, h3, h4, h5, button, a');

            setTimeout(() => {
                let count = 0;
                const maxElements = 100; // 限制每次处理的元素数量

                // 只处理可见元素
                for (let i = 0; i < allElements.length && count < maxElements; i++) {
                    const element = allElements[i];
                    if (translatedElements.has(element)) continue;

                    // 检查元素是否在可见区域内
                    const rect = element.getBoundingClientRect();
                    const elemTop = rect.top + scrollTop;
                    const elemBottom = rect.bottom + scrollTop;

                    if (elemBottom >= visibleTop && elemTop <= visibleBottom) {
                        translateElement(element);
                        count++;
                    }
                }

                isTranslating = false;
            }, 0);
        } catch (error) {
            handleError(error, 'translateVisibleArea');
            isTranslating = false;
        }
    }

    // 防抖函数，减少滚动事件触发频率
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        };
    }

    // 翻译UI元素
    function translateUI() {
        if (isTranslating) return;
        if (window.disableTranslation) return; // 检查全局禁用标志

        isTranslating = true;

        try {
            // 查找所有文本节点，但限制范围和数量
            const rootElement = document.querySelector('.page-content') || document.body;
            const textNodes = getTextNodes(rootElement);

            // 批量处理文本节点
            const batchSize = 100;
            for (let i = 0; i < textNodes.length; i += batchSize) {
                const batch = textNodes.slice(i, i + batchSize);
                setTimeout(() => {
                    processTextNodesBatch(batch);
                }, 0);
            }

            // 翻译按钮、占位符和其他属性，使用更具体的选择器
            setTimeout(() => {
                const elementsToTranslate = rootElement.querySelectorAll('button:not([data-translated]), [placeholder]:not([data-translated]), [title]:not([data-translated]), [aria-label]:not([data-translated])');
                translateAttributes(elementsToTranslate);
            }, 50);

            // 特别处理特定元素
            setTimeout(() => {
                translateSidebar();
                translateEmojiCategories();
                translateMediaCategories();
                translateMessageReferences();
                translateButtons();
                translateEmptyStateMessages();
                if (!window.disableContextMenuTranslation) {
                    translateContextMenu();
                }
                if (!window.disableDialogTranslation) {
                    translateDialogs();
                }
            }, 100);
        } catch (error) {
            handleError(error, 'translateUI');
        } finally {
            setTimeout(() => {
                isTranslating = false;
            }, 200);
        }
    }

    // 批量处理文本节点
    function processTextNodesBatch(nodes) {
        try {
            nodes.forEach(node => {
                if (!node || !node.nodeValue || !node.nodeValue.trim()) return;

                // 如果父元素已被标记为已翻译，则跳过
                const parent = node.parentElement;
                if (parent && translatedElements.has(parent)) return;

                const originalText = node.nodeValue.trim();
                let translated = false;

                // 检查文本是否在翻译字典中
                if (translations[originalText]) {
                    node.nodeValue = node.nodeValue.replace(originalText, translations[originalText]);
                    translated = true;
                }
                // 处理"Pinned message #数字"格式
                else if (originalText.match(/^Pinned message #\d+$/)) {
                    const number = originalText.match(/#(\d+)/)[1];
                    node.nodeValue = node.nodeValue.replace(originalText, `置顶消息 #${number}`);
                    translated = true;
                }
                // 尝试不区分大小写匹配（对于确认对话框和按钮特别有用）
                else if (originalText.toUpperCase().includes('DELETE') ||
                         originalText.includes('leave') ||
                         originalText.includes('Leave') ||
                         originalText.includes('sure') ||
                         originalText.includes('block') ||
                         originalText.includes('Block') ||
                         originalText.includes('Permanently delete')) {
                    for (const key in translations) {
                        if (key.toLowerCase() === originalText.toLowerCase()) {
                            node.nodeValue = node.nodeValue.replace(originalText, translations[key]);
                            translated = true;
                            break;
                        }
                    }
                }
                // 处理部分匹配的退出确认消息
                else if (originalText.includes('Are you sure you want to leave')) {
                    try {
                        // 优先处理"Are you sure you want to leave and delete"
                        if (originalText.includes('Are you sure you want to leave and delete')) {
                            const baseText = 'Are you sure you want to leave and delete';
                            if (originalText.startsWith(baseText) && translations[baseText]) {
                                const nameText = originalText.substring(baseText.length);
                                node.nodeValue = node.nodeValue.replace(originalText, translations[baseText] + nameText);
                                translated = true;
                            }
                        }
                        // 然后处理一般的"Are you sure you want to leave"
                        else if (originalText.startsWith('Are you sure you want to leave') && translations['Are you sure you want to leave']) {
                            const baseText = 'Are you sure you want to leave';
                            const nameText = originalText.substring(baseText.length);
                            node.nodeValue = node.nodeValue.replace(originalText, translations[baseText] + nameText);
                            translated = true;
                        }
                    } catch (error) {
                        console.error('处理退出确认消息时出错:', error);
                    }
                }

                // 翻译日期格式
                if (!translated) {
                    const dateTranslated = translateDate(node);
                    if (dateTranslated) {
                        translated = true;
                    } else {
                        // 翻译带数字的成员和在线状态信息
                        const memberTranslated = translateMemberCount(node);
                        if (memberTranslated) {
                            translated = true;
                        }
                    }
                }

                // 如果进行了翻译，标记父元素为已翻译
                if (translated && parent) {
                    translatedElements.add(parent);
                    parent.dataset.translated = 'true';
                }
            });
        } catch (error) {
            handleError(error, 'processTextNodesBatch');
        }
    }

    // 翻译日期格式
    function translateDate(node) {
        if (!node || !node.nodeValue) return false;

        try {
            let translated = false;

            // 匹配完整日期格式：月份 日 [,] 年份（例如December 28, 2024 或 December 28 2024）
            const fullDateRegex = /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})(?:st|nd|rd|th)?(?:,)?\s+(\d{4})\b/gi;
            const oldValue1 = node.nodeValue;
            node.nodeValue = node.nodeValue.replace(fullDateRegex, (match, month, day, year) => {
                translated = true;
                const translatedMonth = monthTranslations[month] || month;
                return `${year}年${translatedMonth}${day}日`;
            });

            // 检查第一次替换是否发生了变化
            if (oldValue1 !== node.nodeValue) {
                translated = true;
            }

            // 匹配月份后跟数字的格式（如"March 8"）
            const dateRegex = /\b(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})(?:st|nd|rd|th)?\b/gi;
            const oldValue2 = node.nodeValue;
            node.nodeValue = node.nodeValue.replace(dateRegex, (match, month, day) => {
                const translatedMonth = monthTranslations[month] || month;
                return `${translatedMonth}${day}日`;
            });

            // 检查第二次替换是否发生了变化
            if (oldValue2 !== node.nodeValue) {
                translated = true;
            }

            return translated;
        } catch (error) {
            handleError(error, 'translateDate');
            return false;
        }
    }

    // 翻译成员数量和在线状态信息
    function translateMemberCount(node) {
        if (!node || !node.nodeValue) return false;

        try {
            let translated = false;

            // 匹配类似 "1.5K members", "245 online" 的格式
            const membersRegex = /(\d+(?:\.\d+)?[KMB]?)\s+members/i;
            const onlineRegex = /(\d+(?:\.\d+)?[KMB]?)\s+online/i;
            const subscribersRegex = /(\d+(?:\.\d+)?[KMB]?)\s+subscribers/i;

            let newValue = node.nodeValue;
            const oldValue = newValue;

            // 应用所有替换
            newValue = newValue.replace(membersRegex, '$1 成员');
            newValue = newValue.replace(onlineRegex, '$1 在线');
            newValue = newValue.replace(subscribersRegex, '$1 订阅者');

            // 检查是否有任何变化
            if (oldValue !== newValue) {
                translated = true;
                node.nodeValue = newValue;
            }

            return translated;
        } catch (error) {
            handleError(error, 'translateMemberCount');
            return false;
        }
    }

    // 获取所有文本节点，限制数量以提高性能
    function getTextNodes(element) {
        const textNodes = [];
        const maxNodes = 1000; // 限制节点数量

        try {
            const walk = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function(node) {
                        // 跳过空节点和脚本内容
                        if (!node.nodeValue || !node.nodeValue.trim() ||
                            node.parentNode.nodeName === 'SCRIPT' ||
                            node.parentNode.nodeName === 'STYLE') {
                            return NodeFilter.FILTER_REJECT;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                },
                false
            );

            let node;
            while ((node = walk.nextNode()) && textNodes.length < maxNodes) {
                textNodes.push(node);
            }
        } catch (error) {
            handleError(error, 'getTextNodes');
        }

        return textNodes;
    }

    // 翻译属性（如placeholder、title等）
    function translateAttributes(elements) {
        try {
            // 限制查询数量
            const maxElements = 200;
            let processedCount = 0;

            // 处理传入的元素集合
            if (elements && elements.length) {
                Array.from(elements).forEach((el, index) => {
                    if (processedCount >= maxElements) return;

                    // 已翻译的元素直接跳过
                    if (el.dataset.translated) return;

                    // 翻译placeholder
                    if (el.hasAttribute('placeholder')) {
                        const placeholder = el.getAttribute('placeholder');
                        if (placeholder && translations[placeholder]) {
                            el.setAttribute('placeholder', translations[placeholder]);
                        }
                    }

                    // 翻译title
                    if (el.hasAttribute('title')) {
                        const title = el.getAttribute('title');
                        if (title && translations[title]) {
                            el.setAttribute('title', translations[title]);
                        }
                    }

                    // 翻译aria-label
                    if (el.hasAttribute('aria-label')) {
                        const ariaLabel = el.getAttribute('aria-label');
                        if (ariaLabel && translations[ariaLabel]) {
                            el.setAttribute('aria-label', translations[ariaLabel]);
                        }
                    }

                    // 翻译按钮文本
                    if (el.tagName === 'BUTTON' && el.textContent) {
                        const text = el.textContent.trim();
                        if (translations[text]) {
                            el.textContent = translations[text];
                        }
                    }

                    // 标记为已翻译
                    el.dataset.translated = 'true';
                    translatedElements.add(el);
                    processedCount++;
                });
                return;
            }

            // 兼容旧代码，当没有传入元素集合时的默认行为
            // 尽量使用更精确的选择器，减少不必要的处理
            const rootElement = document.querySelector('.page-content') || document.body;

            // 翻译placeholder
            rootElement.querySelectorAll('[placeholder]:not([data-translated])').forEach((el, index) => {
                if (processedCount >= maxElements) return;
                const placeholder = el.getAttribute('placeholder');
                if (placeholder && translations[placeholder]) {
                    el.setAttribute('placeholder', translations[placeholder]);
                    el.dataset.translated = 'true';
                    translatedElements.add(el);
                    processedCount++;
                }
            });

            // 翻译title
            rootElement.querySelectorAll('[title]:not([data-translated])').forEach((el, index) => {
                if (processedCount >= maxElements) return;
                const title = el.getAttribute('title');
                if (title && translations[title]) {
                    el.setAttribute('title', translations[title]);
                    el.dataset.translated = 'true';
                    translatedElements.add(el);
                    processedCount++;
                }
            });

            // 翻译aria-label
            rootElement.querySelectorAll('[aria-label]:not([data-translated])').forEach((el, index) => {
                if (processedCount >= maxElements) return;
                const ariaLabel = el.getAttribute('aria-label');
                if (ariaLabel && translations[ariaLabel]) {
                    el.setAttribute('aria-label', translations[ariaLabel]);
                    el.dataset.translated = 'true';
                    translatedElements.add(el);
                    processedCount++;
                }
            });

            // 翻译按钮文本
            rootElement.querySelectorAll('button:not([data-translated])').forEach((el, index) => {
                if (processedCount >= maxElements) return;
                if (el.textContent && translations[el.textContent.trim()]) {
                    el.textContent = translations[el.textContent.trim()];
                    el.dataset.translated = 'true';
                    translatedElements.add(el);
                    processedCount++;
                }
            });
        } catch (error) {
            handleError(error, 'translateAttributes');
        }
    }

    // 特别处理侧边栏元素
    function translateSidebar() {
        try {
            // 常见的侧边栏元素
            const sidebarTexts = {
                'Animations': '动画',
                'My Notes': '我的笔记',
                'Shared Media': '共享媒体',
                'My Stories': '我的状态',
                'Night Mode': '夜间模式',
                'Telegram Features': 'Telegram功能',
                'Report a Bug': '报告问题',
                'Switch to K Version': '切换到K版本',
                'Install App': '安装应用'
            };

            // 限制目标元素的数量
            let count = 0;
            const maxElements = 100;

            document.querySelectorAll('div, span, a, button').forEach(el => {
                if (count >= maxElements) return;

                if (el.textContent && el.textContent.trim()) {
                    const text = el.textContent.trim();
                    if (sidebarTexts[text]) {
                        el.textContent = sidebarTexts[text];
                        count++;
                    }
                }
            });
        } catch (error) {
            handleError(error, 'translateSidebar');
        }
    }

    // 特别处理表情符号分类
    function translateEmojiCategories() {
        try {
            // 限制目标元素的数量
            let count = 0;
            const maxElements = 50;

            document.querySelectorAll('div, span, button').forEach(el => {
                if (count >= maxElements) return;
                if (el.textContent && el.textContent.trim() === 'Emoji People') {
                    el.textContent = '人物表情';
                    count++;
                }
            });
        } catch (error) {
            handleError(error, 'translateEmojiCategories');
        }
    }

    // 特别处理媒体分类
    function translateMediaCategories() {
        try {
            const mediaCategories = {
                'Media': '媒体',
                'Files': '文件',
                'Links': '链接',
                'Music': '音乐',
                'Voice': '语音',
                'Group Info': '群组信息',
                'Channel Info': '频道信息'
            };

            // 限制目标元素的数量
            let count = 0;
            const maxElements = 100;

            document.querySelectorAll('div, span, a, button').forEach(el => {
                if (count >= maxElements) return;
                const text = el.textContent && el.textContent.trim();
                if (text && mediaCategories[text]) {
                    el.textContent = mediaCategories[text];
                    count++;
                }
            });
        } catch (error) {
            handleError(error, 'translateMediaCategories');
        }
    }

    // 特别处理右键菜单
    function translateContextMenu() {
        if (window.disableContextMenuTranslation) return; // 检查菜单翻译禁用标志

        try {
            // 使用更精确的选择器，缩小处理范围
            // 只处理明确为菜单项的元素
            const menuSelectors = [
                'div.item',                  // Telegram Web Z 版本
                'a.dropdown-item',           // Telegram Web K 版本
                'div[role="menuitem"]',      // 基于角色的选择器
                'li.menu-item',              // 通用菜单项
                'div.MenuItem',              // Telegram A 版本
                'span.item-name'             // 菜单项名称
            ];

            // 构建选择器字符串
            const selectorString = menuSelectors.join(', ');

            // 限制处理元素数量
            const maxItems = 15;
            let count = 0;

            // 只查找可能的菜单元素
            document.querySelectorAll(selectorString).forEach(item => {
                try {
                    if (count >= maxItems) return;
                    if (!item || !item.textContent) return;

                    const text = item.textContent.trim();
                    // 只处理我们确定的特定菜单项
                    if (text === 'Open in new tab') {
                        item.textContent = '在新标签页中打开';
                        count++;
                    } else if (text === 'Add to folder...') {
                        item.textContent = '添加到文件夹...';
                        count++;
                    } else if (text === 'Mark as unread') {
                        item.textContent = '标记为未读';
                        count++;
                    } else if (text === 'Mark as read') {
                        item.textContent = '标记为已读';
                        count++;
                    } else if (text === 'Pin to top') {
                        item.textContent = '置顶';
                        count++;
                    } else if (text === 'Mute...') {
                        item.textContent = '静音...';
                        count++;
                    } else if (text === 'Leave Group') {
                        item.textContent = '退出群组';
                        count++;
                    } else if (text === 'Leave Channel') {
                        item.textContent = '退出频道';
                        count++;
                    } else if (text === 'Report') {
                        item.textContent = '举报';
                        count++;
                    } else if (text === 'Archive') {
                        item.textContent = '归档';
                        count++;
                    } else if (text === 'Delete and leave') {
                        item.textContent = '删除并退出';
                        count++;
                    } else if (text === 'Delete Channel') {
                        item.textContent = '删除频道';
                        count++;
                    }
                } catch (innerError) {
                    // 忽略单个元素处理错误
                }
            });
        } catch (error) {
            // 只记录错误，不中断执行流程
            console.error('处理右键菜单时出错:', error);
        }
    }

    // 特别处理对话框和确认框
    function translateDialogs() {
        if (window.disableDialogTranslation) return; // 检查对话框翻译禁用标志

        try {
            // 查找并翻译对话框标题和内容
            document.querySelectorAll('div[role="dialog"] h1, div[role="dialog"] h2, div[role="dialog"] h3, div[role="dialog"] p, div[role="dialog"] button, div.popup-title, div.popup-description, div.modal-title, div.modal-description').forEach(el => {
                if (el.textContent && translations[el.textContent.trim()]) {
                    el.textContent = translations[el.textContent.trim()];
                }
            });

            // 特别是删除确认对话框
            document.querySelectorAll('button, span, div, p').forEach(el => {
                if (el.textContent) {
                    const text = el.textContent.trim();
                    if ((text.includes('DELETE') || text.includes('Delete') || text.includes('Are you sure')) && translations[text]) {
                        el.textContent = translations[text];
                    }

                    // 增强对特定短语的处理
                    const deleteLeavePattern = /DELETE AND LEAVE|DELETE FOR ALL MEMBERS|DELETE FOR EVERYONE|DELETE AND BLOCK|Are you sure you want to leave and delete|Permanently delete the chat/i;
                    if (deleteLeavePattern.test(text)) {
                        // 尝试精确匹配
                        if (translations[text]) {
                            el.textContent = translations[text];
                        }
                        // 尝试不区分大小写匹配
                        else {
                            for (const key in translations) {
                                if (key.toLowerCase() === text.toLowerCase()) {
                                    el.textContent = translations[key];
                                    break;
                                }
                            }
                        }
                    }

                    // 处理包含变量的退出确认消息
                    // 例如："Are you sure you want to leave and delete Channel Name?"
                    // 或："Are you sure you want to leave Group Name?"
                    if (text.includes('Are you sure you want to leave')) {
                        try {
                            // 检查是否有精确匹配
                            if (translations[text]) {
                                el.textContent = translations[text];
                            } else {
                                // 尝试部分匹配和替换
                                // 1. 优先检查"Are you sure you want to leave and delete"
                                if (text.includes('Are you sure you want to leave and delete')) {
                                    const baseText = 'Are you sure you want to leave and delete';
                                    // 确保基础文本存在翻译
                                    if (translations[baseText]) {
                                        // 获取频道或群组名称部分
                                        const nameStartIndex = baseText.length;
                                        const nameText = text.substring(nameStartIndex);
                                        el.textContent = translations[baseText] + nameText;
                                    }
                                }
                                // 2. 然后检查一般的"Are you sure you want to leave"
                                else if (text.startsWith('Are you sure you want to leave')) {
                                    const baseText = 'Are you sure you want to leave';
                                    // 确保基础文本存在翻译
                                    if (translations[baseText]) {
                                        const nameStartIndex = baseText.length;
                                        const nameText = text.substring(nameStartIndex);
                                        el.textContent = translations[baseText] + nameText;
                                    }
                                }
                            }
                        } catch (error) {
                            console.error('处理对话框退出确认消息时出错:', error);
                            // 出错时不做任何替换，保留原始文本
                        }
                    }
                }
            });
        } catch (error) {
            handleError(error, 'translateDialogs');
        }
    }

    // 翻译消息引用和引用计数
    function translateMessageReferences() {
        try {
            // 处理消息引用
            document.querySelectorAll('span, div').forEach(el => {
                // 检查文本内容是否为引用格式
                if (el.textContent) {
                    // 处理"Reply to"格式
                    if (el.textContent.startsWith('Reply to ')) {
                        el.textContent = el.textContent.replace('Reply to ', '回复 ');
                    }

                    // 处理"Forwarded from"格式
                    if (el.textContent.startsWith('Forwarded from ')) {
                        el.textContent = el.textContent.replace('Forwarded from ', '转发自 ');
                    }

                    // 处理"edited"和"edited at"格式
                    if (el.textContent === 'edited') {
                        el.textContent = '已编辑';
                    } else if (el.textContent.startsWith('edited ')) {
                        if (el.textContent.startsWith('edited yesterday at ')) {
                            const timeText = el.textContent.replace('edited yesterday at ', '');
                            el.textContent = `昨天编辑于 ${timeText}`;
                        } else if (el.textContent.startsWith('edited today at ')) {
                            const timeText = el.textContent.replace('edited today at ', '');
                            el.textContent = `今天编辑于 ${timeText}`;
                        } else if (el.textContent.match(/^edited at \d+:\d+$/)) {
                            const timeText = el.textContent.replace('edited at ', '');
                            el.textContent = `编辑于 ${timeText}`;
                        } else if (el.textContent.match(/^edited [a-zA-Z]+ \d+, \d+ at \d+:\d+$/)) {
                            // 处理格式如"edited March 15, 2023 at 12:30"
                            let parts = el.textContent.match(/^edited ([a-zA-Z]+ \d+, \d+) at (\d+:\d+)$/);
                            if (parts) {
                                // 使用translateDate后的结果
                                let dateNode = document.createTextNode(parts[1]);
                                translateDate(dateNode);
                                let translatedDate = dateNode.nodeValue;
                                el.textContent = `编辑于 ${translatedDate} ${parts[2]}`;
                            }
                        }
                    }

                    // 处理评论数量
                    const commentsMatch = el.textContent.match(/^(\d+)\s+comments?$/i);
                    if (commentsMatch) {
                        const commentCount = commentsMatch[1];
                        if (commentCount === "1") {
                            el.textContent = `1 条评论`;
                        } else {
                            el.textContent = `${commentCount} 条评论`;
                        }
                    }

                    // 处理"Leave a comment"格式
                    if (el.textContent === "Leave a comment") {
                        el.textContent = "发表评论";
                    }

                    // 处理"Pinned message"格式，包括"Pinned message #数字"
                    const pinnedMatch = el.textContent.match(/^Pinned message(?: #(\d+))?$/);
                    if (pinnedMatch) {
                        if (pinnedMatch[1]) { // 带数字的情况
                            el.textContent = `置顶消息 #${pinnedMatch[1]}`;
                        } else { // 不带数字的情况
                            el.textContent = '置顶消息';
                        }
                    }

                    // 处理"数字 Pinned Messages"格式
                    const pinnedCountMatch = el.textContent.match(/^(\d+)\s+Pinned Messages$/);
                    if (pinnedCountMatch) {
                        el.textContent = `${pinnedCountMatch[1]} 置顶消息`;
                    }

                    // 处理"Level 数字"格式
                    const levelMatch = el.textContent.match(/^Level\s+(\d+)$/);
                    if (levelMatch) {
                        el.textContent = `等级 ${levelMatch[1]}`;
                    }

                    // 处理"数字 message(s) selected"格式
                    const selectedMatch = el.textContent.match(/^(\d+)\s+message(?:s)?\s+selected$/);
                    if (selectedMatch) {
                        el.textContent = `已选择 ${selectedMatch[1]} 条消息`;
                    }

                    // 处理"数字 monthly users"格式
                    const monthlyUsersMatch = el.textContent.match(/^([\d\s]+)\s+monthly\s+users$/i);
                    if (monthlyUsersMatch) {
                        const userCount = monthlyUsersMatch[1].trim();
                        el.textContent = `${userCount} 月活跃用户`;
                    }

                    // 处理"数字 chat/chats"格式
                    const chatMatch = el.textContent.match(/^(\d+)\s+chat(?:s)?$/i);
                    if (chatMatch) {
                        const chatCount = chatMatch[1];
                        el.textContent = `${chatCount} 个聊天`;
                    }

                    // 处理"Do you want to open"格式
                    if (el.textContent.startsWith('Do you want to open ')) {
                        const url = el.textContent.replace('Do you want to open ', '');
                        el.textContent = `您要打开 ${url}`;
                    }

                    // 处理加速频道提示文本
                    const boostMatch = el.textContent.match(/(.+)\s+needs\s+(\d+)\s+more\s+boosts\s+to\s+unlock\s+new\s+features/);
                    if (boostMatch) {
                        const channelName = boostMatch[1];
                        const boostCount = boostMatch[2];
                        el.textContent = `${channelName} 需要再增加 ${boostCount} 个加速才能解锁新功能`;
                    }
                }
            });
        } catch (error) {
            handleError(error, 'translateMessageReferences');
        }
    }

    // 特别处理按钮和频道加速通知
    function translateButtons() {
        try {
            // 处理按钮文本
            document.querySelectorAll('button, a.btn, span.btn, div.btn').forEach(el => {
                if (el.textContent) {
                    const text = el.textContent.trim();

                    // 处理常见按钮文本
                    if (text === 'OK' || text === 'Ok' || text === 'ok') {
                        el.textContent = '确定';
                    } else if (text === 'CANCEL' || text === 'Cancel') {
                        el.textContent = '取消';
                    } else if (text === 'Boost Channel') {
                        el.textContent = '加速频道';
                    } else if (text.match(/^Boost\s+.+$/)) {
                        // "Boost XXX" 格式
                        el.textContent = el.textContent.replace('Boost', '加速');
                    }
                }
            });

            // 处理特定的通知和状态文本
            document.querySelectorAll('div, span, p').forEach(el => {
                if (el.textContent) {
                    // 处理加速提示
                    if (el.textContent.includes('needs') && el.textContent.includes('boosts') && el.textContent.includes('unlock new features')) {
                        const boostMatch = el.textContent.match(/(.+)\s+needs\s+(\d+)\s+more\s+boosts\s+to\s+unlock\s+new\s+features/);
                        if (boostMatch) {
                            const channelName = boostMatch[1];
                            const boostCount = boostMatch[2];
                            el.textContent = `${channelName} 需要再增加 ${boostCount} 个加速才能解锁新功能`;
                        }
                    }
                }
            });
        } catch (error) {
            handleError(error, 'translateButtons');
        }
    }

    // 动态添加新的翻译
    function addNewTranslations() {
        try {
            // 扫描页面寻找未翻译的文本
            const textNodes = getTextNodes(document.body);
            const untranslated = new Set();

            textNodes.forEach(node => {
                if (node.nodeValue && node.nodeValue.trim() && !translations[node.nodeValue.trim()]) {
                    untranslated.add(node.nodeValue.trim());
                }
            });

            // 输出到控制台以便开发者添加新的翻译
            if (untranslated.size > 0) {
                console.log('未翻译的文本:', Array.from(untranslated));
            }
        } catch (error) {
            handleError(error, 'addNewTranslations');
        }
    }

    // 提供一个对外的重置功能
    window.resetTelegramTranslation = function() {
        resetTranslationState();
        setTimeout(() => {
            console.log('翻译脚本已重置，重新初始化...');
            waitForLoad();
        }, 1000);
    };

    // 提供一个快速禁用脚本的方法
    window.disableTelegramTranslation = function() {
        try {
            if (observer) {
                observer.disconnect();
                observer = null;
            }
            if (translationInterval) {
                clearInterval(translationInterval);
                translationInterval = null;
            }
            console.log('翻译脚本已禁用');
        } catch (error) {
            console.error('禁用翻译脚本时出错:', error);
        }
    };

    // 添加控制台命令以发现未翻译的文本
    window.findUntranslated = addNewTranslations;

    // 开始翻译过程
    waitForLoad();

    // 为用户提供一个界面上的按钮，在网页加载问题时可以手动重置脚本
    setTimeout(() => {
        try {
            const resetButton = document.createElement('button');
            resetButton.textContent = '重置翻译';
            resetButton.style.cssText = 'position:fixed; bottom:10px; right:10px; z-index:9999; padding:5px 10px; background:#3390ec; color:white; border:none; border-radius:5px; cursor:pointer; display:none';

            resetButton.addEventListener('click', () => {
                window.resetTelegramTranslation();
                alert('翻译脚本已重置，请刷新页面');
            });

            document.body.appendChild(resetButton);

            // 按Shift+T显示重置按钮
            document.addEventListener('keydown', (e) => {
                if (e.shiftKey && e.key === 'T') {
                    resetButton.style.display = resetButton.style.display === 'none' ? 'block' : 'none';
                }
            });
        } catch (error) {
            console.error('创建重置按钮时出错:', error);
        }
    }, 5000);

    // 专门确保右键菜单被翻译的函数
    function ensureMenuTranslated() {
        try {
            // 使用我们新的更安全的方法
            translateContextMenu();
        } catch (error) {
            console.error('确保菜单翻译时出错:', error);
        }
    }

    // 监听页面变化和用户交互的主要入口点
    function setupEventListeners() {
        try {
            // 专门处理"删除并退出"按钮的点击
            document.addEventListener('click', (event) => {
                try {
                    // 检查点击的是否是"删除并退出"按钮或其子元素
                    const buttonElement = event.target.closest('button, a, div.item, div[role="menuitem"]');
                    if (buttonElement && buttonElement.textContent) {
                        const text = buttonElement.textContent.trim();
                        if (text === 'Delete and leave' || text === '删除并退出') {
                            // 临时禁用可能导致问题的翻译功能
                            window.disableDialogTranslation = true;
                            window.disableContextMenuTranslation = true;

                            // 不在点击事件处理函数中做任何DOM操作
                            // 而是安排一个异步任务，等待确认对话框出现后再处理
                            setTimeout(() => {
                                try {
                                    handleDeleteAndLeaveConfirmation();
                                } catch (e) {
                                    // 吞掉所有错误，确保不会影响用户操作
                                    console.log('处理删除并退出确认框时出错，但不影响使用');
                                }
                            }, 200);

                            // 一段时间后恢复翻译功能
                            setTimeout(() => {
                                window.disableDialogTranslation = false;
                                window.disableContextMenuTranslation = false;
                            }, 3000);
                        }
                    }
                } catch (e) {
                    // 忽略错误
                }
            }, true);

            // 监听点击事件（特别是针对右键菜单和对话框）
            document.addEventListener('click', (event) => {
                // 对于按钮点击，使用简化版翻译以提高性能
                if (event.target && (
                    event.target.tagName === 'BUTTON' ||
                    event.target.role === 'button' ||
                    event.target.getAttribute('role') === 'button'
                )) {
                    setTimeout(translateUISimplified, 50);
                    setTimeout(translateUISimplified, 200);

                    // 额外添加对确认对话框的处理
                    setTimeout(safeTranslateConfirmDialog, 100);
                    setTimeout(safeTranslateConfirmDialog, 300);
                }
            }, true);

            // 特殊监听删除和退出相关操作
            document.addEventListener('click', (event) => {
                if (event.target && event.target.textContent) {
                    const text = event.target.textContent.toLowerCase();
                    if (text.includes('delete') || text.includes('leave') || text.includes('exit')) {
                        setTimeout(safeTranslateConfirmDialog, 100);
                        setTimeout(safeTranslateConfirmDialog, 300);
                        setTimeout(safeTranslateConfirmDialog, 500);
                    }
                }
            }, true);

            // 监听右键菜单的点击事件
            document.addEventListener('contextmenu', (event) => {
                // 添加额外的安全措施，在点击菜单项之前对菜单进行翻译
                setTimeout(() => {
                    try {
                        const menuElement = event.target.closest('.menu-item, .item, .dropdown-item, [role="menuitem"]');
                        if (menuElement) {
                            translateContextMenu();
                        }
                    } catch (e) {
                        // 忽略错误
                    }
                }, 10);
            }, true);
        } catch (error) {
            console.error('设置事件监听时出错:', error);
        }
    }

    // 专门处理"删除并退出"确认对话框
    function handleDeleteAndLeaveConfirmation() {
        // 防止重复处理
        if (isProcessingDeleteAndLeave) return;
        isProcessingDeleteAndLeave = true;

        try {
            // 最小范围查询，只翻译按钮文本
            // 查找可能的确认对话框
            const confirmButtons = document.querySelectorAll('button');

            // 只翻译关键的按钮文本
            confirmButtons.forEach(button => {
                try {
                    if (button && button.textContent) {
                        const text = button.textContent.trim();

                        // 只处理确认相关按钮
                        if (text === 'Delete for all members') {
                            button.textContent = '为所有成员删除';
                        } else if (text === 'DELETE FOR ALL MEMBERS') {
                            button.textContent = '为所有成员删除';
                        } else if (text === 'Delete for everyone') {
                            button.textContent = '为所有人删除';
                        } else if (text === 'DELETE FOR EVERYONE') {
                            button.textContent = '为所有人删除';
                        } else if (text === 'Delete') {
                            button.textContent = '删除';
                        } else if (text === 'Cancel') {
                            button.textContent = '取消';
                        }
                    }
                } catch (e) {
                    // 忽略单个按钮的错误
                }
            });

            // 翻译确认消息文本
            const dialogTexts = document.querySelectorAll('div.popup-container p, div.modal-content p, div[role="dialog"] p');
            dialogTexts.forEach(element => {
                try {
                    if (element && element.textContent) {
                        const text = element.textContent.trim();
                        if (text.includes('Are you sure you want to leave and delete')) {
                            element.textContent = '确定要退出并删除吗？';
                        }
                    }
                } catch (e) {
                    // 忽略单个元素的错误
                }
            });

            // 为安全起见，设置一个定时器在1秒后重置状态
            setTimeout(() => {
                isProcessingDeleteAndLeave = false;
            }, 1000);

        } catch (error) {
            console.error('处理删除并退出确认对话框时出错，但不影响使用:', error);
            // 确保即使出错也重置状态
            isProcessingDeleteAndLeave = false;
        }
    }

    // 开始翻译过程
    waitForLoad();

    // 添加额外的事件监听
    setTimeout(setupEventListeners, 2000);

    // 简化的翻译UI函数
    function translateUISimplified() {
        if (isTranslating) return;
        isTranslating = true;

        try {
            // 优先翻译最关键的UI元素
            safeExecute(translateContextMenu, 'translateContextMenu');
            safeExecute(translateDialogs, 'translateDialogs');

            // 仅处理当前屏幕上可见的元素
            setTimeout(() => {
                isTranslating = false;
            }, 50);
        } catch (error) {
            console.error('简化翻译UI时出错:', error);
            isTranslating = false;
        }
    }

    // 安全处理确认对话框的函数
    function safeTranslateConfirmDialog() {
        try {
            // 直接查找常见的确认对话框元素
            const dialogSelectors = [
                'div.modal-content',      // Telegram Web K 版本
                'div.popup-container',    // Telegram Web Z 版本
                'div[role="dialog"]',     // 通用对话框
                'div.dialog'              // 一般对话框
            ];

            // 检查是否有确认对话框出现
            let confirmDialog = null;
            for (const selector of dialogSelectors) {
                const elements = document.querySelectorAll(selector);
                if (elements && elements.length > 0) {
                    // 找到第一个对话框
                    confirmDialog = elements[0];
                    break;
                }
            }

            if (!confirmDialog) return;

            // 尝试翻译对话框内的文本
            // 1. 查找标题和消息
            const titleElements = confirmDialog.querySelectorAll('h3, h4, .popup-title, .modal-title');
            const messageElements = confirmDialog.querySelectorAll('p, .popup-body, .modal-body');

            // 2. 查找按钮
            const buttonElements = confirmDialog.querySelectorAll('button, .btn, .button');

            // 3. 处理可能的确认文本
            const confirmTexts = {
                'Delete': '删除',
                'Delete and leave': '删除并退出',
                'Leave': '退出',
                'Cancel': '取消',
                'OK': '确定',
                'Confirm': '确认',
                'Delete for everyone': '为所有人删除',
                'Delete for all members': '为所有成员删除',
                'Delete for me': '仅为我删除',
                'Delete and block': '删除并屏蔽',
                'Open Link': '打开链接',
                'Block Bot': '屏蔽机器人',
                'Delete message': '删除消息',
                'Help': '帮助',
                'Privacy Policy': '隐私政策'
            };

            // 特殊对话框文本
            const specialDialogTexts = {
                'Are you sure you want to delete this message?': '确定要删除此消息吗？',
                'This will delete it just for you,not for other participants of the chat.': '这将仅为您删除消息，不会对聊天中的其他参与者生效。',
                'Do you want to open': '您要打开吗'
            };

            // 安全处理每个元素
            const processElement = (element) => {
                try {
                    if (element && element.textContent) {
                        const text = element.textContent.trim();

                        // 检查按钮文本
                        if (confirmTexts[text]) {
                            element.textContent = confirmTexts[text];
                            return;
                        }

                        // 检查特殊对话框文本
                        for (const [key, value] of Object.entries(specialDialogTexts)) {
                            if (text.includes(key)) {
                                element.textContent = text.replace(key, value);
                                return;
                            }
                        }

                        // 处理"Do you want to open"格式
                        if (text.startsWith('Do you want to open ')) {
                            const url = text.replace('Do you want to open ', '');
                            element.textContent = `您要打开 ${url}`;
                        }
                    }
                } catch (e) {
                    // 忽略单个元素的错误
                }
            };

            // 处理所有找到的元素
            titleElements.forEach(processElement);
            messageElements.forEach(processElement);
            buttonElements.forEach(processElement);

            // 查找和处理所有对话框内的链接
            const linkElements = confirmDialog.querySelectorAll('a');
            linkElements.forEach(link => {
                try {
                    if (link.textContent) {
                        const text = link.textContent.trim();
                        if (text === 'Privacy Policy') {
                            link.textContent = '隐私政策';
                        } else if (text === 'Help') {
                            link.textContent = '帮助';
                        }
                    }
                } catch (e) {
                    // 忽略单个链接的错误
                }
            });

        } catch (error) {
            console.error('安全翻译确认对话框时出错:', error);
        }
    }

    // 特别处理无内容提示
    function translateEmptyStateMessages() {
        try {
            // 常见的无内容提示文本
            const emptyStateTexts = {
                'No posted stories': '暂无发布的状态',
                'No files here yet': '这里还没有文件',
                'No voice messages here yet': '这里还没有语音消息',
                'No music files here yet': '这里还没有音乐文件',
                'No media files yet': '暂无媒体文件',
                'No links here yet': '这里还没有链接',
                'No photos here yet': '这里还没有照片',
                'No videos here yet': '这里还没有视频',
                'No GIFs here yet': '这里还没有GIF',
                'No shared media': '没有共享媒体',
                'No messages here yet': '这里还没有消息'
            };

            // 查找可能包含无内容提示的元素
            document.querySelectorAll('div, span, p, h3, h4').forEach(el => {
                if (el.textContent && el.textContent.trim()) {
                    const text = el.textContent.trim();
                    if (emptyStateTexts[text]) {
                        el.textContent = emptyStateTexts[text];
                    } else if (text.startsWith('No ') && text.includes('here yet')) {
                        // 尝试通用处理
                        el.textContent = `这里还没有${text.replace('No ', '').replace('here yet', '').trim()}`;
                    }
                }
            });
        } catch (error) {
            handleError(error, 'translateEmptyStateMessages');
        }
    }

})();