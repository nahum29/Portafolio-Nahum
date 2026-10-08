import { useEffect, useState } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import './Desktop.css'

const desktopIcons = [
  { id: 'about', title: 'Sobre mí', icon: '👨‍💻', content: 'about' },
  { id: 'projects', title: 'Proyectos', icon: '📁', content: 'projects' },
  { id: 'skills', title: 'Habilidades', icon: '⚡', content: 'skills' },
  { id: 'contact', title: 'Contacto', icon: '📧', content: 'contact' },
]
function fitWindow(item, viewport) {
  const width = Math.min(item.width, viewport.width - 32)
  const height = Math.min(item.height, viewport.height - 100)
  return { ...item, width, height,
    x: Math.max(8, Math.min(item.x, viewport.width - width - 8)),
    y: Math.max(8, Math.min(item.y, viewport.height - height - 76)) }
}
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const change = () => setReduced(query.matches)
    query.addEventListener('change', change)
    return () => query.removeEventListener('change', change)
  }, [])
  return reduced
}
function Desktop({ initialSection = null }) {
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }))
  const [windows, setWindows] = useState(() => {
    const section = desktopIcons.find(item => item.id === initialSection)
    return section ? [{ ...section, x: 160, y: 36, width: 880, height: 620, minimized: false }] : []
  })
  const [motionEnabled, setMotionEnabled] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const activeWindow = [...windows].reverse().find(item => !item.minimized)?.id
  useEffect(() => {
    const resize = () => setViewport({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  const focusWindow = (id) => setWindows(items => {
    const item = items.find(entry => entry.id === id)
    if (!item || (items.at(-1)?.id === id && !item.minimized)) return items
    return [...items.filter(entry => entry.id !== id), { ...item, minimized: false }]
  })
  const openWindow = (section) => setWindows(items => {
    const existing = items.find(item => item.id === section.id)
    return [...items.filter(item => item.id !== section.id), existing
      ? { ...existing, minimized: false }
      : { ...section, x: 160 + items.length * 24, y: 36 + items.length * 24, width: 880, height: 620, minimized: false }]
  })
  const updateWindow = (id, patch) => setWindows(items => items.map(item => item.id === id ? { ...item, ...patch } : item))
  return (
    <main className="desktop">
      {motionEnabled && !reducedMotion && <video className="desktop-background-video" autoPlay loop muted playsInline aria-hidden="true">
        <source src="/video/fondo-escritorio.mp4" type="video/mp4" />
      </video>}
      <nav className="desktop-icons" aria-label="Secciones del portafolio">
        {desktopIcons.map(item => <DesktopIcon key={item.id} {...item} onClick={() => openWindow(item)} />)}
      </nav>
      {windows.some(item => !item.minimized) && <h1 className="visually-hidden">Escritorio de Nahum — {windows.find(item => item.id === activeWindow)?.title}</h1>}
      <section className="desktop-welcome" aria-label="Bienvenida" hidden={windows.some(item => !item.minimized)}>
        <span className="eyebrow">EL ESPACIO DE NAHUM</span>
        <h1>Ideas que cobran<br />vida en la web.</h1>
        <p>Desarrollador Frontend Jr · Guadalajara, México</p>
        <div className="welcome-actions">
          <button className="primary-action" onClick={() => openWindow(desktopIcons[1])}>Explorar proyectos <span aria-hidden="true">↗</span></button>
          <a className="secondary-action" href="/cv/CV-Nahum-Gutierrez.pdf" download>Descargar CV ↓</a>
        </div>
        <span className="desktop-hint">Abre una sección y explora a tu ritmo.</span>
      </section>
      {windows.map((item, index) => {
        const fitted = fitWindow(item, viewport)
        const bounds = item.maximized ? { x: 8, y: 8, width: viewport.width - 16, height: viewport.height - 84 } : fitted
        return !item.minimized && <Window key={item.id} {...item} {...bounds} zIndex={10 + index}
          isActive={activeWindow === item.id}
          onClose={() => setWindows(items => items.filter(entry => entry.id !== item.id))}
          onMinimize={() => updateWindow(item.id, { minimized: true })}
          onMaximize={() => updateWindow(item.id, { maximized: !item.maximized })}
          onFocus={() => focusWindow(item.id)}
          onPositionChange={(x, y) => updateWindow(item.id, { x, y })} />
      })}
      <Taskbar windows={windows} activeWindow={activeWindow} onWindowClick={focusWindow}
        onHome={() => setWindows(items => items.map(item => ({ ...item, minimized: true })))}
        motionEnabled={motionEnabled} onToggleMotion={reducedMotion ? undefined : () => setMotionEnabled(value => !value)} />
    </main>
  )
}
export default Desktop
