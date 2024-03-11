# Инструкция по запуску проекта

## Требования

- Node.js установлен на вашем компьютере. Вы можете загрузить его с официального сайта (<https://nodejs.org/en>)

## Установка

1. Склонируйте репозиторий на свой компьютер:
git clone <https://github.com/nessipenko/automotive_next.js>

2. Перейдите в папку с проектом:
cd automotive_next.js

3. Установите зависимости с помощью npm:
npm i

## Запуск проекта

После установки зависимостей, вы можете запустить проект:

npm run dev

Эта команда запустит локальный сервер для разработки. Откройте ваш браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000/auto), чтобы увидеть ваше приложение.

## Дополнительные команды

- `npm run build` - создает оптимизированные файлы сборки для проекта.
- `npm start` - запускает проект в рабочем режиме после создания сборки.

Если у вас установлена несовместимая с [Next.js] версия Node.js, то вы можете проверить текущую версию Node.js, запустив следующую команду в терминале:

node -v

Если ваша текущая версия Node.js ниже требуемой для Next.js, вам необходимо обновить версию.

Для Windows:
Используя инструмент управления версиями Node.js:

npm install -g npm-windows-upgrade
npm-windows-upgrade

Используя скачивание и установку с официального сайта Node.js:

Скачайте последнюю версию Node.js с официального сайта. Затем запустите загруженный установочный файл и следуйте инструкциям установщика.
(<https://nodejs.org/en>)

Для macOS:
Используя Homebrew:

brew update
brew upgrade node

Используя NPM:

npm install -g npm

Эта команда установит последнюю версию Node.js. Если вы хотите установить конкретную версию, замените node на желаемую версию, например:

nvm install 14.17.5

-------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
