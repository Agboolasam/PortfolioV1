import { useState, useEffect } from "react";
import "./Toggle.css"

const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDark);
            document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
        }
    }, [])

    return (
        <button
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={() => {
                const newTheme = isDarkMode ? "light" : "dark";
                setIsDarkMode(!isDarkMode);

                document.documentElement.setAttribute("data-theme", newTheme);


            }}>
            <span className="theme-toggle-icon">
                {isDarkMode ? '☀️' : '🌙'}
            </span>
        </button>
    )
}

export default ToggleDarkMode
