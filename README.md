# 💼 Portfolio Personal - Nahum Emmanuel Gutiérrez González

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)](https://portfolio-nahum.netlify.app)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> Portfolio interactivo con interfaz estilo Windows 11, presentando proyectos reales y habilidades de desarrollo web.

## 🌟 Características Principales

- **🖥️ Interfaz tipo Windows 11**: Experiencia de usuario única con login screen auténtico
- **🎨 Animaciones Fluidas**: Implementadas con Framer Motion para transiciones suaves
- **📱 Totalmente Responsivo**: Diseño adaptable a cualquier dispositivo
- **🎬 Fondos Dinámicos**: Video de fondo en desktop, imagen en login
- **🪟 Sistema de Ventanas**: Manejo de múltiples ventanas con drag & drop
- **✨ Efectos Visuales Modernos**: Glassmorphism, gradientes neón, y más

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca principal de UI
- **Vite 7.2.4** - Build tool y dev server
- **Framer Motion 12.23** - Librería de animaciones
- **CSS3** - Estilos personalizados con efectos avanzados

### Herramientas de Desarrollo
- **ESLint** - Linting y calidad de código
- **Git** - Control de versiones
- **Netlify** - Deployment y hosting

## 📦 Instalación

### Prerrequisitos
- Node.js v18 o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/nahum29/portfolio-nahum.git
cd portfolio-nahum
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en navegador**
```
http://localhost:5173
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Genera build de producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta linter
npm test         # Ejecuta tests unitarios
```

## 📂 Estructura del Proyecto

```
portfolio-nahum/
├── public/
│   ├── images/          # Imágenes estáticas
│   │   ├── nahum.jpeg
│   │   └── fondo-inicio.jpg
│   └── video/           # Videos de fondo
│       └── fondo-escritorio.mp4
├── src/
│   ├── components/      # Componentes React
│   │   ├── Login.jsx
│   │   ├── Desktop.jsx
│   │   ├── Window.jsx
│   │   ├── Taskbar.jsx
│   │   ├── PhotoAvatar.jsx
│   │   └── WindowContent.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características Técnicas

### Sistema de Ventanas
- **Drag & Drop**: Ventanas arrastrables con límites de pantalla
- **Minimizar/Cerrar**: Control completo de estado de ventanas
- **Z-Index Management**: Sistema de foco automático
- **Persistencia de posición**: Las ventanas recuerdan su ubicación

### Animaciones
- **Login Screen**: Entrada secuencial de elementos con delays
- **Letras interactivas**: Texto que reacciona al hover con efectos 3D
- **Transiciones suaves**: Entre estados y componentes
- **Rotación continua**: Logo animado con gradientes neón

### Optimizaciones
- **Code Splitting**: Carga optimizada de componentes
- **Lazy Loading**: Imágenes y recursos bajo demanda
- **CSS Optimizado**: Uso de transformaciones GPU
- **Video sin controles**: Fondo de video imperceptible para el usuario

## 📊 Performance Metrics

### Lighthouse Scores
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 90+
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 90+

### Optimizaciones Aplicadas
- ✅ Minificación de assets
- ✅ Compresión de imágenes
- ✅ Lazy loading de componentes
- ✅ Cache de recursos estáticos

## 🌐 Deployment

El proyecto está desplegado en **Netlify** con continuous deployment desde GitHub.

### Build de Producción
```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

## 👨‍💻 Sobre el Desarrollador

**Nahum Emmanuel Gutiérrez González**
- 📍 Guadalajara, Jalisco, México
- 💼 Desarrollador Frontend Jr
- 🚀 Especializado en React y tecnologías modernas

### Contacto
- 📧 Email: nahumg2996@gmail.com / codexmx.dev@gmail.com
- 🐙 GitHub: [@nahum29](https://github.com/nahum29)
- 💼 LinkedIn: [Nahum Emmanuel](https://www.linkedin.com/in/nahum-emmanuel-guti%C3%A9rrez-gonz%C3%A1lez-376741346/)
- 💬 WhatsApp: +52 334 374 9886

## 📝 Proyectos Destacados

1. **Funeraria Hermosa Provincia** - Sitio corporativo profesional
2. **ALAIA Mi Bienestar** - Plataforma de cursos online
3. **Separador CMYK** - Herramienta para diseño gráfico
4. **GuitarLA** - E-commerce de instrumentos musicales

[Ver todos los proyectos →](https://portfolio-nahum.netlify.app)

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias de mejora:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 🙏 Agradecimientos

- Inspiración de diseño: [dustinbrett.com](https://dustinbrett.com)
- Animaciones: Framer Motion
- Iconografía: SVG personalizado

---

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub

**Desarrollado con ❤️ por Nahum Emmanuel**
