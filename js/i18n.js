// ===== 双语国际化 / Bilingual i18n =====

const i18n = {
    currentLang: 'zh', // 'zh' or 'en'

    translations: {
        zh: {
            // Navigation
            'nav.title': '井冈山史料双语检索智能平台',
            'nav.home': '首页',
            'nav.map': '地图导览',
            'nav.past': '今昔溯源',
            'nav.youth': '青年之声',
            'nav.ai': '智能助手',

            // Hero
            'hero.title': '井冈山 · 革命摇篮',
            'hero.subtitle': 'Cradle of the Chinese Revolution',
            'hero.desc': '1927年，毛泽东率领秋收起义部队到达井冈山，创建了中国第一个农村革命根据地。从这里走出了"农村包围城市"的中国革命道路，孕育了伟大的井冈山精神。',
            'hero.stats.records': '史料记录',
            'hero.stats.spots': '红色景点',
            'hero.stats.tags': '历史标签',
            'hero.scroll': '向下探索',

            // Intro Section
            'intro.platformTitle': '平台简介',
            'intro.platformDesc': '本平台是一座数字化的井冈山红色文化宝库，汇集革命事件、历史人物、旧址景点、新时代发展等丰富史料，支持中英双语检索与阅读。通过地图导览、今昔对比、青年之声、智能助手四大板块，让红色历史可触可感、代代相传。',
            'intro.teamTitle': '译路星火实践团',
            'intro.teamDesc': '译路星火实践团由热爱红色文化的青年学子组成，秉承"翻译传递力量，星火照亮初心"的理念，深入井冈山革命根据地开展实地调研。我们用双语讲述红色故事，用科技赋能文化传播，让井冈山精神在新时代绽放新的光芒。',
            'intro.teamPhotoCaption': '译路星火实践团 · 井冈山合影',
            'intro.teamPhotoZoom': '🔍 点击放大',

            // Map Section
            'map.title': '地图导览',
            'map.subtitle': '点击景点，开启您的红色之旅',
            'map.spotList': '景点列表',
            'map.navigate': '导航前往',
            'map.clickToView': '点击查看详情',

            // Past & Present Section
            'past.title': '今昔溯源',
            'past.subtitle': '新旧对比，见证时代变迁',
            'past.before': '历史旧貌',
            'past.after': '今日新颜',
            'past.selectSpot': '选择景点：',
            'past.spots.longjiang': '龙江书院',
            'past.spots.maoping': '茅坪八角楼',
            'past.spots.huangyangjie': '黄洋界',
            'past.spots.dajing': '大井朱毛旧居',
            'past.spots.shangjing': '上井红军造币厂',
            'past.spots.ciping': '茨坪革命旧址群',
            'past.spots.cemetery': '井冈山革命烈士陵园',
            'past.spots.museum': '井冈山革命博物馆',
            'past.spots.longtan': '龙潭瀑布',
            'past.spots.nanshan': '南山公园火炬广场',
            'past.storyBefore': '历史故事',
            'past.storyAfter': '今日面貌',
            'past.timelineTitle': '历史时间线',
            'past.filter.all': '全部',
            'past.filter.event': '革命事件',
            'past.filter.person': '历史人物',
            'past.filter.spot': '旧址景点',
            'past.filter.newera': '新时代发展',
            'past.clickDetail': '点击查看详情',
            'past.tab.compare': '新旧对比',
            'past.tab.timeline': '史料时间线',
            'past.mode.compare': '对比',
            'past.mode.before': '历史旧貌',
            'past.mode.after': '今日新颜',

            // Youth Voice Section
            'youth.title': '青年之声',
            'youth.subtitle': '留言墙 · 译路星火实践团',
            'youth.galleryTitle': '实践团风采',
            'youth.wallTitle': '留言墙',
            'youth.wallSubtitle': '留下您的感悟，传承井冈山精神',
            'youth.submit': '发布留言',
            'youth.placeholder.name': '您的名字',
            'youth.placeholder.content': '写下您的留言...',
            'youth.teamMember': '实践团成员',

            // AI Assistant Section
            'ai.title': '智能助手',
            'ai.subtitle': '基于史料的智能问答，传承红色记忆',
            'ai.name': '井冈智答',
            'ai.online': '在线',
            'ai.settingsTitle': 'API 设置',
            'ai.provider': '模型服务商：',
            'ai.apiKey': 'API Key：',
            'ai.model': '模型：',
            'ai.saveSettings': '保存设置',
            'ai.settingsHint': '* 您的API密钥仅保存在本地浏览器中，不会上传到任何服务器',
            'ai.welcome': '您好！我是井冈智答，基于井冈山史料为您解答问题。您可以询问关于井冈山斗争历史、革命人物、旧址景点、井冈山精神等方面的问题。',
            'ai.send': '发送',
            'ai.disclaimer': '* 回答基于已有史料生成，仅供学习参考',
            'ai.thinking': '正在思考中...',
            'ai.noApiKey': '请先在设置中配置API Key',
            'ai.settingsSaved': '设置已保存',

            // Modal
            'modal.source': '来源：',
            'modal.tags': '标签：',

            // Footer
            'footer.about': '关于平台',
            'footer.aboutDesc': '井冈山史料双语检索智能平台，致力于传承红色基因，让井冈山精神走向世界。',
            'footer.team': '团队',
            'footer.teamName': '译路星火实践团',
            'footer.school': '哈尔滨工程大学外国语学院',
            'footer.contact': '联系方式',
            'footer.contactDesc': '欢迎交流合作，共同传播红色文化',

            // Categories
            'category.革命事件': '革命事件',
            'category.人物': '历史人物',
            'category.旧址景点': '旧址景点',
            'category.新时代发展': '新时代发展'
        },

        en: {
            // Navigation
            'nav.title': 'Jinggangshan Bilingual Historical Archive',
            'nav.home': 'Home',
            'nav.map': 'Map Tour',
            'nav.past': 'Past & Present',
            'nav.youth': 'Youth Voice',
            'nav.ai': 'AI Assistant',

            // Hero
            'hero.title': 'Jinggangshan · Cradle of Revolution',
            'hero.subtitle': 'Cradle of the Chinese Revolution',
            'hero.desc': 'In 1927, Mao Zedong led the Autumn Harvest Uprising forces to Jinggangshan and founded China\'s first rural revolutionary base area. From here emerged the Chinese revolutionary path of "encircling cities from the countryside," giving birth to the great Jinggangshan Spirit.',
            'hero.stats.records': 'Records',
            'hero.stats.spots': 'Red Sites',
            'hero.stats.tags': 'Tags',
            'hero.scroll': 'Scroll Down',

            // Intro Section
            'intro.platformTitle': 'About the Platform',
            'intro.platformDesc': 'This platform is a digital treasure trove of Jinggangshan red culture, gathering rich historical materials including revolutionary events, historical figures, historic sites, and new era development. It supports bilingual retrieval and reading in Chinese and English. Through four sections - Map Tour, Past & Present, Youth Voice, and AI Assistant - red history becomes tangible and memorable for generations.',
            'intro.teamTitle': 'Yi Lu Xinghuo Practice Group',
            'intro.teamDesc': 'The Yi Lu Xinghuo (Translation Path · Spark) Practice Group consists of young students who love red culture. Adhering to the philosophy of "Translation conveys power, sparks illuminate the original aspiration," we conducted in-depth field research in the Jinggangshan revolutionary base. We tell red stories bilingually and empower cultural communication with technology, letting the Jinggangshan Spirit shine anew in the new era.',
            'intro.teamPhotoCaption': 'Yi Lu Xinghuo Practice Group · Jinggangshan Photo',
            'intro.teamPhotoZoom': '🔍 Click to zoom',

            // Map Section
            'map.title': 'Map Tour',
            'map.subtitle': 'Click on sites to start your red journey',
            'map.spotList': 'Site List',
            'map.navigate': 'Navigate',
            'map.clickToView': 'Click for details',

            // Past & Present Section
            'past.title': 'Past & Present',
            'past.subtitle': 'Compare then and now, witness the changes of time',
            'past.before': 'Historical View',
            'past.after': 'Present View',
            'past.selectSpot': 'Select Site:',
            'past.spots.longjiang': 'Longjiang Academy',
            'past.spots.maoping': 'Maoping Octagonal Building',
            'past.spots.huangyangjie': 'Huangyangjie',
            'past.spots.dajing': 'Dajing Zhu-Mao Residence',
            'past.spots.shangjing': 'Shangjing Red Army Mint',
            'past.spots.ciping': 'Ciping Revolutionary Sites',
            'past.spots.cemetery': 'Revolutionary Martyrs Cemetery',
            'past.spots.museum': 'Jinggangshan Revolutionary Museum',
            'past.spots.longtan': 'Longtan Waterfall',
            'past.spots.nanshan': 'Nanshan Torch Square',
            'past.storyBefore': 'Historical Story',
            'past.storyAfter': 'Present Day',
            'past.timelineTitle': 'Historical Timeline',
            'past.filter.all': 'All',
            'past.filter.event': 'Events',
            'past.filter.person': 'Figures',
            'past.filter.spot': 'Sites',
            'past.filter.newera': 'New Era',
            'past.clickDetail': 'Click for details',
            'past.tab.compare': 'Compare',
            'past.tab.timeline': 'Timeline',
            'past.mode.compare': 'Compare',
            'past.mode.before': 'Historical',
            'past.mode.after': 'Present',

            // Youth Voice Section
            'youth.title': 'Youth Voice',
            'youth.subtitle': 'Message Wall · Yilu Xinghuo Practice Team',
            'youth.galleryTitle': 'Team Gallery',
            'youth.wallTitle': 'Message Wall',
            'youth.wallSubtitle': 'Leave your thoughts, inherit the Jinggangshan Spirit',
            'youth.submit': 'Post Message',
            'youth.placeholder.name': 'Your name',
            'youth.placeholder.content': 'Write your message...',
            'youth.teamMember': 'Team Member',

            // AI Assistant Section
            'ai.title': 'AI Assistant',
            'ai.subtitle': 'Smart Q&A based on historical materials, inheriting red memory',
            'ai.name': 'Jinggang ZhiDa',
            'ai.online': 'Online',
            'ai.settingsTitle': 'API Settings',
            'ai.provider': 'Provider:',
            'ai.apiKey': 'API Key:',
            'ai.model': 'Model:',
            'ai.saveSettings': 'Save Settings',
            'ai.settingsHint': '* Your API key is stored only in your local browser and will not be uploaded to any server',
            'ai.welcome': 'Hello! I\'m Jinggang ZhiDa, here to answer your questions based on Jinggangshan historical materials. You can ask about Jinggangshan struggle history, revolutionary figures, historical sites, the Jinggangshan Spirit, and more.',
            'ai.send': 'Send',
            'ai.disclaimer': '* Answers are generated based on existing historical materials, for learning reference only',
            'ai.thinking': 'Thinking...',
            'ai.noApiKey': 'Please configure your API Key in settings first',
            'ai.settingsSaved': 'Settings saved',

            // Modal
            'modal.source': 'Source:',
            'modal.tags': 'Tags:',

            // Footer
            'footer.about': 'About',
            'footer.aboutDesc': 'Jinggangshan Bilingual Historical Archive Platform, dedicated to inheriting the red gene and bringing the Jinggangshan Spirit to the world.',
            'footer.team': 'Team',
            'footer.teamName': 'Yilu Xinghuo Practice Team',
            'footer.school': 'School of Foreign Languages, Harbin Engineering University',
            'footer.contact': 'Contact',
            'footer.contactDesc': 'Welcome to exchange and cooperate, spreading red culture together',

            // Categories
            'category.革命事件': 'Revolutionary Event',
            'category.人物': 'Historical Figure',
            'category.旧址景点': 'Historical Site',
            'category.新时代发展': 'New Era Development'
        }
    },

    // 获取翻译文本
    t(key) {
        return this.translations[this.currentLang][key] || key;
    },

    // 切换语言
    toggle() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.apply();
        localStorage.setItem('jinggangshan_lang', this.currentLang);
        return this.currentLang;
    },

    // 应用翻译到页面
    apply() {
        // 更新所有带 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });

        // 更新语言切换按钮状态
        const langCn = document.querySelector('.lang-cn');
        const langEn = document.querySelector('.lang-en');
        if (langCn && langEn) {
            if (this.currentLang === 'zh') {
                langCn.classList.add('active');
                langEn.classList.remove('active');
            } else {
                langEn.classList.add('active');
                langCn.classList.remove('active');
            }
        }

        // 更新HTML lang属性
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

        // 触发语言切换事件
        document.dispatchEvent(new CustomEvent('langChange', { detail: { lang: this.currentLang } }));
    },

    // 初始化
    init() {
        const savedLang = localStorage.getItem('jinggangshan_lang');
        if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
            this.currentLang = savedLang;
        }
        this.apply();
    }
};
