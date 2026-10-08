import { useState, useEffect } from 'react'
import { ThemeContext } from './useTheme'
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage may be disabled. */ }
  }, [theme])
  const toggleTheme = () => setTheme(value => value === 'dark' ? 'light' : 'dark')
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
