
# 🚀 Инструкция по встраиванию SNS Welcome Widget

## Быстрое встраивание

### Мобильная версия (рекомендуется)
```html
<div id="sns-welcome-widget"></div>
<script src="https://sns-welcome.vercel.app/widget-mobile-v3.min.js"></script>
```

### Универсальная версия
```html
<div id="sns-welcome-widget"></div>
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
```

## Платформы

### Tilda
1. Блок "HTML" → Вставить код → Сохранить

### WordPress  
1. Блок "Произвольный HTML" → Вставить код

### Joomla
1. Модуль "Custom HTML" → Вставить код

### Drupal
1. Блок "Basic" → Вставить код

## Настройки

### Свой ID контейнера
```html
<div id="my-widget"></div>
<script src="https://sns-welcome.vercel.app/widget-mobile-v3.min.js"></script>
<script>
  SNSWelcomeWidget.config.containerId = 'my-widget';
  SNSWelcomeWidget.init();
</script>
```

### Стилизация
```css
#sns-welcome-widget {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 12px;
}
```

## Поддержка
- **Браузеры:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Мобильные:** iOS Safari 12+, Android Chrome 60+
- **Размер:** ~15KB (сжатая версия)
- **Зависимости:** Отсутствуют

## Устранение неполадок
1. Проверьте консоль браузера (F12)
2. Убедитесь в наличии контейнера с правильным ID
3. Проверьте подключение к интернету

## Демо
Посмотреть работу виджета: https://sns-welcome.vercel.app/widget-embed.html
