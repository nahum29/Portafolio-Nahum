import { useState } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import './Desktop.css'

function Desktop() {
  const [windows, setWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)

  const openWindow = (id, title, content) => {
    const existingWindow = windows.find(w => w.id === id)
    if (existingWindow) {
      setActiveWindow(id)
      return
    }

    const newWindow = {
      id,
      title,
      content,
      x: 100 + windows.length * 30,
      y: 50 + windows.length * 30,
      width: 800,
      height: 600,
      minimized: false
    }
    setWindows([...windows, newWindow])
    setActiveWindow(id)
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
    if (activeWindow === id) {
      setActiveWindow(windows.length > 1 ? windows[windows.length - 2].id : null)
    }
  }

  const minimizeWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, minimized: true } : w
    ))
    setActiveWindow(null)
  }

  const restoreWindow = (id) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, minimized: false } : w
    ))
    setActiveWindow(id)
  }

  const updateWindowPosition = (id, x, y) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, x, y } : w
    ))
  }

  const desktopIcons = [
    { id: 'about', title: 'Sobre Mí', icon: '👨‍💻', content: 'about' },
    { id: 'projects', title: 'Proyectos', icon: '📁', content: 'projects' },
    { id: 'skills', title: 'Habilidades', icon: '⚡', content: 'skills' },
    { id: 'contact', title: 'Contacto', icon: '📧', content: 'contact' },
  ]

  return (
    <div className="desktop">
      {/* Video de fondo */}
      <video 
        className="desktop-background-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/video/fondo-escritorio.mp4" type="video/mp4" />
      </video>

      <div className="desktop-icons">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={icon.id}
            {...icon}
            onClick={() => openWindow(icon.id, icon.title, icon.content)}
            index={index}
          />
        ))}
      </div>

      {windows.map(window => (
        !window.minimized && (
          <Window
            key={window.id}
            {...window}
            isActive={activeWindow === window.id}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => setActiveWindow(window.id)}
            onPositionChange={(x, y) => updateWindowPosition(window.id, x, y)}
          />
        )
      ))}

      <Taskbar 
        windows={windows}
        activeWindow={activeWindow}
        onWindowClick={(id) => {
          const window = windows.find(w => w.id === id)
          if (window.minimized) {
            restoreWindow(id)
          } else {
            setActiveWindow(id)
          }
        }}
      />
    </div>
  )
}

export default Desktop
