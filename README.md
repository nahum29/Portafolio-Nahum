# Portafolio de Nahum Emmanuel Gutiérrez González

Portafolio personal con escritorio inspirado en Windows y navegación móvil inspirada en Android. Incluye seis proyectos desarrollados íntegramente por Nahum, habilidades, certificados y CV.

## Desarrollo local

Requiere Node.js compatible con las dependencias del archivo de bloqueo. El despliegue usa Node.js 20.11 (fijado en `netlify.toml`); para desarrollo y pruebas sirve Node.js 20 o 22.12 y superior.

```sh
npm ci
npm run dev
```

Abre la dirección que indique Vite (normalmente http://localhost:5173).

## Scripts

- `npm run dev`: servidor local.
- `npm run build`: compilación de producción en `dist/`.
- `npm run preview`: vista previa de esa compilación.
- `npm run lint`: análisis estático con ESLint.
- `npm run test:run`: pruebas automatizadas con Vitest y Testing Library.
- `npm test`: pruebas en modo observación.

## Stack

React 19, Vite 5 y CSS. Las versiones exactas reproducibles están en `package-lock.json`.

## Experiencia

- Bienvenida con acceso al escritorio, proyectos y descarga del CV.
- Ventanas que se pueden mover desde su barra de título, minimizar, restaurar, maximizar y cerrar.
- Doble clic en la barra de título para maximizar o restaurar.
- Botón N. para mostrar el escritorio; la barra de tareas permite recuperar las ventanas.
- Límites ajustados al tamaño de pantalla para mantener los controles por encima de la barra de tareas.
- Versión móvil hasta 768 px, con los mismos contenidos y navegación de inicio y regreso.
- Tema claro y oscuro con preferencia guardada cuando el almacenamiento está disponible.
- Fondo estático por defecto. El video de aproximadamente 6,2 MB se carga solo al elegir «Animar fondo».
- La preferencia del sistema de reducir movimiento deshabilita el video y las animaciones CSS.
- Botones accesibles por teclado, foco visible y controles de ventana con nombres descriptivos.

## Contenido y capturas

Los proyectos, habilidades, contactos y certificados se editan en `src/data/portfolio.js`.
Ambas interfaces renderizan `WindowContent.jsx`; no mantienen listas separadas.

Las capturas de cinco proyectos se guardan en `public/images/projects/` en formato JPEG, con sus dimensiones reales declaradas en `src/data/portfolio.js` para reservar el espacio antes de cargarlas. Se obtuvieron de sus sitios públicos el 29 de septiembre de 2026. Su tamaño total es inferior a 300 KB y se cargan de forma diferida.

El dominio de Funeraria Hermosa Provincia no resolvió durante la revisión. Su ficha conserva el enlace original y utiliza una portada de texto e icono, no una captura inventada. Cuando el sitio esté disponible, añade su captura y actualiza la ficha.

Las descripciones reflejan las funcionalidades del portafolio original y la autoría confirmada por Nahum. No se afirman mejoras de ventas, tráfico o rendimiento sin medición.

## SEO

`public/robots.txt` permite el rastreo y apunta al sitemap; `public/sitemap.xml` lista la raíz y el CV.
`index.html` incluye meta tags de descripción, Open Graph, Twitter Card y datos estructurados JSON-LD del perfil (`schema.org/Person`).

## Verificación

La suite incluye regresiones para restaurar ventanas minimizadas, gestionar la ventana activa al cerrar, maximizar/restaurar, abrir secciones con teclado, cargar el video bajo demanda y acceder a los seis proyectos en móvil.

### Lighthouse

Medición con Lighthouse 12.8.2 sobre `dist/` servido en local (móvil, simulated throttling), el 8 de octubre de 2026:

| Categoría | Puntuación |
| --- | --- |
| Rendimiento | 99 |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |

Métricas: FCP 1,3 s · LCP 2,1 s · TBT 80 ms · CLS 0 · TTI 2,1 s · peso total 192 KB.

La primera corrida previa a los ajustes arrojó 41,9 % de texto legible, 37 KiB de imagen sobredimensionada y `framer-motion` en el bundle sin animaciones que lo usaran. Los cambios fueron: tipografías mínimas de 12 px, un avatar de 240 px en lugar de 640 px, fondo recompresado de 208 KB a 108 KB, eliminación de `framer-motion` y precarga del fondo del encabezado.

Estas cifras son de una compilación local, no del sitio desplegado, y varían entre corridas según la carga de la máquina. Deben volver a medirse sobre https://portfolio-nahum.netlify.app antes de citarlas.

## Estructura

```text
src/
  components/    Interfaces de bienvenida, escritorio, móvil y contenido compartido
  context/       Preferencia de tema
  data/          Contenido del portafolio
  test/          Pruebas y configuración
public/
  images/        Fotografía, fondo y capturas de proyectos
  certificados/  Certificados PDF
  cv/            Currículum
  video/         Fondo animado opcional
  robots.txt     Reglas de rastreo
  sitemap.xml    Mapa del sitio
  favicon.svg    Identidad visual del portafolio
```

## Publicación

`netlify.toml` contiene la configuración de Netlify. Genera `dist/` con `npm run build` antes de publicar. Los cambios locales no actualizan el sitio público hasta que se despliegan.

Sitio: https://portfolio-nahum.netlify.app
GitHub: https://github.com/nahum29
