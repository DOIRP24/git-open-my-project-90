
# SNS Welcome Course Widget

Встраиваемый JavaScript виджет для интеграции Welcome курса ГК «СНС» в любые веб-платформы.

## 🚀 Быстрый старт

### Для Tilda

1. Добавьте блок **"HTML"** или **"Другое → HTML"**
2. Вставьте следующий код:

```html
<!-- Контейнер для виджета -->
<div id="sns-welcome-widget"></div>

<!-- Скрипт виджета -->
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
```

### Для других платформ

```html
<!-- Базовая интеграция -->
<div id="sns-welcome-widget"></div>
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
```

## 📋 Подробная инструкция

### 1. Tilda (рекомендуемый способ)

**Шаг 1:** Войдите в редактор Tilda
- Откройте нужную страницу в редакторе
- Нажмите кнопку **"+ Добавить блок"**

**Шаг 2:** Найдите блок HTML
- В поиске введите **"HTML"**
- Выберите блок **"Другое → HTML"** или **"T123 - HTML"**

**Шаг 3:** Вставьте код
```html
<div id="sns-welcome-widget"></div>
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
```

**Шаг 4:** Сохраните и опубликуйте
- Нажмите **"Сохранить"**
- Нажмите **"Опубликовать страницу"**

### 2. WordPress

**Для Gutenberg редактора:**
1. Добавьте блок **"Произвольный HTML"**
2. Вставьте код виджета

**Для классического редактора:**
1. Переключитесь в режим **"Текст"**
2. Вставьте код в нужное место

### 3. Другие CMS

**Joomla:**
- Используйте модуль **"Custom HTML"**

**Drupal:**
- Создайте блок с типом **"Basic"**

**Битрикс:**
- Используйте компонент **"HTML/PHP код"**

## ⚙️ Настройки и конфигурация

### Изменение ID контейнера

```html
<div id="my-custom-widget"></div>
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
<script>
  SNSWelcomeWidget.config.containerId = 'my-custom-widget';
  SNSWelcomeWidget.init();
</script>
```

### Ручная инициализация

```html
<div id="sns-welcome-widget"></div>
<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
<script>
  // Инициализация после загрузки страницы
  document.addEventListener('DOMContentLoaded', function() {
    SNSWelcomeWidget.init();
  });
</script>
```

### Множественные виджеты

```html
<!-- Первый виджет -->
<div id="widget-1"></div>

<!-- Второй виджет -->
<div id="widget-2"></div>

<script src="https://sns-welcome.vercel.app/widget.min.js"></script>
<script>
  // Первый виджет
  SNSWelcomeWidget.config.containerId = 'widget-1';
  SNSWelcomeWidget.init();
  
  // Второй виджет
  SNSWelcomeWidget.config.containerId = 'widget-2';
  SNSWelcomeWidget.init();
</script>
```

## 📱 Адаптивность

### Размеры виджета

- **Десктоп:** максимальная ширина 400px, минимальная высота 600px
- **Планшет:** адаптируется под ширину контейнера
- **Мобильный:** занимает всю ширину, высота на весь экран

### Настройка стилей

```html
<style>
  #sns-welcome-widget {
    max-width: 600px; /* Изменить максимальную ширину */
    margin: 0 auto;   /* Центрировать */
  }
</style>
```

## 🔧 Устранение неполадок

### Виджет не загружается

1. **Проверьте подключение к интернету**
2. **Убедитесь, что контейнер существует:**
   ```javascript
   console.log(document.getElementById('sns-welcome-widget'));
   ```
3. **Проверьте консоль браузера на ошибки** (F12 → Console)

### Виджет не отображается

1. **Проверьте ID контейнера** - должен быть `sns-welcome-widget`
2. **Убедитесь, что скрипт загрузился:**
   ```javascript
   console.log(typeof SNSWelcomeWidget);
   ```

### Проблемы с размерами

```css
/* Принудительно задать размеры */
#sns-welcome-widget {
  height: 600px !important;
  min-height: 600px !important;
}
```

## 🌐 Поддержка браузеров

### Полная поддержка
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Мобильные браузеры
- iOS Safari 12+
- Android Chrome 60+
- Samsung Internet 8+

## 📊 Технические характеристики

- **Размер:** ~3KB (минифицированная версия)
- **Зависимости:** Нет
- **Время загрузки:** ~200ms
- **Поддержка HTTPS:** Да
- **CDN:** Да

## 🔒 Безопасность

- Все запросы выполняются через HTTPS
- Нет сбора персональных данных
- Соответствует стандартам безопасности

## 📈 Аналитика

Виджет автоматически логирует:
- Успешную инициализацию
- Ошибки загрузки
- Время загрузки iframe

## 🆘 Поддержка

При возникновении проблем:

1. **Проверьте консоль браузера** (F12)
2. **Убедитесь в правильности кода**
3. **Проверьте работу демо:** https://sns-welcome.vercel.app/widget-demo.html

## 📝 Changelog

### v1.0.0
- Первый релиз виджета
- Поддержка адаптивного дизайна
- Индикатор загрузки
- Обработка ошибок
```
