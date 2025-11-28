# Documentación Técnica - Portfolio Nahum

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes

```
App.jsx
├── Login (Pantalla de inicio)
│   └── PhotoAvatar (Avatar con animaciones)
└── Desktop (Escritorio principal)
    ├── DesktopIcon[] (Iconos arrastrables)
    ├── Window[] (Sistema de ventanas)
    │   └── WindowContent (Contenido dinámico)
    └── Taskbar (Barra de tareas)
```

## 🔧 Componentes Principales

### 1. App.jsx
- Maneja el estado global de la aplicación
- Controla la transición entre Login y Desktop
- Gestiona el array de ventanas abiertas

### 2. Login.jsx
- Pantalla de bienvenida estilo Windows 11
- Animaciones de entrada con Framer Motion
- Fondo estático con imagen
- Componente PhotoAvatar integrado

### 3. Desktop.jsx
- Contenedor principal del sistema de ventanas
- Video de fondo con autoplay y loop
- Grid de iconos arrastrables
- Gestión del z-index de ventanas

### 4. Window.jsx
- Ventanas draggables con react-draggable
- Sistema de minimizar/cerrar
- Control de foco (z-index)
- Límites de arrastre (bounds)

### 5. Taskbar.jsx
- Barra inferior estilo Windows 11
- Botón de inicio animado (logo N)
- Lista de ventanas activas
- Reloj en tiempo real
- Toggle de tema (dark/light)

### 6. WindowContent.jsx
- Contenido dinámico según tipo de ventana
- Secciones: Sobre Mí, Proyectos, Habilidades, Contacto
- Certificados con links a PDFs
- Botón de descarga de CV

### 7. ThemeContext.jsx
- Context API para manejo de tema
- Persistencia en localStorage
- Variables CSS dinámicas

## 🎨 Sistema de Estilos

### Variables CSS (index.css)

```css
/* Dark Theme */
--bg-primary: #0a0a0a
--bg-secondary: rgba(20, 20, 30, 0.9)
--bg-tertiary: rgba(255, 255, 255, 0.05)
--bg-hover: rgba(255, 255, 255, 0.1)
--text-primary: #ffffff
--text-secondary: rgba(255, 255, 255, 0.9)
--text-tertiary: rgba(255, 255, 255, 0.7)
--border-color: rgba(255, 255, 255, 0.1)
--shadow-color: rgba(0, 0, 0, 0.3)

/* Light Theme */
--bg-primary: #f5f5f5
--bg-secondary: rgba(255, 255, 255, 0.95)
--bg-tertiary: rgba(0, 0, 0, 0.05)
--bg-hover: rgba(0, 0, 0, 0.08)
--text-primary: #1a1a1a
--text-secondary: #2d2d2d
--text-tertiary: #4a4a4a
--border-color: rgba(0, 0, 0, 0.1)
--shadow-color: rgba(0, 0, 0, 0.15)
```

### Efectos Visuales
- **Glassmorphism**: backdrop-filter: blur(20px)
- **Gradientes neón**: linear-gradient con colores vibrantes
- **Sombras múltiples**: box-shadow con varias capas
- **Transformaciones GPU**: transform: translate3d()

## 🔄 Flujo de Datos

### Estado de Ventanas
```javascript
windows = [
  {
    id: string,
    title: string,
    type: string,
    minimized: boolean
  }
]
```

### Ciclo de Vida de Ventana
1. Usuario hace clic en icono desktop
2. handleIconDoubleClick agrega ventana al array
3. Window.jsx renderiza la ventana
4. WindowContent.jsx carga contenido según type
5. Usuario puede minimizar/cerrar desde Taskbar o Window
6. Estado se actualiza y re-renderiza

## 🧪 Testing

### Setup (src/test/setup.js)
- Mock de localStorage
- Configuración de @testing-library
- Cleanup automático entre tests

### Tests Implementados
- **PhotoAvatar.test.jsx**: 3 tests
- **Taskbar.test.jsx**: 3 tests

### Ejecutar Tests
```bash
npm test           # Modo watch
npm run test:ui    # UI de Vitest
npm run test:run   # Ejecución única
```

## 📦 Build y Deployment

### Proceso de Build
```bash
npm run build
```

Genera:
- `/dist` - Archivos optimizados
- Assets con hash para cache busting
- CSS y JS minificados
- Assets comprimidos

### Netlify Deployment
- Build automático desde GitHub
- Configuración en netlify.toml
- Headers de seguridad
- Cache de assets estáticos
- Redirects para SPA

## 🔐 Seguridad

### Headers HTTP
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### Buenas Prácticas
- No console.logs en producción
- rel="noopener noreferrer" en links externos
- Validación de inputs
- Escape de contenido dinámico

## 📊 Performance

### Optimizaciones Implementadas
1. **Code Splitting**: Componentes lazy load
2. **Asset Optimization**: Imágenes comprimidas
3. **CSS Optimization**: Propiedades GPU-accelerated
4. **Caching**: Headers de cache agresivo
5. **Tree Shaking**: Vite elimina código no usado

### Métricas Objetivo
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance: > 90

## 🐛 Debugging

### Herramientas
- React DevTools
- Vite HMR (Hot Module Replacement)
- Console.log removido en producción
- ESLint para calidad de código

## 🚀 Futuras Mejoras

### Corto Plazo
- [ ] Agregar más proyectos
- [ ] Mejorar animaciones de hover
- [ ] Implementar dark/light theme automático según sistema

### Mediano Plazo
- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Formulario de contacto funcional
- [ ] Analytics integrado

### Largo Plazo
- [ ] i18n (Inglés/Español)
- [ ] PWA con service workers
- [ ] Modo offline
- [ ] Backend para formularios

## 📝 Mantenimiento

### Actualización de Dependencias
```bash
npm outdated          # Ver paquetes desactualizados
npm update            # Actualizar minor/patch
npm install <pkg>@latest  # Actualizar major version
```

### Checklist Pre-Deploy
- [ ] Tests pasando (npm test)
- [ ] No errores de lint (npm run lint)
- [ ] Build exitoso (npm run build)
- [ ] Preview funcional (npm run preview)
- [ ] Assets optimizados
- [ ] SEO tags actualizados

## 🤝 Contribuir

Ver README.md para guía de contribución.

---

**Última actualización**: Noviembre 2025
**Versión**: 1.0.0
**Mantenedor**: Nahum Emmanuel Gutiérrez González
