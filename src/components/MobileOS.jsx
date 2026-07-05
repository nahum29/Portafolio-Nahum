import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './MobileOS.css'

function MobileOS() {
  const { theme, toggleTheme } = useTheme()
  const [currentScreen, setCurrentScreen] = useState('home')
  const [openApp, setOpenApp] = useState(null)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const apps = [
    { id: 'about', name: 'Sobre Mí', icon: '👨‍💻', color: '#4285F4' },
    { id: 'projects', name: 'Proyectos', icon: '📁', color: '#34A853' },
    { id: 'skills', name: 'Habilidades', icon: '⚡', color: '#FBBC04' },
    { id: 'contact', name: 'Contacto', icon: '📧', color: '#EA4335' },
    { id: 'certificates', name: 'Certificados', icon: '📜', color: '#9C27B0' },
    { id: 'settings', name: 'Tema', icon: theme === 'dark' ? '🌙' : '☀️', color: '#607D8B' }
  ]

  const handleAppClick = (appId) => {
    if (appId === 'settings') {
      toggleTheme()
    } else {
      setOpenApp(appId)
    }
  }

  const handleBack = () => {
    setOpenApp(null)
  }

  return (
    <div className="mobile-os">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <span className="status-time">{time}</span>
        </div>
        <div className="status-right">
          <span className="status-icon">📶</span>
          <span className="status-icon">📡</span>
          <span className="status-icon">🔋</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!openApp ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home-screen"
          >
            {/* Header con foto */}
            <div className="mobile-header">
              <motion.div 
                className="mobile-avatar"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <img src="/images/nahum.jpg" alt="Nahum Emmanuel" />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Nahum Emmanuel
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Desarrollador Frontend Jr
              </motion.p>
            </div>

            {/* Apps Grid */}
            <div className="apps-grid">
              {apps.map((app, index) => (
                <motion.button
                  key={app.id}
                  className="app-icon"
                  onClick={() => handleAppClick(app.id)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--app-color': app.color }}
                >
                  <div className="app-icon-bg">
                    <span className="app-emoji">{app.icon}</span>
                  </div>
                  <span className="app-name">{app.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Navigation Bar */}
            <div className="nav-bar">
              <button className="nav-button">◁</button>
              <button className="nav-button nav-home">●</button>
              <button className="nav-button">▢</button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={openApp}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="app-screen"
          >
            <AppContent appId={openApp} onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function AppContent({ appId, onBack }) {
  const content = {
    about: (
      <>
        <h2>👨‍💻 Sobre Mí</h2>
        <div className="app-content">
          <p>
            Desarrollador web Jr especializado en crear soluciones dinámicas con React y tecnologías modernas.
          </p>
          <p>
            Con experiencia comprobada en proyectos freelance para clientes reales, combino diseño atractivo con código limpio y eficiente.
          </p>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <strong>Ubicación</strong>
                <p>Bahia de Banderas, Nayarit</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">💼</span>
              <div>
                <strong>Rol</strong>
                <p>Desarrollador Frontend Jr</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🚀</span>
              <div>
                <strong>Disponibilidad</strong>
                <p>Disponible inmediatamente</p>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    projects: (
      <>
        <h2>📁 Mis Proyectos</h2>
        <div className="app-content projects-list">
          <ProjectCard 
            title="Funeraria Hermosa Provincia"
            desc="Sitio web profesional con diseño elegante y sistema de contacto 24/7"
            tags={['React', 'SEO', 'Responsive']}
            link="https://www.funerariahermosaprovincia.com/"
          />
          <ProjectCard 
            title="ALAIA Mi Bienestar"
            desc="Plataforma de cursos online con WordPress y sistema de pagos"
            tags={['WordPress', 'E-learning']}
            link="https://alaiamibienestar.com/"
          />
          <ProjectCard 
            title="Invitación de Boda"
            desc="Invitación digital interactiva con animaciones y confirmación RSVP"
            tags={['React', 'Animaciones']}
            link="https://bodamisaelylibni.netlify.app/"
          />
          <ProjectCard 
            title="Separador CMYK"
            desc="Herramienta para separación de colores CMYK para diseñadores gráficos"
            tags={['JavaScript', 'Canvas']}
            link="https://separador-de-color-nahum.netlify.app/"
          />
        </div>
      </>
    ),
    skills: (
      <>
        <h2>⚡ Habilidades</h2>
        <div className="app-content">
          <div className="skill-section">
            <h3>Frontend</h3>
            <div className="skill-chips">
              <span className="chip">React</span>
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">HTML/CSS</span>
              <span className="chip">SASS</span>
              <span className="chip">Next.js</span>
            </div>
          </div>
          <div className="skill-section">
            <h3>Backend & Tools</h3>
            <div className="skill-chips">
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Firebase</span>
              <span className="chip">Supabase</span>
              <span className="chip">Git</span>
            </div>
          </div>
          <div className="skill-section">
            <h3>Design & Other</h3>
            <div className="skill-chips">
              <span className="chip">Figma</span>
              <span className="chip">WordPress</span>
              <span className="chip">Vite</span>
              <span className="chip">Netlify</span>
            </div>
          </div>
        </div>
      </>
    ),
    contact: (
      <>
        <h2>📧 Contacto</h2>
        <div className="app-content">
          <p className="contact-intro">¿Tienes un proyecto en mente? ¡Contáctame!</p>
          
          <a href="/cv/CV-Nahum-Gutierrez.pdf" download className="cv-button-mobile">
            📄 Descargar CV
          </a>

          <div className="contact-list">
            <a href="mailto:nahumg2996@gmail.com" className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email Personal</strong>
                <p>nahumg2996@gmail.com</p>
              </div>
            </a>
            <a href="mailto:codexmx.dev@gmail.com" className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email Profesional</strong>
                <p>codexmx.dev@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/nahum29" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <strong>GitHub</strong>
                <p>@nahum29</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nahum-emmanuel-guti%C3%A9rrez-gonz%C3%A1lez-376741346/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <p>Nahum Emmanuel</p>
              </div>
            </a>
            <a href="https://wa.me/523343749886" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+52 334 374 9886</p>
              </div>
            </a>
          </div>
        </div>
      </>
    ),
    certificates: (
      <>
        <h2>📜 Certificados</h2>
        <div className="app-content">
          <div className="certificates-list">
            <CertCard name="Desarrollador Front-end" file="Desarrollador-Front-end.pdf" />
            <CertCard name="Introducción a la Programación" file="Introduccion-a-la-programacion.pdf" />
            <CertCard name="Liderazgo" file="Liderazgo.pdf" />
            <CertCard name="Curador de Datos" file="Curador-de-datos.pdf" />
            <CertCard name="Finder" file="Finder.pdf" />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>
          ← Atrás
        </button>
      </div>
      {content[appId]}
    </div>
  )
}

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-mobile">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-tags-mobile">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </a>
  )
}

function CertCard({ name, file }) {
  return (
    <a href={`/certificados/${file}`} target="_blank" rel="noopener noreferrer" className="cert-card">
      <span className="cert-icon">📄</span>
      <span className="cert-name">{name}</span>
      <span className="cert-arrow">→</span>
    </a>
  )
}

export default MobileOS
