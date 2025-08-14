import { createContext, useContext } from "react"
import useThemeStatus from "../Hooks/UseTheme"


const Theme = createContext()
const useTheme = () => useContext(Theme);
export const ThemeProvider = ({ children }) => {
    const { isDarkMode, Toggletheme } = useThemeStatus()
    return (
        <Theme.Provider value={{ isDarkMode, Toggletheme }}>
            {children}
        </Theme.Provider>
    )
}

export default useTheme;


