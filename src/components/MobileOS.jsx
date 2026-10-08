import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/useTheme'
import WindowContent from './WindowContent'
import './MobileOS.css'
const apps = [
  { id: 'about', name: 'Sobre mí', icon: '👨‍💻', color: '#527cc2' },
  { id: 'experience', name: 'Experiencia', icon: '💼', color: '#4f7f6d' },
  { id: 'projects', name: 'Proyectos', icon: '📁', color: '#408674' },
  { id: 'skills', name: 'Habilidades', icon: '⚡', color: '#a17a36' },
  { id: 'contact', name: 'Contacto', icon: '📧', color: '#9d5964' },
  { id: 'certificates', name: 'Certificados', icon: '📜', color: '#7c609f' },
]
function MobileOS() {
  const { theme, toggleTheme } = useTheme()
  const [openApp, setOpenApp] = useState(null)
  const [time, setTime] = useState(new Date())
  const headerRef = useRef(null)
  const openerRef = useRef(null)
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => { if (openApp) headerRef.current?.focus() }, [openApp])
  const open = (id, focusKey = id) => { openerRef.current = focusKey; setOpenApp(id) }
  const home = () => {
    setOpenApp(null)
    requestAnimationFrame(() => {
      const opener = document.querySelector(`[data-focus-key="${openerRef.current}"]`)
        || document.querySelector('[data-focus-key="nav-home"]')
      opener?.focus()
    })
  }
  return <main className="mobile-os">
    <header className="status-bar"><span><time dateTime={time.toISOString()}>{time.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</time></span><span>Nahum · Portfolio</span></header>
    {!openApp ? <section className="home-screen">
      <div className="mobile-header">
        <img className="mobile-avatar" src="/images/nahum-perfil.jpg" alt="Nahum Emmanuel" width="88" height="88" />
        <p className="mobile-eyebrow">DISEÑO + DESARROLLO</p><h1>Nahum Emmanuel</h1>
        <p>Desarrollador Frontend Jr</p>
        <span className="mobile-location">Tonalá, Jalisco</span>
        <div className="mobile-actions"><button className="primary-action" data-focus-key="hero-projects" onClick={() => open('projects')}>Ver proyectos ↗</button><a href="/cv/CV-Nahum-Gutierrez.pdf" download className="secondary-action">CV ↓</a></div>
      </div>
      <div className="mobile-apps-section"><p className="apps-label">EXPLORA MI ESPACIO</p>
        <nav className="apps-grid" aria-label="Secciones del portafolio">
          {apps.map(app => <button className="app-icon" key={app.id} data-focus-key={app.id} onClick={() => open(app.id)} style={{ '--app-color': app.color }}>
            <span className="app-icon-bg" aria-hidden="true">{app.icon}</span><span className="app-name">{app.name}</span>
          </button>)}
          <button className="app-icon" onClick={toggleTheme} style={{ '--app-color': '#53657c' }} aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
            <span className="app-icon-bg" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span className="app-name">{theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}</span>
          </button>
        </nav>
      </div>
    </section> : <section className="app-screen">
      <header className="app-header"><button onClick={home} aria-label="Volver al inicio">←</button><h1 ref={headerRef} tabIndex={-1}>{apps.find(app => app.id === openApp)?.name}</h1></header>
      <div className="mobile-content" key={openApp}><WindowContent type={openApp} /></div>
    </section>}
    <nav className="nav-bar" aria-label="Navegación móvil">
      <button onClick={home} disabled={!openApp} aria-label="Atrás">◁</button>
      <button onClick={home} data-focus-key="nav-home" aria-label="Inicio">●</button>
      <button onClick={() => open('projects', 'nav-projects')} data-focus-key="nav-projects" aria-label="Abrir proyectos">▢</button>
    </nav>
  </main>
}
export default MobileOS
