import { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'
import './Taskbar.css'
function Taskbar({ windows, activeWindow, onWindowClick, onHome, motionEnabled, onToggleMotion }) {
  const { theme, toggleTheme } = useTheme()
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <nav className="taskbar" aria-label="Barra de tareas">
      <button className="start-button" onClick={onHome} aria-label="Mostrar escritorio" title="Mostrar escritorio"><span className="start-icon">N.</span></button>
      <div className="taskbar-windows">
        {windows.map(item => <button key={item.id}
          className={`taskbar-window ${activeWindow === item.id ? 'active' : ''} ${item.minimized ? 'minimized' : ''}`}
          aria-pressed={activeWindow === item.id} onClick={() => onWindowClick(item.id)}>{item.title}</button>)}
      </div>
      <div className="taskbar-tray">
        {onToggleMotion && <button className="theme-toggle" aria-pressed={motionEnabled} onClick={onToggleMotion}>{motionEnabled ? 'Pausar fondo' : 'Animar fondo'}</button>}
        <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span className="theme-tooltip">{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
        </button>
        <time className="tray-time" dateTime={currentTime.toISOString()}>{currentTime.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</time>
      </div>
    </nav>
  )
}
export default Taskbar
