import './WindowContent.css'

function WindowContent({ type }) {
  const content = {
    about: (
      <div className="content-section">
        <h2>👨‍💻 Sobre Mí</h2>
        <p>
          Desarrollador web Jr especializado en crear soluciones dinámicas con React y tecnologías modernas. 
          Con experiencia comprobada en proyectos freelance para clientes reales, combino diseño atractivo 
          con código limpio y eficiente.
        </p>
        <p>
          Mi enfoque está en entregar experiencias de usuario excepcionales y sitios web que generen 
          resultados. Trabajo con HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js y SASS. 
          Me apasiona resolver problemas técnicos y transformar ideas en productos digitales funcionales.
        </p>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">📍 Ubicación:</span>
            <span className="info-value">Guadalajara, Jalisco, México</span>
          </div>
          <div className="info-item">
            <span className="info-label">💼 Rol:</span>
            <span className="info-value">Desarrollador Frontend Jr</span>
          </div>
          <div className="info-item">
            <span className="info-label">🚀 Disponibilidad:</span>
            <span className="info-value">Disponible inmediatamente</span>
          </div>
          <div className="info-item">
            <span className="info-label">🌐 Idiomas:</span>
            <span className="info-value">Español (Nativo), Inglés (Básico)</span>
          </div>
        </div>
      </div>
    ),
    projects: (
      <div className="content-section">
        <h2>📁 Mis Proyectos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🏢 Funeraria Hermosa Provincia</h3>
            <p>Sitio web profesional para servicios funerarios con diseño elegante, información de servicios, galería y sistema de contacto 24/7. Mejora en la presencia digital del negocio.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Responsive Design</span>
              <span>SEO</span>
            </div>
            <a href="https://www.funerariahermosaprovincia.com/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
          <div className="project-card">
            <h3>🧘 ALAIA Mi Bienestar</h3>
            <p>Plataforma de cursos online sobre bienestar emocional con sistema de usuarios, contenido multimedia y pasarela de pagos integrada.</p>
            <div className="project-tags">
              <span>WordPress</span>
              <span>E-Learning</span>
              <span>Payment Gateway</span>
            </div>
            <a href="http://alaiamibienestar.com/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
          <div className="project-card">
            <h3>💒 Invitación Digital Boda</h3>
            <p>Invitación de boda digital interactiva con animaciones elegantes y diseño personalizado para evento especial.</p>
            <div className="project-tags">
              <span>HTML/CSS</span>
              <span>JavaScript</span>
              <span>Animaciones</span>
            </div>
            <a href="https://bodamisaelylibni.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
          <div className="project-card">
            <h3>🎨 Separador de Colores CMYK</h3>
            <p>Aplicación web que procesa imágenes y separa canales CMYK para impresión profesional. Utiliza Canvas API para manipulación de píxeles y generación de PDFs exportables.</p>
            <div className="project-tags">
              <span>JavaScript</span>
              <span>Canvas API</span>
              <span>PDF.js</span>
            </div>
            <a href="https://separador-de-color-nahum.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
          <div className="project-card">
            <h3>🎸 GuitarLA E-commerce</h3>
            <p>Tienda online de guitarras con catálogo de productos, carrito de compras y diseño responsivo.</p>
            <div className="project-tags">
              <span>React</span>
              <span>E-commerce</span>
              <span>Responsive</span>
            </div>
            <a href="https://ngguitarla.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
          <div className="project-card">
            <h3>🎵 Festival de Música</h3>
            <p>Landing page para festival de música Techno & EDM con lineup de artistas, galería y venta de boletos.</p>
            <div className="project-tags">
              <span>HTML/CSS</span>
              <span>SASS</span>
              <span>JavaScript</span>
            </div>
            <a href="https://festival-de-musicaa.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">Ver Proyecto</a>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="content-section">
        <h2>⚡ Habilidades</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-list">
              <span className="skill-badge">React</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">HTML/CSS</span>
              <span className="skill-badge">SASS</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Vite</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend & CMS</h3>
            <div className="skill-list">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">WordPress</span>
              <span className="skill-badge">REST APIs</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Base de Datos</h3>
            <div className="skill-list">
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Firebase</span>
              <span className="skill-badge">Supabase</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Herramientas & Diseño</h3>
            <div className="skill-list">
              <span className="skill-badge">Git</span>
              <span className="skill-badge">Figma</span>
              <span className="skill-badge">Canvas API</span>
              <span className="skill-badge">Netlify</span>
            </div>
          </div>
        </div>

        {/* Sección de Certificados */}
        <div className="certificates-section">
          <h3>📜 Certificaciones</h3>
          <div className="certificates-grid">
            <a 
              href="/certificados/Desarrollador-Front-end.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>Desarrollador Front-end</span>
            </a>
            <a 
              href="/certificados/Introduccion-a-la-programacion.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>Introducción a la Programación</span>
            </a>
            <a 
              href="/certificados/Liderazgo.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>Liderazgo</span>
            </a>
            <a 
              href="/certificados/Curador-de-datos.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>Curador de Datos</span>
            </a>
            <a 
              href="/certificados/Finder.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>Finder</span>
            </a>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="content-section">
        <h2>📧 Contacto</h2>
        <p>¿Tienes un proyecto en mente o quieres trabajar juntos? ¡Contáctame!</p>
        <div className="contact-info-highlight">
          <p style={{ marginBottom: '1.5rem' }}>
            💡 <strong>Disponible para:</strong> Proyectos freelance, posiciones full-time y colaboraciones remotas
          </p>
        </div>
        
        {/* Botón de descarga de CV */}
        <div className="cv-download-section">
          <a 
            href="/cv/CV-Nahum-Gutierrez.pdf" 
            download="CV-Nahum-Emmanuel-Gutierrez.pdf"
            className="cv-download-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            <span>Descargar CV (PDF)</span>
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:nahumg2996@gmail.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>nahumg2996@gmail.com</span>
          </a>
          <a href="mailto:codexmx.dev@gmail.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>codexmx.dev@gmail.com</span>
          </a>
          <a href="https://github.com/nahum29" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/nahum-emmanuel-guti%C3%A9rrez-gonz%C3%A1lez-376741346/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://wa.me/523343749886" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💬</span>
            <span>WhatsApp: +52 334 374 9886</span>
          </a>
        </div>
      </div>
    )
  }

  return content[type] || <div>Contenido no disponible</div>
}

export default WindowContent
