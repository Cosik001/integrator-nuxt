# integrator-nuxt
# Integrator Nuxt3

Nuxt3 проект каталога интеграций, созданный на основе макета из Figma.

## Описание

Это полнофункциональное веб-приложение, которое отображает каталог интеграций с:
- Современный дизайн на основе макета Figma
- Адаптивный интерфейс (Mobile-first)
- Быстрая загрузка благодаря Nuxt3
- Простая навигация между интеграциями

## Технологии

- **Nuxt 3** - Vue framework нового поколения
- **Vue 3** - reactive framework
- **Tailwind CSS** - utility-first CSS framework
- **TypeScript** - strict typing

## Структура проекта

```
integrator-nuxt/
├── components/         # Vue компоненты
│   ├── Header.vue
│   ├── IntegrationCard.vue
│   └── ...
├── pages/             # Страницы (автоматическая маршрутизация)
│   ├── index.vue      # Главная страница
│   └── integration/
│       └── [id].vue   # Страница деталей интеграции
├── app.vue            # Root компонент
├── nuxt.config.ts     # Конфигурация Nuxt
└── package.json       # Зависимости
```

## Установка и запуск

### Требования
- Node.js >= 16.0
- npm или yarn

### Шаги установки

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Cosik001/integrator-nuxt.git
cd integrator-nuxt
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите dev-сервер:
```bash
npm run dev
```

4. Откройте http://localhost:3000 в браузере

## Сборка для production

```bash
npm run build
```

## Генерация статического сайта

```bash
npm run generate
```

Эта команда создаст папку `.output/public` с готовым для публикации статическим сайтом.

## Публикация на GitHub Pages

1. Отредактируйте `nuxt.config.ts` и установите `baseURL` на имя вашего репозитория
2. Выполните `npm run generate`
3. Загрузите содержимое папки `.output/public` в ветку `gh-pages`

Или используйте GitHub Actions для автоматической публикации.

## Особенности

- ✅ Отзывчивый дизайн
- ✅ Быстрая загрузка
- ✅ SEO-оптимизированный
- ✅ Легко расширяемая архитектура
- ✅ TypeScript поддержка

## Автор

[Cosik001](https://github.com/Cosik001)

## Лицензия

MIT
