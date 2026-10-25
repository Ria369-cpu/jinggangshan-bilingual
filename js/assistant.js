// ===== 智能助手模块 / AI Assistant Module =====

const assistantModule = {
    apiKey: 'sk-fda06f633ff64d7bbf260648a3426586',
    apiProvider: 'deepseek',
    apiModel: 'deepseek-chat',
    apiBase: {
        deepseek: 'https://api.deepseek.com/v1',
        doubao: 'https://ark.cn-beijing.volces.com/api/v3'
    },

    init() {
        this.loadSettings();
        this.bindEvents();
    },

    // 加载设置
    loadSettings() {
        const saved = localStorage.getItem('jinggangshan_ai_settings');
        if (saved) {
            try {
                const settings = JSON.parse(saved);
                this.apiKey = settings.apiKey || this.apiKey;
                this.apiProvider = settings.provider || 'deepseek';
                this.apiModel = settings.model || (this.apiProvider === 'deepseek' ? 'deepseek-chat' : '');
            } catch (e) {
                console.error('Failed to load AI settings:', e);
            }
        }

        // 更新UI
        document.getElementById('apiProvider').value = this.apiProvider;
        document.getElementById('apiKey').value = this.apiKey;
        document.getElementById('apiModel').value = this.apiModel;
    },

    // 保存设置
    saveSettings() {
        this.apiProvider = document.getElementById('apiProvider').value;
        this.apiKey = document.getElementById('apiKey').value.trim();
        this.apiModel = document.getElementById('apiModel').value.trim();

        if (this.apiProvider === 'deepseek' && !this.apiModel) {
            this.apiModel = 'deepseek-chat';
        }

        const settings = {
            provider: this.apiProvider,
            apiKey: this.apiKey,
            model: this.apiModel
        };

        localStorage.setItem('jinggangshan_ai_settings', JSON.stringify(settings));
        
        // 提示保存成功
        alert(i18n.t('ai.settingsSaved'));
    },

    // 绑定事件
    bindEvents() {
        // 设置面板切换（带密码验证）
        document.getElementById('apiSettingsBtn')?.addEventListener('click', () => {
            const panel = document.getElementById('apiSettingsPanel');
            // 如果面板已经显示，直接关闭（不需要密码）
            if (panel.classList.contains('show')) {
                panel.classList.remove('show');
                return;
            }
            // 弹出密码输入框
            const password = prompt('请输入管理员密码：');
            if (password === null) return; // 用户取消
            if (password === 'ylxh666') {
                panel.classList.add('show');
            } else {
                alert('密码错误，请重试！');
            }
        });

        // 保存设置
        document.getElementById('saveApiSettings')?.addEventListener('click', () => {
            this.saveSettings();
        });

        // 服务商切换时更新默认模型
        document.getElementById('apiProvider')?.addEventListener('change', (e) => {
            const modelInput = document.getElementById('apiModel');
            if (e.target.value === 'deepseek') {
                modelInput.placeholder = 'deepseek-chat';
                if (!modelInput.value) modelInput.value = 'deepseek-chat';
            } else if (e.target.value === 'doubao') {
                modelInput.placeholder = '请输入豆包模型ID';
            }
        });

        // 发送消息
        document.getElementById('sendBtn')?.addEventListener('click', () => {
            this.sendMessage();
        });

        // 回车发送
        document.getElementById('chatInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // 快捷问题
        document.querySelectorAll('.quick-q').forEach(q => {
            q.addEventListener('click', () => {
                const question = q.dataset.q;
                document.getElementById('chatInput').value = question;
                this.sendMessage();
            });
        });

        // 输入框自动调整高度
        document.getElementById('chatInput')?.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    },

    // 发送消息
    async sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;

        if (!this.apiKey) {
            this.addMessage('ai', i18n.t('ai.noApiKey'));
            document.getElementById('apiSettingsPanel').classList.add('show');
            return;
        }

        // 添加用户消息
        this.addMessage('user', message);
        input.value = '';
        input.style.height = 'auto';

        // 添加思考中指示器
        const thinkingId = this.addThinkingIndicator();

        try {
            // 检索相关史料
            const relevantDocs = this.retrieveRelevantDocs(message);
            
            // 构建系统提示词
            const systemPrompt = this.buildSystemPrompt(relevantDocs);
            
            // 调用API
            const response = await this.callAPI(systemPrompt, message);
            
            // 移除思考指示器
            this.removeThinkingIndicator(thinkingId);
            
            // 添加AI回复
            this.addMessage('ai', response);
            
        } catch (error) {
            this.removeThinkingIndicator(thinkingId);
            this.addMessage('ai', i18n.currentLang === 'zh' 
                ? '抱歉，回答时出现错误：' + error.message 
                : 'Sorry, an error occurred: ' + error.message);
        }
    },

    // 检索相关史料
    retrieveRelevantDocs(query) {
        const allRecords = getAllRecords();
        const queryLower = query.toLowerCase();
        
        // 简单关键词匹配
        const scored = allRecords.map(record => {
            let score = 0;
            const text = (record.title + ' ' + record.content + ' ' + (record.tags || []).join(' ')).toLowerCase();
            
            // 标题匹配权重更高
            if (record.title.toLowerCase().includes(queryLower)) score += 10;
            
            // 标签匹配
            (record.tags || []).forEach(tag => {
                if (queryLower.includes(tag.toLowerCase())) score += 5;
            });
            
            // 内容匹配
            if (text.includes(queryLower)) score += 3;
            
            // 关键词匹配
            const keywords = queryLower.split(/\s+/).filter(k => k.length > 1);
            keywords.forEach(kw => {
                if (text.includes(kw)) score += 1;
            });
            
            return { record, score };
        });
        
        // 按分数排序，取前5条
        return scored
            .filter(s => s.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map(s => s.record);
    },

    // 构建系统提示词
    buildSystemPrompt(relevantDocs) {
        const lang = i18n.currentLang;
        
        let prompt = lang === 'zh' 
            ? '你是"井冈智答"，一个基于井冈山革命史料的智能问答助手。'
            : 'You are "Jinggang ZhiDa", an intelligent Q&A assistant based on Jinggangshan revolutionary historical materials.';
        
        prompt += lang === 'zh'
            ? '\n\n请严格基于以下提供的史料内容回答用户问题。如果史料中没有相关信息，请明确告诉用户"根据现有史料，暂时无法回答这个问题"，不要编造信息。回答要准确、客观、有依据。'
            : '\n\nPlease strictly answer user questions based on the historical materials provided below. If there is no relevant information in the materials, please clearly tell the user "Based on existing historical materials, this question cannot be answered at this time." Do not fabricate information. Answers must be accurate, objective, and evidence-based.';
        
        if (relevantDocs.length > 0) {
            prompt += lang === 'zh' ? '\n\n相关史料：\n' : '\n\nRelevant Historical Materials:\n';
            relevantDocs.forEach((doc, index) => {
                const title = lang === 'zh' ? doc.title : doc.titleEn;
                const content = lang === 'zh' ? doc.content : doc.contentEn;
                const time = lang === 'zh' ? doc.time : doc.timeEn;
                prompt += `\n【史料${index + 1}】${title}（${time}）\n${content}\n`;
            });
        } else {
            prompt += lang === 'zh'
                ? '\n\n注意：未检索到直接相关的史料，请告诉用户现有史料中暂未收录相关内容。'
                : '\n\nNote: No directly relevant historical materials were found. Please tell the user that related content is not yet included in existing materials.';
        }
        
        prompt += lang === 'zh'
            ? '\n\n请用简洁明了的语言回答，适当引用史料中的关键信息。回答末尾可以注明参考的史料名称。'
            : '\n\nPlease answer in concise and clear language, appropriately citing key information from the historical materials. You may note the names of referenced historical materials at the end of your answer.';
        
        return prompt;
    },

    // 调用API
    async callAPI(systemPrompt, userMessage) {
        const baseUrl = this.apiBase[this.apiProvider];
        const url = `${baseUrl}/chat/completions`;
        
        const body = {
            model: this.apiModel,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
            ],
            temperature: 0.3,
            max_tokens: 1500
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || '';
    },

    // 添加消息
    addMessage(role, content) {
        const container = document.getElementById('chatMessages');
        const isUser = role === 'user';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user-message' : 'ai-message'}`;
        messageDiv.innerHTML = `
            <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
            <div class="message-bubble">
                <p>${this.escapeHtml(content).replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        container.appendChild(messageDiv);
        container.scrollTop = container.scrollHeight;
    },

    // 添加思考指示器
    addThinkingIndicator() {
        const container = document.getElementById('chatMessages');
        const id = 'thinking_' + Date.now();
        
        const indicatorDiv = document.createElement('div');
        indicatorDiv.className = 'chat-message ai-message';
        indicatorDiv.id = id;
        indicatorDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-bubble">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        container.appendChild(indicatorDiv);
        container.scrollTop = container.scrollHeight;
        
        return id;
    },

    // 移除思考指示器
    removeThinkingIndicator(id) {
        const indicator = document.getElementById(id);
        if (indicator) {
            indicator.remove();
        }
    },

    // HTML转义
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};
