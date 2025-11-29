import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './Taskbar.css'

function Taskbar({ windows, activeWindow, onWindowClick }) {
  const { theme, toggleTheme } = useTheme()
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className="taskbar"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="taskbar-start">
        <motion.button 
          className="start-button"
          animate={{ 
            background: [
              'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)',
              'linear-gradient(135deg, #00d4ff 0%, #0080ff 100%)',
              'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)'
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <motion.span 
            className="start-icon"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            N
          </motion.span>
        </motion.button>
      </div>

      <div className="taskbar-windows">
        {windows.map(window => (
          <button
            key={window.id}
            className={`taskbar-window ${activeWindow === window.id ? 'active' : ''} ${window.minimized ? 'minimized' : ''}`}
            onClick={() => onWindowClick(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>

      <div className="taskbar-tray">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <span className="theme-tooltip">
            {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          </span>
        </button>
        <div className="tray-time">{currentTime}</div>
      </div>
    </motion.div>
  )
}

export default Taskbar
