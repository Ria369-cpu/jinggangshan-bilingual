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

    // 滚动效果
    initScrollEffects();

    // 更新统计数字
    updateStats();
});

// 导航
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // 点击导航
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动高亮导航
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 语言切换
    document.getElementById('langToggle')?.addEventListener('click', () => {
        i18n.toggle();
    });
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

// 滚动效果
function initScrollEffects() {
    // 导航栏背景变化
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(139, 0, 0, 0.08)';
        }
    });

    // 数字动画
    const animateNumbers = () => {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                stat.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    };

    window.addEventListener('scroll', animateNumbers);
    animateNumbers();
}

// 更新统计数字
function updateStats() {
    const totalRecords = getAllRecords().length;
    const statEl = document.getElementById('statRecords');
    if (statEl) {
        statEl.textContent = totalRecords + '+';
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
