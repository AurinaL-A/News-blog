# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# 📰 News Blog — тестовое задание

Одностраничное React-приложение новостного блога с фильтрацией по категориям, пагинацией и просмотром полной новости. Реализовано с использованием **React + TypeScript + Effector + React Router**.

---

## 📌 Функциональность

- Фильтрация новостей по категориям (спорт, история и др.)
- Переход к полному тексту новости
- Постраничная пагинация
- Использование Effector для управления состоянием
- Хранение данных в локальном JSON-файле

---

## 🚀 Как запустить

1. Клонировать репозиторий:


git clone https://github.com/твой-профиль/news-blog.git
cd news-blog


2. Установить зависимости:


npm install


3. Запустить проект:


npm start


Откроется в браузере по адресу `http://localhost:3000`

---

## 🛠 Используемые технологии

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Effector](https://effector.dev/)
- [React Router DOM](https://reactrouter.com/)

---

## 📁 Структура проекта


src/
├── app/           # Точка входа и маршруты
├── pages/         # Страницы (блог, пост)
├── widgets/       # Интерфейсные блоки: фильтр, список, пагинация
├── entities/      # UI карточки новости
├── data/          # JSON с новостями
├── types/         # Типы данных


---

## 📄 Пример данных

Файл `src/data/posts.json` содержит локальные данные с новостями. Пример:


{
  "id": 1,
  "title": "История Древнего Рима",
  "category": "history",
  "short": "Кратко о зарождении Римской империи...",
  "full": "Полный текст о Риме..."
}


---

## 🧑‍💻 Автор

Тестовое задание, выполненное [Твоё Имя] для компании **[Название компании]**