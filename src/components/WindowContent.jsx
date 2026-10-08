import { projects, skills, certificates, contacts } from '../data/portfolio'
import './WindowContent.css'

function Certificates() {
  return <div className="certificates-grid">{certificates.map(([name, file]) =>
    <a key={file} href={`/certificados/${file}`} target="_blank" rel="noopener noreferrer" className="certificate-link"
      aria-label={`${name} (PDF, nueva pestaña)`}>
      <span aria-hidden="true">↗</span><span>{name}<small>Ver certificado · PDF</small></span>
    </a>)}</div>
}
function WindowContent({ type }) {
  if (type === 'projects') return <section className="content-section">
    <span className="section-eyebrow">DEL CONCEPTO A LA WEB</span>
    <h2>Proyectos seleccionados<span className="section-count">{projects.length}</span></h2>
    <p>Sitios, herramientas y experiencias desarrollados íntegramente por mí.</p>
    <div className="projects-grid">{projects.map((project, index) =>
      <article className="project-card" key={project.id}>
        <div className="project-preview">
          {project.image && <img src={project.image.src} alt={`Captura de ${project.title}`} loading="lazy"
            width={project.image.width} height={project.image.height}
            onError={event => { event.currentTarget.hidden = true }} />}
          <span className="project-preview-fallback" aria-hidden="true"><span>{project.icon}</span>{!project.image && <small>{project.title}</small>}</span>
        </div>
        <div className="project-body">
          <div className="project-meta"><span>{project.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
          <h3>{project.title}</h3>
          <p>{project.problem}</p>
          <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <details className="project-details"><summary>Mi trabajo y resultado</summary>
            <dl><dt>Mi aportación</dt><dd>Desarrollo completo. {project.solution}</dd><dt>Resultado</dt><dd>{project.result}</dd></dl>
          </details>
          <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.title} (nueva pestaña)`}>Visitar proyecto <span aria-hidden="true">↗</span></a>
        </div>
      </article>)}</div>
  </section>
  if (type === 'about') return <section className="content-section">
    <span className="section-eyebrow">UN POCO SOBRE MÍ</span><h2>Hola, soy Nahum.</h2>
    <div className="about-intro"><img src="/images/nahum-perfil.jpg" alt="Nahum Emmanuel" width="88" height="88" />
      <p>Desarrollador Frontend Jr en Tonalá, Jalisco. Transformo ideas en sitios y herramientas web, con experiencia en proyectos freelance para clientes reales.</p></div>
    <p>Trabajo con React, JavaScript y tecnologías web modernas. Me interesa resolver problemas concretos, cuidar la experiencia de quien usa mis proyectos y seguir aprendiendo en cada entrega.</p>
    <div className="info-grid">
      {[['Ubicación', 'Tonalá, Jalisco, México'], ['Rol', 'Desarrollador Frontend Jr'], ['Disponibilidad', 'Disponible inmediatamente'], ['Idiomas', 'Español nativo · Inglés básico']].map(([label, value]) =>
        <div className="info-item" key={label}><span className="info-label">{label}</span><span className="info-value">{value}</span></div>)}
    </div>
    <a href="/cv/CV-Nahum-Gutierrez.pdf" download className="cv-download-button">Descargar CV ↓</a>
  </section>
  if (type === 'skills') return <section className="content-section">
    <span className="section-eyebrow">MI CAJA DE HERRAMIENTAS</span><h2>Habilidades</h2>
    <p>Tecnologías con las que doy forma a mis proyectos.</p>
    <div className="skills-container">{skills.map(group => <div className="skill-category" key={group.title}>
      <h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span className="skill-badge" key={item}>{item}</span>)}</div>
    </div>)}</div>
    <div className="certificates-section"><h3>Formación y certificados</h3><Certificates /></div>
  </section>
  if (type === 'certificates') return <section className="content-section">
    <span className="section-eyebrow">APRENDIZAJE CONTINUO</span><h2>Certificados</h2><Certificates />
  </section>
  if (type === 'contact') return <section className="content-section">
    <span className="section-eyebrow">CONSTRUYAMOS ALGO JUNTOS</span><h2>Hablemos de tu proyecto.</h2>
    <p>Disponible para proyectos freelance, posiciones de tiempo completo y colaboraciones remotas.</p>
    <a href="/cv/CV-Nahum-Gutierrez.pdf" download className="cv-download-button">Descargar CV (PDF) ↓</a>
    <div className="contact-links">{contacts.map(contact => <a key={contact.label} className="contact-link" href={contact.url}
      {...(contact.url.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${contact.label}: ${contact.text} (nueva pestaña)` } : {})}>
      <span className="contact-icon" aria-hidden="true">{contact.icon}</span><span><strong>{contact.label}</strong><span>{contact.text}</span></span><span aria-hidden="true" className="contact-arrow">↗</span>
    </a>)}</div>
  </section>
  return <p>Contenido no disponible.</p>
}
export default WindowContent
