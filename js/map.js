// ===== 地图导览模块 / Map Tour Module =====

const mapModule = {
    init() {
        this.renderHotspots();
        this.renderSpotList();
        this.bindEvents();
    },

    // 渲染地图热点
    renderHotspots() {
        const container = document.getElementById('mapHotspots');
        if (!container) return;

        const sites = historicalData.sites;
        container.innerHTML = sites.map(site => `
            <div class="hotspot" 
                 style="left: ${site.mapX}%; top: ${site.mapY}%;"
                 data-id="${site.id}"
                 title="${site.title}">
                <div class="hotspot-label">${site.title}</div>
            </div>
        `).join('');
    },

    // 渲染景点列表
    renderSpotList() {
        const container = document.getElementById('spotList');
        if (!container) return;

        const sites = historicalData.sites;
        const lang = i18n.currentLang;

        container.innerHTML = sites.map((site, index) => `
            <div class="spot-item" data-id="${site.id}">
                <div class="spot-icon">${index + 1}</div>
                <div class="spot-name">${lang === 'zh' ? site.title : site.titleEn}</div>
            </div>
        `).join('');
    },

    // 绑定事件
    bindEvents() {
        // 热点点击
        document.getElementById('mapHotspots')?.addEventListener('click', (e) => {
            const hotspot = e.target.closest('.hotspot');
            if (hotspot) {
                const id = hotspot.dataset.id;
                this.showSiteDetail(id);
            }
        });

        // 景点列表点击
        document.getElementById('spotList')?.addEventListener('click', (e) => {
            const item = e.target.closest('.spot-item');
            if (item) {
                const id = item.dataset.id;
                this.showSiteDetail(id);
            }
        });

        // 语言切换时重新渲染
        document.addEventListener('langChange', () => {
            this.renderSpotList();
        });
    },

    // 显示景点详情
    showSiteDetail(id) {
        const site = findRecord(id);
        if (!site) return;

        const lang = i18n.currentLang;
        const title = lang === 'zh' ? site.title : site.titleEn;
        const content = lang === 'zh' ? site.content : site.contentEn;
        const time = lang === 'zh' ? site.time : site.timeEn;
        const category = lang === 'zh' ? site.category : site.categoryEn;
        const source = site.source;
        const tags = site.tags || [];
        const address = site.mapAddress;

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <span class="modal-category">${category}</span>
            <h2>${title}</h2>
            <div class="modal-time">${time}</div>
            <div class="modal-content-text">${content}</div>
            <div style="margin-bottom: 16px;">
                <a href="https://apis.map.qq.com/uri/v1/search?keyword=${encodeURIComponent(address)}&referer=myapp" 
                   target="_blank" 
                   style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background: #c41e3a; color: white; text-decoration: none; border-radius: 20px; font-size: 0.9rem; transition: all 0.3s;"
                   onmouseover="this.style.background='#8b0000'"
                   onmouseout="this.style.background='#c41e3a'">
                    📍 ${lang === 'zh' ? '腾讯地图导航' : 'Navigate with Tencent Map'}
                </a>
                <a href="https://map.baidu.com/search/${encodeURIComponent(address)}" 
                   target="_blank" 
                   style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background: #2932e1; color: white; text-decoration: none; border-radius: 20px; font-size: 0.9rem; margin-left: 10px; transition: all 0.3s;"
                   onmouseover="this.style.background='#1e25b3'"
                   onmouseout="this.style.background='#2932e1'">
                    🗺️ ${lang === 'zh' ? '百度地图导航' : 'Navigate with Baidu Map'}
                </a>
            </div>
            <div class="modal-tags" style="margin-bottom: 16px;">
                ${tags.map(tag => `<span style="display: inline-block; padding: 3px 10px; background: #faf0e6; color: #c41e3a; font-size: 0.75rem; border-radius: 10px; margin-right: 6px; margin-bottom: 4px;">${tag}</span>`).join('')}
            </div>
            <div class="modal-source">
                ${i18n.t('modal.source')} ${source}
            </div>
        `;

        document.getElementById('detailModal').classList.add('show');
    }
};
