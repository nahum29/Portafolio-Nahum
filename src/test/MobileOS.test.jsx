import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MobileOS from '../components/MobileOS'
import { ThemeProvider } from '../context/ThemeContext'
describe('Mobile portfolio', () => {
  it('shows all six projects and returns to the home screen', () => {
    render(<ThemeProvider><MobileOS /></ThemeProvider>)
    fireEvent.click(screen.getByRole('button', { name: 'Ver proyectos ↗' }))
    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByRole('heading', { name: 'GuitarLA' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Festival de Música' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tiendita C.P.S' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Ver el código de Tiendita C\.P\.S/ })).toHaveAttribute('href', 'https://github.com/nahum29/TienditaC.P.S')
    fireEvent.click(screen.getByRole('button', { name: 'Inicio', exact: true }))
    expect(screen.getByRole('heading', { name: 'Nahum Emmanuel' })).toBeInTheDocument()
  })
})
