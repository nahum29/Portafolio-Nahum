import { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'
import './Login.css'

function Login({ onLogin }) {
  const [time, setTime] = useState(new Date())
  const { theme, toggleTheme } = useTheme()
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <main className="windows-login">
      <div className="windows-wallpaper" aria-hidden="true" />
      <header className="login-topbar"><span className="brand-mark">N.</span><span>PORTAFOLIO PERSONAL</span>
        <button className="login-theme" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>{theme === 'dark' ? '☀' : '☾'}</button>
      </header>
      <section className="login-center">
        <div className="login-portrait"><img src="/images/nahum-perfil.jpg" alt="Nahum Emmanuel Gutiérrez" width="100" height="100" /></div>
        <span className="availability"><span aria-hidden="true" />Disponible para nuevos proyectos</span>
        <p className="login-eyebrow">HOLA, SOY NAHUM EMMANUEL</p>
        <h1>Diseño y código.<br /><span>Ideas hechas realidad.</span></h1>
        <p className="login-description">Desarrollador Frontend Jr en Tonalá, Jalisco.<br />Creo experiencias web con React, atención al detalle y propósito.</p>
        <div className="welcome-actions">
          <button className="primary-action" onClick={() => onLogin(null)}>Explorar portafolio <span aria-hidden="true">→</span></button>
          <button className="secondary-action" onClick={() => onLogin('projects')}>Ver proyectos ↗</button>
        </div>
        <a className="login-cv" href="/cv/CV-Nahum-Gutierrez.pdf" download>Descargar mi CV ↓</a>
      </section>
      <footer className="login-footer"><span>Tonalá, Jalisco</span><time dateTime={time.toISOString()}>{time.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</time></footer>
    </main>
  )
}
export default Login
