import React, { createContext, useContext, useEffect, useState } from "react"

/**
 * @typedef {Object} ThemeProviderState
 * @property {string} theme
 * @property {(theme: string) => void} setTheme
 */

/** @type {ThemeProviderState} */
const initialState = {
    theme: "system",
    setTheme: (_theme) => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
    ...props
}) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(storageKey) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme) => { // Renamed argument to avoid conflict with state setter
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
