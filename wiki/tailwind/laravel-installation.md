# LARAVEL INSTALLATION

Create your project

```bash
composer create-project laravel/laravel my-project
cd my-project
```

Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS `./resources/css/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process

```bash
npm run dev
```