# Documentación técnica

## Flujo

`App.jsx` utiliza el breakpoint de 768 px para elegir entre la bienvenida/escritorio y `MobileOS`.
`ThemeProvider` comparte el tema mediante `useTheme.js` y tolera navegadores con almacenamiento deshabilitado.

## Ventanas

`Desktop.jsx` conserva las ventanas en orden de apilamiento. Al abrir o enfocar una ventana se lleva al final de la lista y se restaura si estaba minimizada. La última ventana visible determina la selección de la barra de tareas.

La posición y tamaño se ajustan al viewport durante cada render. Maximizar utiliza el espacio disponible sobre la barra de 68 px; restaurar recupera los límites normales. El estado existe durante la sesión del escritorio, no se persiste al recargar.

`Window.jsx` utiliza Pointer Events y captura de puntero para arrastrar únicamente desde el título. Calcula el desplazamiento respecto al punto inicial, sin confundir la posición del cursor con la esquina de la ventana. Los botones del título quedan excluidos del arrastre.

## Contenido compartido

`src/data/portfolio.js` es la fuente de datos para proyectos, habilidades, contactos y certificados.
`WindowContent.jsx` muestra ese contenido tanto en escritorio como en móvil. Los detalles de cada proyecto usan el elemento nativo `details`.
Cada proyecto puede declarar `image` con `src`, `width` y `height` reales; si no la tiene, se muestra una portada de texto e icono en lugar de una captura inventada.

## Navegación y foco

Al abrir una app en móvil, `MobileOS.jsx` guarda la *clave* del botón que la abrió (`data-focus-key`), no el nodo. Al volver al inicio se busca de nuevo ese nodo en el DOM, que ya fue desmontado y vuelto a montar. Si no se encuentra, el foco cae al botón Inicio de la barra inferior. Al entrar a una app el foco pasa al encabezado de la pantalla.

`Desktop.jsx` mantiene un `h1` visualmente oculto cuando hay una ventana abierta, porque el `h1` de bienvenida queda oculto en ese estado.

## SEO

`public/robots.txt` y `public/sitemap.xml` se publican sin transformación. `index.html` incluye meta tags sociales y un bloque JSON-LD (`schema.org/Person`) con el perfil profesional. El fondo de la barra de direcciones usa `theme-color` alineado a `--bg-primary`.

## Estilos y recursos

Las variables CSS en `index.css` definen colores para ambos temas.
El anillo de foco usa un color distinto en tema claro (`#17427e`) para mantener el contraste sobre superficies blancas.
Los contenedores móviles usan `100dvh`, áreas seguras y desplazamiento interno para mantener disponible la navegación.
El video se monta solo por petición explícita y cuando el sistema no pide reducir movimiento.
Las capturas de proyectos se cargan con `loading="lazy"` y un espacio reservado que evita saltos del diseño.
La proporción `.project-preview` se define únicamente en `WindowContent.css` para no depender del orden de importación de las hojas de estilo.

## Verificación

Ejecuta `npm run lint`, `npm run test:run` y `npm run build`.
Las pruebas de componentes no sustituyen la revisión visual en el navegador ni una auditoría Lighthouse. Para verificar arrastre, prueba la barra de título, los bordes de pantalla, maximizar/restaurar y el cambio de viewport. Revisa móvil y ambos temas.
