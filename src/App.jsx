import { useState, useEffect } from 'react'
import Login from './components/Login'
import Desktop from './components/Desktop'
import MobileOS from './components/MobileOS'
import './App.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [initialSection, setInitialSection] = useState(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)
  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)')
    const change = () => setIsMobile(query.matches)
    query.addEventListener('change', change)
    return () => query.removeEventListener('change', change)
  }, [])
  const enter = (section) => { setInitialSection(section); setIsLoggedIn(true) }
  return isMobile ? <MobileOS /> : isLoggedIn ? <Desktop initialSection={initialSection} /> : <Login onLogin={enter} />
}
export default App
