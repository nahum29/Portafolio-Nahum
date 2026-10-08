import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Desktop from '../components/Desktop'
import { ThemeProvider } from '../context/ThemeContext'

function setup() {
  render(<ThemeProvider><Desktop /></ThemeProvider>)
  return within(screen.getByRole('navigation', { name: 'Secciones del portafolio' }))
}
describe('Desktop window interactions', () => {
  it('restores a minimized window from its desktop icon without creating a duplicate', () => {
    const icons = setup()
    fireEvent.click(icons.getByRole('button', { name: 'Proyectos', exact: true }))
    fireEvent.click(screen.getByRole('button', { name: 'Minimizar Proyectos' }))
    expect(screen.queryByRole('region', { name: 'Proyectos' })).not.toBeInTheDocument()
    fireEvent.click(icons.getByRole('button', { name: 'Proyectos', exact: true }))
    expect(screen.getAllByRole('region', { name: 'Proyectos' })).toHaveLength(1)
  })
  it('keeps the remaining window active after closing a previously opened window', () => {
    const icons = setup()
    fireEvent.click(icons.getByRole('button', { name: 'Proyectos', exact: true }))
    fireEvent.click(icons.getByRole('button', { name: 'Contacto', exact: true }))
    fireEvent.click(icons.getByRole('button', { name: 'Proyectos', exact: true }))
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar Proyectos' }))
    expect(within(screen.getByRole('navigation', { name: 'Barra de tareas' })).getByRole('button', { name: 'Contacto' })).toHaveAttribute('aria-pressed', 'true')
  })
  it('maximizes and restores within the available space above the taskbar', () => {
    const icons = setup()
    fireEvent.click(icons.getByRole('button', { name: 'Proyectos', exact: true }))
    const panel = screen.getByRole('region', { name: 'Proyectos' })
    const originalWidth = panel.style.width
    fireEvent.click(screen.getByRole('button', { name: 'Maximizar Proyectos' }))
    expect(parseFloat(panel.style.height) + parseFloat(panel.style.top)).toBeLessThan(window.innerHeight - 68)
    expect(panel.style.width).toBe(`${window.innerWidth - 16}px`)
    fireEvent.click(screen.getByRole('button', { name: 'Restaurar Proyectos' }))
    expect(panel.style.width).toBe(originalWidth)
  })
  it('opens desktop sections using the keyboard', async () => {
    setup()
    const user = userEvent.setup()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Sobre mí', exact: true })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('region', { name: 'Sobre mí' })).toBeInTheDocument()
  })
  it('loads the background video only when requested and removes it when paused', () => {
    setup()
    expect(document.querySelector('video')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Animar fondo' }))
    expect(document.querySelector('video')).not.toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Pausar fondo' }))
    expect(document.querySelector('video')).toBeNull()
  })
})
