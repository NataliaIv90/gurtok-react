# Task 1

## ЗАВДАННЯ
Розібратися, що таке Vite і стартанути Ваш перший React-проект!
## Вимоги:
+ Проєкт створений з використанням vite та yarn
+ Зробити простий Лічильник(counter)
+ Наявність кількох компонент
+ Наявність Reusable Component (кніпочка)
+ Не мутувати напряму стан (це скоріше підказка :wink:)
+ (optional) Можна трішки ускладнити задачу та написати наступну логіку: Like + Dislike (простими словами - ті самі каунтери)
+ (optional) за гарні стилі вам плюсик у карму
+ (optional) GitHub репо і ПР-и - зможемо вам поглянути і прокоментувати, якщо вам це цікаво)

## Scripts
+ dev: Starts the development server using Vite.
+ build: Compiles TypeScript and builds the application using Vite.
+ _lint: Runs ESLint on the ./src/ directory with custom configuration.
+ lint: Runs ESLint on the ./src/ directory.
+ lint:fix: Runs ESLint with the --fix flag on the ./src/ directory.
+ preview: Previews the production build locally using Vite.
+ format: Formats the codebase using Prettier.
+ format:fix: Formats the codebase and additional files using Prettier.
+ precommit: Runs format and lint scripts before committing changes.

-------------------------------------------------------------------

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
