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

    // 团队合影灯箱
    initTeamPhotoLightbox();
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

    // 初始化：首页隐藏page-container避免空白
    const footer = document.getElementById('mainFooter');
    // 首页时禁止body纵向滚动
    document.body.classList.add('home-active');
    // 首页时隐藏page-container避免空白
    const pageContainerInit = document.querySelector('.page-container');
    if (pageContainerInit) {
        pageContainerInit.classList.add('hidden');
    }

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

        // 控制footer显示（所有页面都显示footer）
        const pageContainer = document.querySelector('.page-container');
        if (pageName === 'home') {
            document.body.classList.add('home-active');
            if (pageContainer) pageContainer.classList.add('hidden');
        } else {
            document.body.classList.remove('home-active');
            if (pageContainer) pageContainer.classList.remove('hidden');
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

// 团队合影灯箱
function initTeamPhotoLightbox() {
    const teamPhotoFrame = document.querySelector('.team-photo-frame');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (!teamPhotoFrame || !lightbox) return;

    const img = teamPhotoFrame.querySelector('.team-photo');
    const caption = teamPhotoFrame.querySelector('.team-photo-caption');

    function openTeamLightbox() {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption.textContent;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        // 隐藏上下张按钮（单张图）
        if (lightboxPrev) lightboxPrev.style.display = 'none';
        if (lightboxNext) lightboxNext.style.display = 'none';
    }

    function closeTeamLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
        if (lightboxPrev) lightboxPrev.style.display = '';
        if (lightboxNext) lightboxNext.style.display = '';
    }

    teamPhotoFrame.addEventListener('click', openTeamLightbox);

    lightboxOverlay.addEventListener('click', closeTeamLightbox);
    lightboxClose.addEventListener('click', closeTeamLightbox);

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeTeamLightbox();
        }
    });
}
