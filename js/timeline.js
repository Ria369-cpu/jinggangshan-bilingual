// ===== 今昔溯源模块 / Past & Present Module =====

const timelineModule = {
    currentFilter: 'all',
    isDragging: false,
    currentMode: 'compare',
    currentAudio: null,

    init() {
        this.initSectionTabs();
        this.initSpotSelector();
        this.initAudioPlayers();
        this.renderTimeline();
        this.bindFilterEvents();
        this.bindTimelineEvents();
        this.initScrollAnimation();
    },

    // 初始化音频播放器
    initAudioPlayers() {
        const beforePlayer = document.getElementById('audioBeforePlayer');
        const afterPlayer = document.getElementById('audioAfterPlayer');
        if (!beforePlayer || !afterPlayer) return;

        // 绑定播放按钮
        document.getElementById('audioBeforeBtn').addEventListener('click', () => this.toggleAudio('before'));
        document.getElementById('audioAfterBtn').addEventListener('click', () => this.toggleAudio('after'));

        // 绑定进度条点击跳转
        document.getElementById('audioBeforeProgress').addEventListener('click', (e) => this.seekAudio('before', e));
        document.getElementById('audioAfterProgress').addEventListener('click', (e) => this.seekAudio('after', e));
    },

    // 格式化时间
    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' + s : s);
    },

    // 更新进度条
    updateProgress(type) {
        const audio = type === 'before' ? this.beforeAudio : this.afterAudio;
        if (!audio) return;

        const fill = document.getElementById('audio' + (type === 'before' ? 'Before' : 'After') + 'Fill');
        const dot = document.getElementById('audio' + (type === 'before' ? 'Before' : 'After') + 'Dot');
        const current = document.getElementById('audio' + (type === 'before' ? 'Before' : 'After') + 'Current');
        const duration = document.getElementById('audio' + (type === 'before' ? 'Before' : 'After') + 'Duration');

        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            fill.style.width = percent + '%';
            dot.style.left = percent + '%';
            current.textContent = this.formatTime(audio.currentTime);
            duration.textContent = this.formatTime(audio.duration);
        }
    },

    // 进度条点击跳转
    seekAudio(type, e) {
        const audio = type === 'before' ? this.beforeAudio : this.afterAudio;
        const progress = document.getElementById('audio' + (type === 'before' ? 'Before' : 'After') + 'Progress');
        if (!audio || !audio.duration) return;

        const rect = progress.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
        this.updateProgress(type);
    },

    // 切换音频播放/暂停
    toggleAudio(type) {
        const select = document.getElementById('spotSelect');
        const spot = select ? select.value : 'longjiang';
        const data = comparisonImages[spot];
        if (!data) return;

        const audioSrc = type === 'before' ? data.audioBefore : data.audioAfter;
        if (!audioSrc) return;

        const btn = type === 'before'
            ? document.getElementById('audioBeforeBtn')
            : document.getElementById('audioAfterBtn');
        const icon = btn.querySelector('.audio-icon');

        // 如果有其他音频在播放，先暂停
        if (this.currentAudio) {
            const otherType = this.currentAudio._type;
            if (otherType !== type) {
                this.currentAudio.pause();
                const otherBtn = otherType === 'before'
                    ? document.getElementById('audioBeforeBtn')
                    : document.getElementById('audioAfterBtn');
                if (otherBtn) {
                    otherBtn.classList.remove('playing');
                    const otherIcon = otherBtn.querySelector('.audio-icon');
                    if (otherIcon) otherIcon.textContent = '▶';
                }
            }
        }

        const audio = type === 'before' ? this.beforeAudio : this.afterAudio;

        // 如果点击的是当前正在播放的音频，暂停
        if (audio && this.currentAudio === audio && !audio.paused) {
            audio.pause();
            btn.classList.remove('playing');
            icon.textContent = '▶';
            this.currentAudio = null;
            return;
        }

        // 创建或播放音频
        let targetAudio = audio;
        if (!targetAudio) {
            targetAudio = new Audio(audioSrc);
            targetAudio._type = type;
            targetAudio.addEventListener('timeupdate', () => {
                this.updateProgress(type);
            });
            targetAudio.addEventListener('loadedmetadata', () => {
                this.updateProgress(type);
            });
            targetAudio.addEventListener('ended', () => {
                btn.classList.remove('playing');
                icon.textContent = '▶';
                this.currentAudio = null;
            });
            if (type === 'before') {
                this.beforeAudio = targetAudio;
            } else {
                this.afterAudio = targetAudio;
            }
        }

        targetAudio.play().then(() => {
            btn.classList.add('playing');
            icon.textContent = '⏸';
            this.currentAudio = targetAudio;
        }).catch(err => {
            console.error('音频播放失败:', err);
        });
    },

    // 暂停所有音频（切换页面时调用）
    pauseAllAudio() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
        ['before', 'after'].forEach(type => {
            const btn = type === 'before'
                ? document.getElementById('audioBeforeBtn')
                : document.getElementById('audioAfterBtn');
            if (btn) {
                btn.classList.remove('playing');
                const icon = btn.querySelector('.audio-icon');
                if (icon) icon.textContent = '▶';
            }
        });
    },

    // 初始化板块切换标签
    initSectionTabs() {
        const tabs = document.querySelectorAll('.section-tab');
        const panels = document.querySelectorAll('.tab-panel');
        if (!tabs.length || !panels.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;

                // 更新按钮状态
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // 切换面板
                panels.forEach(panel => {
                    if (panel.dataset.panel === targetTab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    },

    // 初始化模式切换标签
    initModeTabs() {
        const tabs = document.querySelectorAll('.mode-tab');
        const container = document.querySelector('.compare-container');
        if (!tabs.length || !container) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const mode = tab.dataset.mode;
                this.currentMode = mode;

                // 更新按钮状态
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // 更新容器样式
                container.classList.remove('mode-before', 'mode-after');
                if (mode === 'before') {
                    container.classList.add('mode-before');
                } else if (mode === 'after') {
                    container.classList.add('mode-after');
                }
            });
        });
    },

    // 初始化对比滑块
    initCompareSlider() {
        const container = document.querySelector('.compare-container');
        const handle = document.getElementById('compareHandle');
        const afterImg = document.querySelector('.compare-after');
        if (!container || !handle || !afterImg) return;

        const updatePosition = (x) => {
            const rect = container.getBoundingClientRect();
            let percent = ((x - rect.left) / rect.width) * 100;
            percent = Math.max(0, Math.min(100, percent));
            
            afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            handle.style.left = `${percent}%`;
        };

        // 鼠标事件
        handle.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                updatePosition(e.clientX);
            }
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        // 触摸事件
        handle.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (this.isDragging && e.touches[0]) {
                updatePosition(e.touches[0].clientX);
            }
        });

        document.addEventListener('touchend', () => {
            this.isDragging = false;
        });

        // 点击容器直接跳转
        container.addEventListener('click', (e) => {
            if (!e.target.closest('.handle-button')) {
                updatePosition(e.clientX);
            }
        });
    },

    // 初始化景点选择器
    initSpotSelector() {
        const select = document.getElementById('spotSelect');
        const sitePhoto = document.getElementById('sitePhoto');
        const beforeText = document.getElementById('beforeStoryText');
        const afterText = document.getElementById('afterStoryText');
        if (!select || !sitePhoto) return;

        const updateSpot = () => {
            const spot = select.value;
            const data = comparisonImages[spot];
            if (data) {
                sitePhoto.src = data.after;
                sitePhoto.alt = data.title;
                
                if (beforeText && afterText) {
                    const lang = i18n.currentLang;
                    beforeText.textContent = lang === 'zh' ? data.beforeText : data.beforeTextEn;
                    afterText.textContent = lang === 'zh' ? data.afterText : data.afterTextEn;
                }

                // 显示/隐藏音频播放器
                const beforePlayer = document.getElementById('audioBeforePlayer');
                const afterPlayer = document.getElementById('audioAfterPlayer');
                if (beforePlayer) {
                    beforePlayer.style.display = data.audioBefore ? 'flex' : 'none';
                    // 切换景点时重置音频状态
                    if (this.beforeAudio) {
                        this.beforeAudio.pause();
                        this.beforeAudio = null;
                    }
                    const btn = document.getElementById('audioBeforeBtn');
                    if (btn) {
                        btn.classList.remove('playing');
                        const icon = btn.querySelector('.audio-icon');
                        if (icon) icon.textContent = '▶';
                    }
                    // 重置进度条
                    const fill = document.getElementById('audioBeforeFill');
                    const dot = document.getElementById('audioBeforeDot');
                    const current = document.getElementById('audioBeforeCurrent');
                    const duration = document.getElementById('audioBeforeDuration');
                    if (fill) fill.style.width = '0%';
                    if (dot) dot.style.left = '0%';
                    if (current) current.textContent = '0:00';
                    if (duration) duration.textContent = '0:00';
                }
                if (afterPlayer) {
                    afterPlayer.style.display = data.audioAfter ? 'flex' : 'none';
                    if (this.afterAudio) {
                        this.afterAudio.pause();
                        this.afterAudio = null;
                    }
                    const btn = document.getElementById('audioAfterBtn');
                    if (btn) {
                        btn.classList.remove('playing');
                        const icon = btn.querySelector('.audio-icon');
                        if (icon) icon.textContent = '▶';
                    }
                    const fill = document.getElementById('audioAfterFill');
                    const dot = document.getElementById('audioAfterDot');
                    const current = document.getElementById('audioAfterCurrent');
                    const duration = document.getElementById('audioAfterDuration');
                    if (fill) fill.style.width = '0%';
                    if (dot) dot.style.left = '0%';
                    if (current) current.textContent = '0:00';
                    if (duration) duration.textContent = '0:00';
                }
                this.currentAudio = null;
            }
        };

        select.addEventListener('change', updateSpot);
        
        // 监听语言切换事件
        document.addEventListener('langChange', () => {
            updateSpot();
        });
        
        // 初始化默认景点
        updateSpot();
    },

    // 渲染时间线
    renderTimeline() {
        const container = document.getElementById('timeline');
        if (!container) return;

        const records = this.getFilteredRecords();
        const lang = i18n.currentLang;

        // 按年份排序
        const sorted = [...records].sort((a, b) => (a.year || 0) - (b.year || 0));

        container.innerHTML = sorted.map(record => {
            const title = lang === 'zh' ? record.title : record.titleEn;
            const content = lang === 'zh' ? record.content : record.contentEn;
            const time = lang === 'zh' ? record.time : record.timeEn;
            const category = lang === 'zh' ? record.category : record.categoryEn;

            return `
                <div class="timeline-item" data-id="${record.id}" data-category="${record.category}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <div class="timeline-date">${time}</div>
                        <h4>${title}</h4>
                        <p>${content}</p>
                        <span class="timeline-tag">${category}</span>
                    </div>
                </div>
            `;
        }).join('');

        // 重新初始化滚动动画
        setTimeout(() => this.initScrollAnimation(), 100);
    },

    // 获取过滤后的记录
    getFilteredRecords() {
        const all = getAllRecords();
        
        if (this.currentFilter === 'all') {
            return all;
        }
        
        const categoryMap = {
            'event': '革命事件',
            'person': '人物',
            'spot': '旧址景点',
            'newera': '新时代发展'
        };
        
        const category = categoryMap[this.currentFilter];
        return all.filter(r => r.category === category);
    },

    // 绑定筛选事件
    bindFilterEvents() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.renderTimeline();
            });
        });
    },

    // 绑定时间线卡片点击事件
    bindTimelineEvents() {
        document.getElementById('timeline')?.addEventListener('click', (e) => {
            const item = e.target.closest('.timeline-item');
            if (item) {
                const id = item.dataset.id;
                this.showRecordDetail(id);
            }
        });
    },

    // 显示记录详情
    showRecordDetail(id) {
        const record = findRecord(id);
        if (!record) return;

        const lang = i18n.currentLang;
        const title = lang === 'zh' ? record.title : record.titleEn;
        const content = lang === 'zh' ? record.content : record.contentEn;
        const time = lang === 'zh' ? record.time : record.timeEn;
        const category = lang === 'zh' ? record.category : record.categoryEn;
        const source = record.source;
        const tags = record.tags || [];

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <span class="modal-category">${category}</span>
            <h2>${title}</h2>
            <div class="modal-time">${time}</div>
            <div class="modal-content-text">${content}</div>
            <div style="margin-bottom: 16px;">
                ${tags.map(tag => `<span style="display: inline-block; padding: 3px 10px; background: #faf0e6; color: #c41e3a; font-size: 0.75rem; border-radius: 10px; margin-right: 6px; margin-bottom: 4px;">${tag}</span>`).join('')}
            </div>
            <div class="modal-source">
                ${i18n.t('modal.source')} ${source}
            </div>
        `;

        document.getElementById('detailModal').classList.add('show');
    },

    // 滚动动画
    initScrollAnimation() {
        const items = document.querySelectorAll('.timeline-item');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        items.forEach(item => observer.observe(item));
    }
};
