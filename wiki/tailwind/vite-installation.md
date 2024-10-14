# VITE INSTALLATION

Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
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

Add the Tailwind directives to your CSS `./src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process

```bash
npm run dev
```