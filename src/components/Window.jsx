import { useRef } from 'react'
import WindowContent from './WindowContent'
import './Window.css'

function Window({ id, title, content, x, y, width, height, zIndex, maximized, isActive, onClose, onMinimize, onMaximize, onFocus, onPositionChange }) {
  const drag = useRef(null)
  const startDrag = (event) => {
    if (maximized || event.button !== 0 || event.target.closest('button')) return
    drag.current = { pointerX: event.clientX, pointerY: event.clientY, x, y }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const moveDrag = (event) => {
    if (!drag.current) return
    const origin = drag.current
    onPositionChange(
      Math.max(8, Math.min(window.innerWidth - width - 8, origin.x + event.clientX - origin.pointerX)),
      Math.max(8, Math.min(window.innerHeight - height - 76, origin.y + event.clientY - origin.pointerY))
    )
  }
  return (
    <section className={`window ${isActive ? 'active' : ''}`} role="region"
      aria-labelledby={`window-title-${id}`} style={{ left: x, top: y, width, height, zIndex }}
      onPointerDown={onFocus} onFocus={onFocus}>
      <div className="window-titlebar" onPointerDown={startDrag} onPointerMove={moveDrag}
        onPointerUp={() => { drag.current = null }} onLostPointerCapture={() => { drag.current = null }}
        onDoubleClick={(event) => { if (!event.target.closest('button')) onMaximize() }}>
        <div id={`window-title-${id}`} className="window-title">{title}</div>
        <div className="window-controls">
          <button className="window-button" aria-label={`Minimizar ${title}`} onClick={onMinimize}>−</button>
          <button className="window-button" aria-label={`${maximized ? 'Restaurar' : 'Maximizar'} ${title}`} onClick={onMaximize}>{maximized ? '❐' : '□'}</button>
          <button className="window-button close" aria-label={`Cerrar ${title}`} onClick={onClose}>×</button>
        </div>
      </div>
      <div className="window-content" tabIndex={0}><WindowContent type={content} /></div>
    </section>
  )
}
export default Window
