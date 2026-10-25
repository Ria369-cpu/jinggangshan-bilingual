// ===== 主入口文件 / Main Entry =====

document.addEventListener('DOMContentLoaded', () => {
    // 初始化国际化
    i18n.init();

    // 初始化各模块
    mapModule.init();
    timelineModule.init();
    voiceModule.init();
    assistantModule.init();

    // 导航交互
    initNavigation();

    // 模态框
    initModal();
});

// 导航 - 页面切换
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-view');

    // 点击导航切换页面
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.dataset.page;
            switchPage(targetPage);
        });
    });

    // Logo点击返回首页
    document.querySelector('.nav-logo')?.addEventListener('click', () => {
        switchPage('home');
    });

    // 语言切换
    document.getElementById('langToggle')?.addEventListener('click', () => {
        i18n.toggle();
    });

    // 初始化：首页隐藏footer
    const footer = document.getElementById('mainFooter');
    if (footer) {
        footer.style.display = 'none';
    }
    // 首页时禁止body纵向滚动
    document.body.classList.add('home-active');

    function switchPage(pageName) {
        // 切换页面前暂停所有音频
        if (typeof timelineModule !== 'undefined' && timelineModule.pauseAllAudio) {
            timelineModule.pauseAllAudio();
        }

        // 更新导航激活状态
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        // 切换页面显示
        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPageEl = document.getElementById('page-' + pageName);
        if (targetPageEl) {
            targetPageEl.classList.add('active');
        }

        // 控制footer显示（首页不显示footer）
        const footer = document.getElementById('mainFooter');
        if (footer) {
            if (pageName === 'home') {
                footer.style.display = 'none';
                document.body.classList.add('home-active');
            } else {
                footer.style.display = 'block';
                document.body.classList.remove('home-active');
            }
        }

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 模态框
function initModal() {
    const modal = document.getElementById('detailModal');
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    if (!modal) return;

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}
