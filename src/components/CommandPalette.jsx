import { useEffect, useMemo, useRef, useState } from 'react'
import './CommandPalette.css'

// Paleta de comandos al estilo Spotlight / VS Code (Ctrl+K o Cmd+K).
// Es presentacional: quién ejecuta cada orden es quien la monta (`onRun`).
function CommandPalette({ commands, onClose }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return commands
    return commands.filter(command =>
      `${command.label} ${command.hint ?? ''}`.toLowerCase().includes(needle))
  }, [commands, query])

  // El componente se monta y desmonta con la paleta, así que el estado arranca
  // limpio sin necesidad de resetearlo dentro de un efecto.
  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => {
    const option = listRef.current?.children[active]
    option?.scrollIntoView?.({ block: 'nearest' })
  }, [active, results.length])

  const onQueryChange = (value) => { setQuery(value); setActive(0) }

  const run = (command) => { onClose(); command.run() }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive(index => (index + 1) % Math.max(results.length, 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive(index => (index - 1 + results.length) % Math.max(results.length, 1))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const command = results[active]
      if (command) run(command)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    } else if (event.key === 'Tab') {
      // El diálogo es modal: el foco no puede salir de él.
      event.preventDefault()
      inputRef.current?.focus()
    }
  }

  return (
    <div className="palette-overlay" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Paleta de comandos" onKeyDown={onKeyDown}>
        <div className="palette-input-row">
          <span aria-hidden="true" className="palette-prompt">›</span>
          <input ref={inputRef} type="text" value={query} onChange={event => onQueryChange(event.target.value)}
            placeholder="Escribe una orden o busca una sección…" aria-label="Buscar comando"
            aria-controls="palette-results" aria-expanded="true" role="combobox" aria-autocomplete="list"
            aria-activedescendant={results[active] ? `palette-option-${results[active].id}` : undefined} />
          <kbd>Esc</kbd>
        </div>
        <ul className="palette-list" id="palette-results" role="listbox" aria-label="Resultados" ref={listRef}>
          {results.map((command, index) => (
            <li key={command.id} id={`palette-option-${command.id}`} role="option"
              aria-selected={index === active} className={index === active ? 'active' : ''}
              onMouseEnter={() => setActive(index)} onMouseDown={event => { event.preventDefault(); run(command) }}>
              <span className="palette-icon" aria-hidden="true">{command.icon}</span>
              <span className="palette-text"><strong>{command.label}</strong>{command.hint && <small>{command.hint}</small>}</span>
              <kbd aria-hidden="true">↵</kbd>
            </li>
          ))}
          {results.length === 0 && <li className="palette-empty" role="presentation">Sin resultados para “{query}”.</li>}
        </ul>
        <footer className="palette-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navegar</span>
          <span><kbd>↵</kbd> abrir</span>
          <span><kbd>Esc</kbd> cerrar</span>
        </footer>
      </div>
    </div>
  )
}
export default CommandPalette
