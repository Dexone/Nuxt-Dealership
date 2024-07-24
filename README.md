### Пэт-проект дилерского центра

- [Демо](http://79.174.95.150/cars/1) размещено на VDS (Nginx + PM2)
- Взаимодействие с бэком на отдельном сервере
- Адаптивная верстка с использованием Tailwind CSS
- Сохраняемый local storage с использованием библиотеки управления состояниями Pinia
- Авторизация (Регистрация, аутинтификация, смена пароля, удаление аккаунта)
- Корзина (Добавление, удаление, изменение, счетчик количества и суммы)
- Избранное (Добавление, удаление)
- Карточка товара с прокручивающимися фото
- Пагинация с изменением адреса (Vue router)

Установка зависимостей:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Компиляция и запуск сервера разработки `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

Компиляция и минимизация для продакшена:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Локальная предварительная версия рабочей сборки:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```