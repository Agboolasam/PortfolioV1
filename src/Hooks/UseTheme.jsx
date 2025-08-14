
import { useState, useEffect } from "react";
const useThemeStatus = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("agb-theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDark);
            document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
        }
    }, [])

    const Toggletheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("agb-theme", newTheme)

    }

    return { isDarkMode, Toggletheme }

}

export default useThemeStatus;