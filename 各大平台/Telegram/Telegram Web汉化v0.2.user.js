// ==UserScript==
// @name         Telegram Web界面汉化
// @namespace    http://tampermonkey.net/
// @version      0.2
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
        "New Private Chat": "新建私聊",

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
        "Delete group": "删除群组",
        "DELETE GROUP": "删除群组",
        "Delete Group": "删除群组",
        "Are you sure you want to leave and delete": "确定要退出并删除吗?",
        "Are you sure you want to delete and leave the group？": "您确定要删除并退出群组吗?",
        "Are you sure you want to delete": "确定要删除吗?",
        "DELETE FOR ALL MEMBERS": "为所有成员删除?",
        "DELETE FOR EVERYONE": "为所有人删除?",

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
        "users": "用户",
        " users": "用户",
        "Pinned Messages": "置顶消息",
        "Delete chat": "删除聊天",
        "ActionCreatedChatYou": "你创建了聊天",
        "Boost Channel": "加速频道",
        "View Discussion": "查看讨论",
        "Leave Channel": "退出频道",
        "Start Video Chat": "视频聊天",
        "Stream With...": "直播流",
        "START STREAMING": "开始推流",
        "Revoke": "撤销",
        "Forward to...": "转发到......",
        "forward here to save": "在此转发以保存",
        "Move Caption Up": "向上移动标题",
        "Move Caption Down": "向下移动标题",
        "Send Photo": "发送图片",
        "Hide with spoiler": "剧透隐藏",
        "Send as file": "以文件形式发送",
        "Enhance": "增强",
        "Brightness": "亮度",
        "Contrast": "对比度",
        "Saturation": "饱和度",
        "Warmth": "色温",
        "Fade": "褪色",
        "Highlights": "高光",
        "Shadows": "阴影",
        "Vignette": "暗角",
        "Grain": "颗粒",
        "Sharpen": "锐化",
        "Aspect ratio": "纵横比",
        "Free": "自由比例",
        "Original": "原比例",
        "Square": "1:1方形",
        "Size": "大小",
        "Font": "字体",
        "Tool": "工具",
        "Pen": "笔",
        "Arrow": "箭头",
        "Marker: ": "马克笔： ", // 修复了原来的"Marker: "标记"中的语法错误
        "Neon": "荧光笔",
        "Blur": "模糊",
        "Eraser": "橡皮擦",

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
        "LAUNCH": "启动",

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
        "Translate": "翻译",
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
        "Leave group": "退出群组",

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
        "To launch this web app,you will connect to its website.": "启动Web应用程序打开网页。",
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
        "Drop files here to send them": "拖放文件到这里发送",

        // 基本界面
        "All Chats": "全部聊天",
        "Add Account": "添加账户",
        "Select Messages": "选择消息",
        "Comment": "评论",
        "Channels": "频道",
        "Apps": "应用",
        "Enable Dark Mode": "启用深色模式",
        "Disable Animations": "禁用动画",
        "Switch to A version": "切换到A版本",
        "Report Bug": "报告问题",
        "Broadcast": "广播",

        // 存储和消息相关
        "Your cloud storage": "你的云存储",
        "Forward messages here to save them": "转发消息到这里保存",
        "Send media and files to store them": "发送媒体和文件以保存",
        "Access this chat from any device": "从任何设备访问此聊天",
        "Use search to quickly find things": "使用搜索快速找到内容",
        "View as Chats": "以聊天形式查看",
        "Add to contacts": "添加到联系人",
        "Gift Premium": "赠送Premium",

        // 设置相关
        "Notifications and Sounds": "通知和声音",
        "Data and Storage": "数据和存储",
        "General Settings": "常规设置",
        "Stickers and Emoji": "贴纸和表情",
        "Devices": "设备",
        "Telegram Premium": "Telegram高级版",
        "Phone": "电话",
        "Message Text Size": "消息文字大小",
        "Chat Wallpaper": "聊天壁纸",
        "Enable Animations": "启用动画",
        "Power Saving Mode": "省电模式",
        "Color theme": "颜色主题",
        "Night": "夜间",
        "System Default": "系统默认",

        // 键盘和输入设置
        "Keyboard": "键盘",
        "Send by Enter": "按Enter发送",
        "New line by Shift Enter": "按Shift+Enter换行",
        "Send by Ctrl Enter": "按Ctrl+Enter发送",
        "New line by Enter": "按Enter换行",
        "Time Format": "时间格式",

        // 自动下载设置
        "Automatic media download": "自动媒体下载",
        "Auto-Download Media": "自动下载媒体",
        "Photos": "照片",
        "On in all chats": "在所有聊天中启用",
        "Videos": "视频",
        "Reset Auto-Download Settings": "重置自动下载设置",
        "Voice messages are tiny,so they're always downloaded automatically.": "语音消息很小，所以会自动下载。",

        // 新增翻译项 (2024-01)
        "Premium Gifting": "赠送高级版",
        "NEW": "新",
        "History was cleared": "历史记录已清除",
        "View discussion": "查看讨论",
        "Clear Selection": "清理所选",
        
        // 加载进度条相关
        "Loading...": "加载中...",
        "Connecting...": "正在连接...",
        "Waiting for network...": "等待网络连接...",
        "Please check your internet connection": "请检查您的网络连接",
        "Updating...": "更新中...",
        "Loading messages...": "加载消息中...",
        "Loading chats...": "加载聊天中...",
        "Loading media...": "加载媒体中...",
        "Loading stickers...": "加载贴纸中...",

        // 添加在线状态相关翻译
        "last seen just now": "刚刚在线",

        // 表情贴纸相关
        "Quick Reaction": "快速回应",
        "Suggest Stickers by Emoji": "通过表情符号建议贴纸",
        "Loop Animated Stickers": "循环播放动画贴纸",
        "All Sets": "所有贴纸包",
        "Document": "文档",
        "Animated stickers will play continuously in chats.": "动画贴纸将在聊天中持续播放。",
        "Suggest Emoji": "建议表情",
        "Large Emoji": "大号表情",
        "Dynamic Pack Order": "动态包排序",
        "Stickers": "贴纸",
        "Hot Cherry": "热门推荐",
        "Automatically place recently used sticker packs at the front of the panel.": "自动将最近使用的贴纸包放在面板前面。",
        "34 stickers": "34个贴纸", // 注意：数字会根据实际情况变化

        // 通知设置相关
        "Show Notifications From": "显示通知来源",
        "All Accounts": "所有账户",
        "Turn this off if you want to receive notifications only from the account you are currently using.": "如果您只想接收当前使用账户的通知，请关闭此选项。",
        "Notifications for private chats": "私人聊天通知",
        "Enabled": "已启用",
        "Message Preview": "消息预览",
        "Private Chats": "私人聊天",
        "Groups": "群组",
        "Notifications for groups": "群组通知",
        "Notifications for channels": "频道通知",
        "Contact joined Telegram": "联系人加入Telegram",
        "Disabled": "已禁用",
        "Notification Sound": "通知声音",

        // 翻译相关
        "Translate Messages": "翻译消息",
        "Show Translate Button": "显示翻译按钮",
        "Translate Entire Chats": "翻译整个聊天",
        "Do Not Translate": "不要翻译",
        "Subscribe to XXXX to translate entire chats.": "订阅 XXXX 以翻译整个聊天。",
        
        // 新增存档和广播相关翻译
        "Show Archive": "显示存档",
        "Only you can see archived stories unless you choose to post them to your profile.": "只有您能看到已存档的状态，除非您选择将其发布到个人资料。",
        "Broadcast": "公告",
        
        // 新增置顶消息相关翻译
        "Hide pinned messages": "隐藏置顶消息",
        "Do you want to hide the pinned message bar?": "您要隐藏置顶消息栏吗？",
        "It wil stay hidden until a new message is pinned.": "在有新消息被置顶之前，它将保持隐藏。",
        "HIDE": "隐藏",
        "Don't Show Pinned Messages": "不显示置顶消息",

        // 隐私设置相关
        "Blocked Users": "已屏蔽用户",
        "Passcode Lock": "密码锁",
        "off": "关闭",
        "Manage your sessions on all your devices.": "管理您所有设备上的会话。",
        "Privacy": "隐私",
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
        "Subscribe to Telegram Premium to restrict who can send you voice or video messages.": "订阅 Telegram Premium 以限制谁可以给您发送语音或视频消息。",
        "What is Telegram Premium？": "什么是 Telegram Premium?",

        // 敏感内容和支付相关
        "Voice Messages": "语音消息",
        "Sensitive Content": "敏感内容",
        "Disable filtering": "禁用过滤",
        "Do not hide media that contains content suitable only for adults.": "不要隐藏仅适合成人的内容。",
        "Payments": "支付",
        "Clear Payment and Shipping Info": "清除支付和配送信息",
        "You can delete your shipping info and instruct all payment providers to remove your saved credit cards.Note that Telegram never stores your credit card data.": "您可以删除配送信息并指示所有支付提供商删除您保存的信用卡。请注意，Telegram 从不存储您的信用卡数据。",
        
        // 会话和设备管理
        "Delete All Cloud Drafts": "删除所有云端草稿",
        "Terminate All Other Sessions": "终止所有其他会话",
        "This device": "此设备",
        "Logs out all devices except for this one.": "注销除此设备外的所有设备。",
        "Active sessions": "活跃会话",
        
        // 文件夹相关
        "Create folders for different groups of chats and quickly switch between them.": "为不同的聊天组创建文件夹并快速切换。",
        "Create Folder": "创建文件夹",
        "Folders": "文件夹",
        "Recommended Folders": "推荐文件夹",
        "Unread": "未读",
        "New messages from all chats.": "所有聊天的新消息。",
        "Personal": "个人",
        "Only messages from personal chats.": "仅来自个人聊天的消息。",
        "Folders on the Left": "文件夹在左侧",
        "Folders above chats": "文件夹在聊天上方",
        "Folders view": "文件夹视图",
        
        // 自动下载相关
        "Voice messages are tiny,so they're always downloaded automatically.": "语音消息很小，所以会自动下载。",

        // 新增翻译项
        "Live Stream": "直播",
        "Blocked users can't send you messages or add you to groups.They will not see your profile photos,stories,online and last seen status.": "被屏蔽的用户无法向您发送消息或将您添加到群组。他们将无法看到您的头像、状态、在线和最后在线状态。",
        "The official Telegram app is available for Android,iPhone, iPad,Windows,macoS and Linux.": "Telegram官方应用可在Android、iPhone、iPad、Windows、macOS和Linux上使用。",
        "To stream video with another app,enter this Server URL and Stream Key in your streaming app.": "要使用其他应用程序流式传输视频，请在流式传输应用程序中输入此服务器URL和流密钥",
        "Software encoding recommended（x264 in OBS）.": "建议使用软件编码（OBS中为x264）。",
        "Once you start broadcasting in your streaming app,click Start Streaming below..": "一旦您开始在流媒体应用程序中播放，请单击下面的“开始推流”。",
        
        // 添加新的翻译项
        "Edit folders": "编辑文件夹",
        "Name": "名字",
        "Last Name": "姓氏",
        "Bio (optional)": "个人简介（可选）",
        "Username (optional)": "用户名（可选）",
        "Any details such as age,occupation or city.": "任何详细信息，如年龄、职业或城市。",
        "Example：23 y.o.designer from San Francisco": "示例：23岁，来自旧金山的设计师",
        "Never Share With": "从不分享给",
        "Add Users or Groups...": "添加用户或群组...",
        "Always Share With": "始终分享给",
        "Exceptions": "例外",

        // 添加右键菜单新增选项
        "Hide": "隐藏",
        "Hide chat": "隐藏聊天",
        "Hide folder": "隐藏文件夹",
        "Hide All": "全部隐藏",
        "Hide story": "隐藏状态",
        "Hide from folder": "从文件夹中隐藏",
        "Hide from menu": "从菜单中隐藏",
        "Hide pinned message": "隐藏置顶消息",
        "Hide replies": "隐藏回复",
        "Show": "显示",
        "Show in folder": "在文件夹中显示",
        "Show in chat": "在聊天中显示",
        "Show All": "显示全部",
        "Show more": "显示更多",
        "Show replies": "显示回复",

        // 增加新的翻译项
        "Delete Chat": "删除聊天",
        "Block user": "屏蔽用户",
        "Annual": "年付",
        "Monthly": "月付",
        "Forward messages here to save them": "转发消息到这里保存", 
        "Send media and files to store them": "发送媒体和文件以保存",
        "Access this chat from any device": "从任何设备访问此聊天",
        "Use search to quickly find things": "使用搜索快速找到内容",

        // 新增最近要求的翻译项
        "Enable Desktop Notifications": "启用桌面通知",
        "Desktop Sounds": "桌面提示音",
        "Stories": "状态",
        "Contribute": "贡献",
        "in-app currency": "应用内货币",
        "Forward to Chat": "转发到聊天",
        "Send As Copy": "以复制形式发送",
        "Remove Link": "移除链接",
        "Delete Messages": "删除消息",
        "Delete Selected Messages": "删除选中的消息",
        "ARCHIVED CHATS": "已归档的聊天",
        "Show Calls Tab": "显示通话标签",
        "Message Text": "消息文本",
        "View Stats": "查看统计",
        "Boost History": "加速历史",
        "Message History": "消息历史",
        "Loading history...": "加载历史记录...",
        "No messages here yet": "这里还没有消息",
        "Send to multiple chats": "发送到多个聊天",
        "Choose recipients": "选择接收者",
        "Delete drafts": "删除草稿",
        "No bots here yet...": "这里还没有机器人...",
        "You can add multiple bots to this chat.": "您可以添加多个机器人到此聊天。",
        "Add Bot": "添加机器人",
        "Create Story": "创建状态",
        "View Story": "查看状态",
        "Post Story": "发布状态"
    };

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