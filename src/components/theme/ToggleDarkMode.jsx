
import useTheme from "../../contexts/ThemeContext";
import "./Toggle.css"

const ToggleDarkMode = () => {
    const { isDarkMode, Toggletheme } = useTheme()

    return (
        <button
            className="theme-toggle"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={() => {
                Toggletheme()
            }}>
            <span className="theme-toggle-icon">
                {isDarkMode ? '☀️' : '🌙'}
            </span>
        </button>
    )
}

export default ToggleDarkMode
