
/**
 * Мобильный виджет SNS Welcome - Версия 3.0
 * Полное дублирование сайта для мобильных устройств
 */
(function() {
    'use strict';
    
    const WIDGET_CONFIG = {
        baseUrl: 'https://sns-welcome.vercel.app',
        containerId: 'sns-welcome-widget',
        background: '#111827',
        mobileBreakpoint: 768,
        loadingTimeout: 20000,
        retryAttempts: 3,
        retryDelay: 1000
    };

    // Создание оптимизированных стилей
    function createAdvancedMobileStyles() {
        const styles = `
            .sns-welcome-widget-container {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                height: 100dvh !important;
                margin: 0 !important;
                padding: 0 !important;
                background: ${WIDGET_CONFIG.background} !important;
                overflow: hidden !important;
                z-index: 2147483647 !important;
                display: flex !important;
                flex-direction: column !important;
                box-sizing: border-box !important;
                -webkit-font-smoothing: antialiased !important;
                -moz-osx-font-smoothing: grayscale !important;
            }
            
            .sns-welcome-widget-content {
                flex: 1 !important;
                width: 100% !important;
                height: 100% !important;
                background: ${WIDGET_CONFIG.background} !important;
                display: block !important;
                position: relative !important;
                overflow-y: auto !important;
                overflow-x: hidden !important;
                -webkit-overflow-scrolling: touch !important;
                overscroll-behavior: contain !important;
                box-sizing: border-box !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            
            .sns-welcome-widget-loading {
                position: absolute !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                color: #02a374 !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
                font-size: 16px !important;
                z-index: 10 !important;
                text-align: center !important;
                background: ${WIDGET_CONFIG.background} !important;
                padding: 30px !important;
                border-radius: 12px !important;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
            }
            
            .sns-welcome-widget-spinner {
                border: 3px solid #374151 !important;
                border-top: 3px solid #02a374 !important;
                border-radius: 50% !important;
                width: 40px !important;
                height: 40px !important;
                animation: sns-widget-spin 1s linear infinite !important;
                margin: 0 auto 15px !important;
            }
            
            @keyframes sns-widget-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Полное скрытие остального контента */
            body.sns-widget-active > *:not(#${WIDGET_CONFIG.containerId}) {
                display: none !important;
                visibility: hidden !important;
            }
            
            body.sns-widget-active {
                margin: 0 !important;
                padding: 0 !important;
                overflow: hidden !important;
                height: 100vh !important;
                height: 100dvh !important;
                max-height: 100vh !important;
                max-height: 100dvh !important;
                position: fixed !important;
                width: 100% !important;
                top: 0 !important;
                left: 0 !important;
                background: ${WIDGET_CONFIG.background} !important;
            }
            
            html.sns-widget-active {
                height: 100% !important;
                height: 100dvh !important;
                max-height: none !important;
                overflow: hidden !important;
                position: fixed !important;
                width: 100% !important;
                background: ${WIDGET_CONFIG.background} !important;
            }
            
            /* Стили для контента */
            .sns-welcome-widget-content * {
                box-sizing: border-box !important;
            }
            
            .sns-welcome-widget-content img {
                max-width: 100% !important;
                height: auto !important;
                display: block !important;
            }
            
            .sns-welcome-widget-content iframe {
                width: 100% !important;
                height: 100% !important;
                border: none !important;
                background: ${WIDGET_CONFIG.background} !important;
                display: block !important;
            }
            
            /* iOS Safari специфичные стили */
            @supports (-webkit-touch-callout: none) {
                .sns-welcome-widget-container {
                    height: 100vh !important;
                    height: -webkit-fill-available !important;
                    min-height: 100vh !important;
                    min-height: -webkit-fill-available !important;
                }
                
                .sns-welcome-widget-content {
                    height: 100% !important;
                    height: -webkit-fill-available !important;
                    min-height: 100vh !important;
                    min-height: -webkit-fill-available !important;
                    -webkit-overflow-scrolling: touch !important;
                    overflow-y: scroll !important;
                }
                
                body.sns-widget-active {
                    height: 100vh !important;
                    height: -webkit-fill-available !important;
                    min-height: 100vh !important;
                    min-height: -webkit-fill-available !important;
                }
                
                html.sns-widget-active {
                    height: 100vh !important;
                    height: -webkit-fill-available !important;
                    min-height: 100vh !important;
                    min-height: -webkit-fill-available !important;
                }
            }
            
            /* Мобильные медиа-запросы */
            @media screen and (max-width: ${WIDGET_CONFIG.mobileBreakpoint}px) {
                .sns-welcome-widget-container {
                    position: fixed !important;
                    inset: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    height: 100dvh !important;
                    min-height: 100vh !important;
                    min-height: 100dvh !important;
                }
                
                .sns-welcome-widget-content {
                    width: 100% !important;
                    height: 100% !important;
                    min-height: 100vh !important;
                    min-height: 100dvh !important;
                }
                
                body.sns-widget-active {
                    position: fixed !important;
                    inset: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    min-height: 100vh !important;
                    min-height: 100dvh !important;
                }
            }
            
            /* Убираем полосы прокрутки */
            .sns-welcome-widget-content::-webkit-scrollbar {
                width: 0px !important;
                background: transparent !important;
            }
            
            .sns-welcome-widget-content::-webkit-scrollbar-track {
                background: transparent !important;
            }
            
            .sns-welcome-widget-content::-webkit-scrollbar-thumb {
                background: transparent !important;
            }
            
            /* Анимации */
            .sns-welcome-widget-container.loading {
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            .sns-welcome-widget-container.loaded {
                opacity: 1;
            }
            
            /* Адаптивная типографика */
            .sns-welcome-widget-content {
                font-size: 16px !important;
                line-height: 1.5 !important;
            }
            
            @media screen and (max-width: 480px) {
                .sns-welcome-widget-content {
                    font-size: 14px !important;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        styleSheet.id = 'sns-widget-advanced-styles';
        document.head.appendChild(styleSheet);
    }

    // HTML структура виджета
    function createWidgetHTML() {
        return `
            <div class="sns-welcome-widget-container loading">
                <div class="sns-welcome-widget-loading">
                    <div class="sns-welcome-widget-spinner"></div>
                    <div>Загрузка Welcome курса...</div>
                    <div style="font-size: 12px; margin-top: 10px; opacity: 0.7;">
                        Подготавливаем контент для вашего устройства
                    </div>
                </div>
                <div class="sns-welcome-widget-content" id="sns-widget-content"></div>
            </div>
        `;
    }

    // Настройка viewport
    function setupAdvancedViewport() {
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            document.head.appendChild(viewportMeta);
        }
        
        window.SNSWelcomeWidget._originalViewport = viewportMeta.content;
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content, shrink-to-fit=no';
    }

    // Включение полноэкранного режима
    function enableAdvancedFullscreen() {
        document.documentElement.classList.add('sns-widget-active');
        document.body.classList.add('sns-widget-active');
        
        const originalStyles = {
            bodyOverflow: document.body.style.overflow,
            htmlOverflow: document.documentElement.style.overflow,
            bodyPosition: document.body.style.position,
            bodyHeight: document.body.style.height,
            bodyWidth: document.body.style.width,
            bodyTop: document.body.style.top,
            bodyLeft: document.body.style.left,
            bodyMargin: document.body.style.margin,
            bodyPadding: document.body.style.padding
        };
        
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.top = '0';
        document.body.style.left = '0';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        
        window.SNSWelcomeWidget._originalStyles = originalStyles;
        setupAdvancedViewport();
    }

    // Улучшенная загрузка контента
    async function loadAdvancedContent(container) {
        const loadingElement = container.querySelector('.sns-welcome-widget-loading');
        const contentElement = container.querySelector('.sns-welcome-widget-content');
        const containerEl = container.querySelector('.sns-welcome-widget-container');
        
        console.log('Начинаем улучшенную загрузку контента...');
        
        let attempts = 0;
        
        async function attemptLoad() {
            attempts++;
            console.log(`Попытка загрузки ${attempts}/${WIDGET_CONFIG.retryAttempts}`);
            
            try {
                if (loadingElement) {
                    loadingElement.style.display = 'block';
                }
                
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 15000);
                
                const response = await fetch(WIDGET_CONFIG.baseUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                        'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1 SNSWelcomeWidget/3.0',
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache'
                    },
                    mode: 'cors',
                    credentials: 'omit',
                    signal: controller.signal
                });
                
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                const html = await response.text();
                console.log('HTML получен, размер:', html.length, 'байт');
                
                if (!html || html.length < 100) {
                    throw new Error('Получен пустой или слишком короткий ответ');
                }
                
                const processedContent = await processCompleteContent(html);
                
                if (processedContent && processedContent.trim()) {
                    contentElement.innerHTML = processedContent;
                    console.log('Контент успешно обработан и вставлен');
                    
                    await injectCompleteAssets(html);
                    await initializeContentScripts(contentElement);
                    
                    finishLoading();
                    return true;
                } else {
                    throw new Error('Обработанный контент пуст');
                }
                
            } catch (error) {
                console.error(`Ошибка при попытке ${attempts}:`, error);
                
                if (attempts < WIDGET_CONFIG.retryAttempts) {
                    console.log(`Ожидание ${WIDGET_CONFIG.retryDelay}мс перед следующей попыткой...`);
                    await new Promise(resolve => setTimeout(resolve, WIDGET_CONFIG.retryDelay));
                    return attemptLoad();
                } else {
                    console.log('Все попытки исчерпаны, переключаемся на iframe...');
                    return loadFallbackIframe();
                }
            }
        }
        
        function loadFallbackIframe() {
            console.log('Загружаем fallback iframe...');
            
            contentElement.innerHTML = `
                <iframe 
                    src="${WIDGET_CONFIG.baseUrl}"
                    style="
                        width: 100% !important; 
                        height: 100% !important; 
                        border: none !important; 
                        background: ${WIDGET_CONFIG.background} !important; 
                        display: block !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    "
                    title="SNS Welcome Course"
                    allowfullscreen
                    allow="accelerometer; autoplay; camera; clipboard-read; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; payment; picture-in-picture; publickey-credentials-get; screen-wake-lock; web-share; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-downloads"
                    loading="eager"
                    referrerpolicy="strict-origin-when-cross-origin">
                </iframe>
            `;
            
            const iframe = contentElement.querySelector('iframe');
            if (iframe) {
                iframe.onload = () => {
                    console.log('Iframe загружен успешно');
                    finishLoading();
                };
                iframe.onerror = () => {
                    console.error('Ошибка загрузки iframe');
                    finishLoading();
                };
            }
            
            setTimeout(finishLoading, 5000);
        }
        
        function finishLoading() {
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
            
            if (containerEl) {
                containerEl.classList.remove('loading');
                containerEl.classList.add('loaded');
            }
            
            console.log('Загрузка завершена');
        }
        
        setTimeout(finishLoading, WIDGET_CONFIG.loadingTimeout);
        return attemptLoad();
    }

    // Полная обработка контента
    async function processCompleteContent(html) {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            if (!doc || !doc.body) {
                throw new Error('Невозможно разобрать HTML');
            }
            
            const body = doc.body;
            
            // Удаляем ненужные элементы
            const removeSelectors = [
                'script[src*="analytics"]',
                'script[src*="gtag"]',
                'script[src*="facebook"]',
                'script[src*="yandex"]',
                'noscript',
                '.hidden-mobile',
                '[style*="display: none"]'
            ];
            
            removeSelectors.forEach(selector => {
                const elements = body.querySelectorAll(selector);
                elements.forEach(el => el.remove());
            });
            
            // Оптимизируем изображения
            const images = body.querySelectorAll('img');
            images.forEach(img => {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                img.style.display = 'block';
                img.loading = 'lazy';
                if (!img.alt) img.alt = '';
            });
            
            // Оптимизируем ссылки
            const links = body.querySelectorAll('a');
            links.forEach(link => {
                if (link.href && !link.href.startsWith('#')) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            });
            
            // Добавляем мобильные стили
            const mobileStylesTag = document.createElement('style');
            mobileStylesTag.textContent = `
                * { 
                    box-sizing: border-box !important; 
                    -webkit-tap-highlight-color: transparent !important;
                }
                body { 
                    margin: 0 !important; 
                    padding: 0 !important;
                    overflow-x: hidden !important;
                }
                img { 
                    max-width: 100% !important; 
                    height: auto !important; 
                }
                .container, .row, .col { 
                    max-width: 100% !important; 
                }
            `;
            body.insertBefore(mobileStylesTag, body.firstChild);
            
            console.log('Контент обработан для мобильных устройств');
            return body.innerHTML;
            
        } catch (error) {
            console.error('Ошибка обработки контента:', error);
            return null;
        }
    }

    // Инжекция ресурсов
    async function injectCompleteAssets(html) {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Обрабатываем стили
            const styles = doc.querySelectorAll('style');
            styles.forEach((style, index) => {
                if (style.textContent && style.textContent.trim()) {
                    const newStyle = document.createElement('style');
                    newStyle.textContent = style.textContent;
                    newStyle.id = `sns-widget-style-${index}`;
                    document.head.appendChild(newStyle);
                }
            });
            
            // Обрабатываем внешние стили
            const links = doc.querySelectorAll('link[rel="stylesheet"]');
            links.forEach((link, index) => {
                if (link.href && !document.querySelector(`link[href="${link.href}"]`)) {
                    const newLink = document.createElement('link');
                    newLink.rel = 'stylesheet';
                    newLink.href = link.href;
                    newLink.id = `sns-widget-link-${index}`;
                    newLink.crossOrigin = 'anonymous';
                    document.head.appendChild(newLink);
                }
            });
            
            console.log('Ресурсы успешно инжектированы');
            
        } catch (error) {
            console.warn('Ошибка при инжекции ресурсов:', error);
        }
    }

    // Инициализация скриптов
    async function initializeContentScripts(contentElement) {
        const scripts = contentElement.querySelectorAll('script');
        console.log('Найдено скриптов для инициализации:', scripts.length);
        
        for (let i = 0; i < scripts.length; i++) {
            const script = scripts[i];
            try {
                if (script.src) {
                    await loadExternalScript(script.src);
                } else if (script.textContent && script.textContent.trim()) {
                    executeInlineScript(script.textContent);
                }
                
                await new Promise(resolve => setTimeout(resolve, 50));
                
            } catch (error) {
                console.warn(`Ошибка при инициализации скрипта ${i + 1}:`, error);
            }
        }
    }

    function loadExternalScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Не удалось загрузить скрипт: ${src}`));
            document.head.appendChild(script);
        });
    }

    function executeInlineScript(code) {
        try {
            const script = document.createElement('script');
            script.textContent = code;
            document.head.appendChild(script);
            document.head.removeChild(script);
        } catch (error) {
            console.warn('Ошибка выполнения inline скрипта:', error);
        }
    }

    // Основной класс виджета
    class AdvancedMobileWidget {
        constructor() {
            this.initialized = false;
            this.container = null;
        }
        
        async init() {
            if (this.initialized) {
                console.log('Виджет уже инициализирован');
                return;
            }
            
            console.log('Инициализация улучшенного мобильного виджета...');
            
            this.container = document.getElementById(WIDGET_CONFIG.containerId);
            if (!this.container) {
                console.error(`Контейнер с ID "${WIDGET_CONFIG.containerId}" не найден`);
                return;
            }
            
            try {
                createAdvancedMobileStyles();
                enableAdvancedFullscreen();
                this.container.innerHTML = createWidgetHTML();
                
                await loadAdvancedContent(this.container);
                this.setupAdvancedEventListeners();
                
                this.initialized = true;
                console.log('Улучшенный мобильный виджет успешно инициализирован');
                
            } catch (error) {
                console.error('Ошибка инициализации виджета:', error);
            }
        }
        
        setupAdvancedEventListeners() {
            if (this.container) {
                this.container.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                
                this.container.addEventListener('touchstart', (e) => {
                    e.stopPropagation();
                }, { passive: true });
            }
            
            // Обработка изменения ориентации
            const handleOrientationChange = () => {
                setTimeout(() => {
                    this.adjustForOrientation();
                }, 200);
            };
            
            window.addEventListener('orientationchange', handleOrientationChange);
            window.addEventListener('resize', handleOrientationChange);
            
            // Предотвращение случайного закрытия
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                }
            });
        }
        
        adjustForOrientation() {
            if (!this.container) return;
            
            const containerEl = this.container.querySelector('.sns-welcome-widget-container');
            const contentEl = this.container.querySelector('.sns-welcome-widget-content');
            
            if (containerEl && contentEl) {
                // Принудительно обновляем размеры
                containerEl.style.height = '100vh';
                containerEl.style.height = '100dvh';
                contentEl.style.height = '100%';
                
                // Прокручиваем в начало при изменении ориентации
                contentEl.scrollTop = 0;
                
                console.log('Виджет адаптирован под новую ориентацию');
            }
        }
        
        destroy() {
            if (!this.initialized) return;
            
            console.log('Закрытие улучшенного мобильного виджета...');
            
            // Восстанавливаем стили
            document.documentElement.classList.remove('sns-widget-active');
            document.body.classList.remove('sns-widget-active');
            
            if (window.SNSWelcomeWidget._originalStyles) {
                const styles = window.SNSWelcomeWidget._originalStyles;
                Object.keys(styles).forEach(key => {
                    const cssProperty = key.replace(/([A-Z])/g, '-$1').toLowerCase().replace('body-', '').replace('html-', '');
                    if (key.startsWith('body')) {
                        document.body.style[cssProperty] = styles[key] || '';
                    } else if (key.startsWith('html')) {
                        document.documentElement.style[cssProperty] = styles[key] || '';
                    }
                });
            }
            
            // Восстанавливаем viewport
            if (window.SNSWelcomeWidget._originalViewport) {
                const viewportMeta = document.querySelector('meta[name="viewport"]');
                if (viewportMeta) {
                    viewportMeta.content = window.SNSWelcomeWidget._originalViewport;
                }
            }
            
            // Очищаем контейнер
            if (this.container) {
                this.container.innerHTML = '';
            }
            
            // Удаляем добавленные стили
            const addedElements = document.querySelectorAll('#sns-widget-advanced-styles, [id^="sns-widget-style-"], [id^="sns-widget-link-"]');
            addedElements.forEach(el => el.remove());
            
            this.initialized = false;
            console.log('Улучшенный мобильный виджет закрыт');
        }
    }

    // Автоинициализация
    function autoInit() {
        const widget = new AdvancedMobileWidget();
        
        const initWidget = () => {
            widget.init().catch(error => {
                console.error('Ошибка автоинициализации:', error);
            });
        };
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initWidget);
        } else {
            initWidget();
        }
        
        // Глобальный интерфейс
        window.SNSWelcomeWidget = {
            init: () => widget.init(),
            destroy: () => widget.destroy(),
            config: WIDGET_CONFIG,
            widget: widget,
            version: '3.0'
        };
    }

    autoInit();
})();
