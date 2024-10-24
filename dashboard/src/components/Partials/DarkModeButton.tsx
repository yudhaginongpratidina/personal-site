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
            <FaMoon size={20} />
        </button>
    );
}