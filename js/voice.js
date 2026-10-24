// ===== 青年之声模块 / Youth Voice Module =====

const voiceModule = {
    messages: [],
    currentPhotoIndex: 0,

    init() {
        this.loadMessages();
        this.renderPhotoGallery();
        this.renderMessages();
        this.bindEvents();
        this.initLightbox();
    },

    // 加载留言
    loadMessages() {
        const saved = localStorage.getItem('jinggangshan_messages');
        if (saved) {
            try {
                this.messages = JSON.parse(saved);
            } catch (e) {
                this.messages = [...initialMessages];
            }
        } else {
            this.messages = [...initialMessages];
        }
    },

    // 保存留言
    saveMessages() {
        localStorage.setItem('jinggangshan_messages', JSON.stringify(this.messages));
    },

    // 渲染照片画廊
    renderPhotoGallery() {
        const container = document.getElementById('photoGallery');
        if (!container) return;

        const lang = i18n.currentLang;

        container.innerHTML = groupPhotos.map((photo, index) => `
            <div class="gallery-item" data-index="${index}">
                <img src="${photo.src}" alt="${lang === 'zh' ? photo.title : photo.titleEn}" loading="lazy">
                <div class="gallery-overlay">${lang === 'zh' ? photo.title : photo.titleEn}</div>
            </div>
        `).join('');
    },

    // 渲染留言墙
    renderMessages() {
        const container = document.getElementById('messagesContainer');
        if (!container) return;

        // 按时间倒序
        const sorted = [...this.messages].reverse();

        container.innerHTML = sorted.map(msg => `
            <div class="message-card ${msg.isTeam ? 'practice-team' : ''}">
                <div class="message-header">
                    <div class="message-avatar">${msg.avatar}</div>
                    <div class="message-info">
                        <div class="message-name">${this.escapeHtml(msg.name)}</div>
                        <div class="message-time">${msg.time}</div>
                    </div>
                </div>
                <div class="message-content">${this.escapeHtml(msg.content)}</div>
            </div>
        `).join('');
    },

    // HTML转义防XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // 绑定事件
    bindEvents() {
        // 提交留言
        document.getElementById('submitMsg')?.addEventListener('click', () => {
            this.submitMessage();
        });

        // 回车提交
        document.getElementById('msgContent')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                this.submitMessage();
            }
        });

        // 照片画廊点击
        document.getElementById('photoGallery')?.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                const index = parseInt(item.dataset.index);
                this.openLightbox(index);
            }
        });

        // 语言切换时重新渲染
        document.addEventListener('langChange', () => {
            this.renderPhotoGallery();
        });
    },

    // 提交留言
    submitMessage() {
        const nameInput = document.getElementById('msgName');
        const contentInput = document.getElementById('msgContent');
        const avatarSelect = document.getElementById('msgAvatar');

        const name = nameInput.value.trim();
        const content = contentInput.value.trim();
        const avatar = avatarSelect.value;

        if (!name || !content) {
            alert(i18n.currentLang === 'zh' ? '请填写名字和留言内容' : 'Please fill in your name and message');
            return;
        }

        const newMsg = {
            id: 'user_' + Date.now(),
            name: name,
            avatar: avatar,
            content: content,
            time: this.formatDate(new Date()),
            isTeam: false
        };

        this.messages.push(newMsg);
        this.saveMessages();
        this.renderMessages();

        // 清空输入
        nameInput.value = '';
        contentInput.value = '';

        // 滚动到最新留言
        setTimeout(() => {
            const container = document.getElementById('messagesContainer');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    },

    // 格式化日期
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    // 初始化灯箱
    initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const overlay = document.getElementById('lightboxOverlay');
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        if (!lightbox) return;

        overlay.addEventListener('click', () => this.closeLightbox());
        closeBtn.addEventListener('click', () => this.closeLightbox());
        prevBtn.addEventListener('click', () => this.prevPhoto());
        nextBtn.addEventListener('click', () => this.nextPhoto());

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('show')) return;
            
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.prevPhoto();
            if (e.key === 'ArrowRight') this.nextPhoto();
        });
    },

    // 打开灯箱
    openLightbox(index) {
        this.currentPhotoIndex = index;
        this.updateLightbox();
        document.getElementById('lightbox').classList.add('show');
        document.body.style.overflow = 'hidden';
    },

    // 关闭灯箱
    closeLightbox() {
        document.getElementById('lightbox').classList.remove('show');
        document.body.style.overflow = '';
    },

    // 更新灯箱内容
    updateLightbox() {
        const photo = groupPhotos[this.currentPhotoIndex];
        const lang = i18n.currentLang;
        
        document.getElementById('lightboxImage').src = photo.src;
        document.getElementById('lightboxImage').alt = lang === 'zh' ? photo.title : photo.titleEn;
        document.getElementById('lightboxCaption').textContent = 
            `${lang === 'zh' ? photo.title : photo.titleEn} (${this.currentPhotoIndex + 1}/${groupPhotos.length})`;
    },

    // 上一张
    prevPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex - 1 + groupPhotos.length) % groupPhotos.length;
        this.updateLightbox();
    },

    // 下一张
    nextPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % groupPhotos.length;
        this.updateLightbox();
    }
};
