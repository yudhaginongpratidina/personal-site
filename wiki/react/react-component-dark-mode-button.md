# REACT COMPONENT - DARK MODE BUTTON

add class `dark` on html

```html
<!doctype html>
<html lang="en" class="dark">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
</head>

<body>
    <div id="root"></div>
    <script type="module" src="/src/App.tsx"></script>
</body>

</html>
```

add config darkmode on `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem'
            },
        },
        extend: {},
    },
    plugins: [],
}
```

make component `DarkModeButton.tsx` or `DarkModeButton.jsx`

```tsx
// LIBS
import { useState, useEffect } from "react";

// ICON
import { FaMoon } from "react-icons/fa";

// DARK MODE BUTTON
export default function DarkModeButton() {

    // STATE
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // HANDLER
    const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
            setIsDarkMode(false);
        }
    };

    // EFFECT
    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme');
        if (localStorageTheme === 'dark' || (!localStorageTheme && window.matchMedia('(prefers-color-scheme: default)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    // RENDER
    return (
        <button onClick={toggleDarkMode} className={`border border-gray-500 rounded p-1 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <FaMoon size={24} />
        </button>
    );
}
```

implemnt `Dark Mode`

```tsx
<Navbar fixed={true} container={true} className="bg-white dark:bg-black" >
    ....
</Navbar>
```