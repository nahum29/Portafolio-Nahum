// `image` guarda la captura real (bytes) de cada proyecto: sin ella no hay reserva
// de espacio, así que `WindowContent` cae a la portada de texto del proyecto.
export const projects = [
  { id: 'alaia', title: 'ALAIA Mi Bienestar', category: 'Plataforma de cursos', icon: '🧘',
    problem: 'Ofrecer cursos de bienestar emocional en una plataforma digital.',
    solution: 'Plataforma en WordPress con usuarios, contenido multimedia y pagos integrados.',
    result: 'Una experiencia que reúne el acceso a cursos y la compra en línea.',
    tags: ['WordPress', 'E-learning', 'Pagos'], url: 'https://alaiamibienestar.com/',
    image: { src: '/images/projects/alaia.jpg', width: 1521, height: 667 } },
  { id: 'boda', title: 'Invitación de boda', category: 'Experiencia interactiva', icon: '💒',
    problem: 'Compartir los detalles de una boda con una invitación personalizada.',
    solution: 'Invitación digital con diseño a medida y animaciones.',
    result: 'Una invitación accesible desde el navegador y fácil de compartir con los invitados.',
    tags: ['HTML/CSS', 'JavaScript', 'Animaciones'], url: 'https://bodamisaelylibni.netlify.app/',
    image: { src: '/images/projects/boda.jpg', width: 1536, height: 674 } },
  { id: 'cmyk', title: 'Separador de colores CMYK', category: 'Herramienta web', icon: '🎨',
    problem: 'Separar los canales de color de una imagen para preparar trabajos de impresión.',
    solution: 'Procesamiento de píxeles con Canvas y exportación de separaciones.',
    result: 'Separación de canales CMYK desde una herramienta en el navegador.',
    tags: ['JavaScript', 'Canvas API', 'PDF'], url: 'https://separador-de-color-nahum.netlify.app/',
    image: { src: '/images/projects/cmyk.jpg', width: 1536, height: 674 } },
  { id: 'guitarla', title: 'GuitarLA', category: 'E-commerce', icon: '🎸',
    problem: 'Organizar un catálogo de guitarras y la selección de productos.',
    solution: 'Tienda en React con catálogo, carrito de compras y diseño adaptable.',
    result: 'Los visitantes pueden explorar instrumentos y gestionar su carrito.',
    tags: ['React', 'Carrito de compras', 'Responsive'], url: 'https://ngguitarla.netlify.app/',
    image: { src: '/images/projects/guitarla.jpg', width: 1521, height: 667 } },
  { id: 'festival', title: 'Festival de Música', category: 'Landing page', icon: '🎵',
    problem: 'Reunir la información de un festival de música en una sola página.',
    solution: 'Landing con artistas, galería e información de boletos.',
    result: 'Programa e información del evento organizados en una experiencia adaptable.',
    tags: ['HTML/CSS', 'SASS', 'JavaScript'], url: 'https://festival-de-musicaa.netlify.app/',
    image: { src: '/images/projects/festival.jpg', width: 1521, height: 667 } },
  { id: 'tiendita', title: 'Tiendita C.P.S', category: 'Sistema de punto de venta', icon: '🛒',
    problem: 'Apoyar la operación diaria de una tienda: ventas, inventario y créditos de clientes en un solo lugar.',
    solution: 'Aplicación en Next.js y TypeScript con panel, punto de venta, inventario y clientes conectados a Supabase.',
    result: 'Registro de ventas, control de inventario y seguimiento de créditos desde una interfaz en español.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    repo: 'https://github.com/nahum29/TienditaC.P.S' },
]
// Experiencia y formación: la misma información que el CV. Si cambias una fecha,
// cambia también `public/resume.json` y `public/cv/CV-Nahum-Gutierrez.pdf`.
export const experience = [
  { role: 'Desarrollador web independiente', org: 'ALAIA · Plataforma de cursos', period: '2024 – presente',
    type: 'Freelance', icon: '💼',
    highlights: [
      'Desarrollo con WordPress y Elementor Pro.',
      'Configuración de formularios, acceso de usuarios y pasarela de pagos.',
      'Configuración de alojamiento, dominio y licencias; orientación al cliente para administrar el sitio.',
    ] },
  { role: 'Soporte técnico de impresión', org: 'Grupo Rizo', period: '2023', type: 'Tiempo completo', icon: '🖥️',
    highlights: [
      'Configuración de impresoras empresariales por IP y de computadoras para acceder a ellas en red.',
      'Diagnóstico y solución de problemas de conexión e impresión en hoteles, notarías y oficinas gubernamentales.',
    ] },
]
export const education = [
  { title: 'Desarrollador Front-end', org: 'Fundación Carlos Slim', detail: '96 horas', period: '2025' },
  { title: 'Introducción a la Programación', org: 'Fundación Carlos Slim', detail: '28 horas', period: '2025' },
  { title: 'Secundaria', org: 'Escolaridad', detail: '', period: '' },
]
// Enlaces de código verificados con la API de GitHub el 8 de octubre de 2026.
// Solo `tiendita` añade `repo`: los demás proyectos no tienen repositorio público,
// así que no se publica ningún enlace que devuelva 404.
export const codeLinks = {
  portfolio: 'https://github.com/nahum29/Portafolio-Nahum',
}
export const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SASS', 'Next.js', 'Vite'] },
  { title: 'Backend y CMS', items: ['Node.js', 'WordPress', 'REST APIs'] },
  { title: 'Bases de datos', items: ['MongoDB', 'Firebase', 'Supabase'] },
  { title: 'Herramientas y diseño', items: ['Git', 'Figma', 'Canvas API', 'Netlify'] },
]
export const certificates = [
  ['Desarrollador Front-end', 'Desarrollador-Front-end.pdf'],
  ['Introducción a la Programación', 'Introduccion-a-la-programacion.pdf'],
  ['Liderazgo', 'Liderazgo.pdf'], ['Curador de Datos', 'Curador-de-datos.pdf'], ['Finder', 'Finder.pdf'],
]
export const contacts = [
  { label: 'Correo personal', text: 'nahumg2996@gmail.com', url: 'mailto:nahumg2996@gmail.com', icon: '✉' },
  { label: 'Correo Codex MX', text: 'codexmx.dev@gmail.com', url: 'mailto:codexmx.dev@gmail.com', icon: '✉' },
  { label: 'GitHub', text: '@nahum29', url: 'https://github.com/nahum29', icon: '⌘' },
  { label: 'LinkedIn', text: 'Nahum Emmanuel', url: 'https://www.linkedin.com/in/nahum-emmanuel-guti%C3%A9rrez-gonz%C3%A1lez-376741346/', icon: 'in' },
  { label: 'WhatsApp', text: '+52 322 330 6890', url: 'https://wa.me/523223306890', icon: '↗' },
]
