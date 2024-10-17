# TAILWIND INSTALLATION - VITE

## CREATE YOUR PROJECT

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

## INSTALL TAILWIND CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## CONFIG YOUR TEMPLATE PATHS

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## ADD TAILWIND DIRECTIVE

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## START YOUR BUILD PROCESS

```bash
npm run dev
```