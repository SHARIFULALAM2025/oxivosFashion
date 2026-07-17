"use client"

import { createContext, useContext, useEffect, useState } from "react"
const themeContext=createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        const saveTheme = localStorage.getItem("theme") || "light"
        setTheme(saveTheme)
        document.documentElement.classList.toggle("dark", saveTheme ==="dark" )
    }, [])
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>{ children}</themeContext.Provider>
    )
}
export { ThemeProvider }
export const useTheme = () => useContext(themeContext)