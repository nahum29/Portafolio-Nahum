import { motion } from 'framer-motion'
import { useState } from 'react'
import PhotoAvatar from './PhotoAvatar'
import './Login.css'

function Login({ onLogin }) {
  const [time, setTime] = useState(new Date())

  // Actualizar reloj cada minuto
  useState(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('es-MX', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="windows-login">
      {/* Wallpaper de fondo */}
      <div className="windows-wallpaper"></div>

      {/* Barra superior con hora y red */}
      <div className="windows-taskbar">
        <div className="taskbar-left">
          <div className="windows-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M0 0h9v9H0zM11 0h9v9h-9zM0 11h9v9H0zM11 11h9v9h-9z"/>
            </svg>
          </div>
        </div>
        <div className="taskbar-right">
          <div className="system-icons">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Contenedor central con usuario */}
      <div className="login-center">
        <motion.div 
          className="user-profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Avatar del usuario */}
          <motion.div 
            className="user-avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PhotoAvatar />
          </motion.div>

          {/* Nombre de usuario */}
          <motion.div 
            className="portfolio-title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h1 className="portfolio-title">
              {"Portafolio de Nahum".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="letter"
                  whileHover={{
                    scale: 1.3,
                    y: -10,
                    color: "#60a5fa",
                    textShadow: "0 0 20px rgba(96, 165, 250, 0.8)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Botón de inicio de sesión */}
          <motion.button 
            className="windows-login-button"
            onClick={onLogin}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Iniciar sesión</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Barra inferior con fecha y hora */}
      <motion.div 
        className="windows-bottom-bar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="datetime-widget">
          <div className="time">{formatTime(time)}</div>
          <div className="date">{formatDate(time)}</div>
        </div>
      </motion.div>

      {/* Botones de accesibilidad y apagado (esquina inferior) */}
      <div className="bottom-controls">
        <motion.button 
          className="control-btn"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        </motion.button>
        <motion.button 
          className="control-btn"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

export default Login
