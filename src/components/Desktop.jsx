import { useEffect, useState } from 'react'
import Window from './Window'
import Taskbar from './Taskbar'
import DesktopIcon from './DesktopIcon'
import CommandPalette from './CommandPalette'
import { useTheme } from '../context/useTheme'
import { codeLinks } from '../data/portfolio'
import './Desktop.css'

const LINKEDIN_URL = 'https://www.linkedin.com/in/nahum-emmanuel-guti%C3%A9rrez-gonz%C3%A1lez-376741346/'

const desktopIcons = [
  { id: 'about', title: 'Sobre mí', icon: '👨‍💻', content: 'about' },
  { id: 'experience', title: 'Experiencia', icon: '💼', content: 'experience' },
  { id: 'projects', title: 'Proyectos', icon: '📁', content: 'projects' },
  { id: 'skills', title: 'Habilidades', icon: '⚡', content: 'skills' },
  { id: 'contact', title: 'Contacto', icon: '📧', content: 'contact' },
]
// Certificados es accesible desde la paleta aunque no tenga icono propio en el
// escritorio: en esa ventana ya aparece dentro de "Habilidades".
const paletteSections = [...desktopIcons, { id: 'certificates', title: 'Certificados', icon: '📜', content: 'certificates' }]
const projectsSection = desktopIcons.find(item => item.id === 'projects')
const CV_URL = '/cv/CV-Nahum-Gutierrez.pdf'
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
  const [paletteOpen, setPaletteOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
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
  const closeActiveWindow = () => { if (activeWindow) setWindows(items => items.filter(item => item.id !== activeWindow)) }
  const openExternal = (url) => window.open(url, '_blank', 'noopener,noreferrer')
  const downloadCv = () => {
    const link = document.createElement('a')
    link.href = CV_URL
    link.download = ''
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
  const copyEmail = () => navigator.clipboard?.writeText('nahumg2996@gmail.com')
  // Al cerrar la paleta el foco no puede quedarse en <body>: se devuelve al
  // contenido principal para que la navegación por teclado continúe ahí.
  const closePalette = () => {
    setPaletteOpen(false)
    requestAnimationFrame(() => document.getElementById('main-content')?.focus())
  }
  // Atajos globales: Ctrl/Cmd + K abre la paleta; Escape cierra la ventana activa.
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen(value => !value)
        return
      }
      if (event.key === 'Escape' && !paletteOpen && activeWindow) {
        event.preventDefault()
        closeActiveWindow()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })
  const commands = [
    ...paletteSections.map(section => ({
      id: `open-${section.id}`, icon: section.icon, label: `Abrir ${section.title}`, hint: 'Sección del portafolio',
      run: () => openWindow(section),
    })),
    { id: 'cv', icon: '📄', label: 'Descargar mi CV', hint: 'PDF de una página', run: downloadCv },
    { id: 'codigo', icon: '⌘', label: 'Ver el código de este portafolio', hint: 'github.com/nahum29/Portafolio-Nahum', run: () => openExternal(codeLinks.portfolio) },
    { id: 'whatsapp', icon: '✆', label: 'Escribirme por WhatsApp', hint: '+52 322 330 6890', run: () => openExternal('https://wa.me/523223306890') },
    { id: 'linkedin', icon: 'in', label: 'Abrir mi LinkedIn', hint: 'Perfil profesional', run: () => openExternal(LINKEDIN_URL) },
    { id: 'correo', icon: '✉', label: 'Copiar mi correo', hint: 'nahumg2996@gmail.com', run: copyEmail },
    { id: 'tema', icon: theme === 'dark' ? '☀' : '☾', label: theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro', hint: 'Apariencia', run: toggleTheme },
    { id: 'inicio', icon: '▣', label: 'Mostrar escritorio', hint: 'Minimizar todas las ventanas', run: () => setWindows(items => items.map(item => ({ ...item, minimized: true }))) },
  ]
  return (
    <>
    <a className="skip-link" href="#main-content">Saltar al contenido</a>
    <main className="desktop" id="main-content" tabIndex={-1}>
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
        <p>Desarrollador Frontend Jr · Tonalá, Jalisco</p>
        <div className="welcome-actions">
          <button className="primary-action" onClick={() => openWindow(projectsSection)}>Explorar proyectos <span aria-hidden="true">↗</span></button>
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
        motionEnabled={motionEnabled} onToggleMotion={reducedMotion ? undefined : () => setMotionEnabled(value => !value)}
        onOpenPalette={() => setPaletteOpen(true)} />
    </main>
    {paletteOpen && <CommandPalette commands={commands} onClose={closePalette} />}
    </>
  )
}
export default Desktop
