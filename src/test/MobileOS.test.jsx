import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MobileOS from '../components/MobileOS'
import { ThemeProvider } from '../context/ThemeContext'
describe('Mobile portfolio', () => {
  it('shows all five projects and returns to the home screen', () => {
    render(<ThemeProvider><MobileOS /></ThemeProvider>)
    fireEvent.click(screen.getByRole('button', { name: 'Ver proyectos ↗' }))
    expect(screen.getAllByRole('article')).toHaveLength(5)
    expect(screen.getByRole('heading', { name: 'GuitarLA' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Festival de Música' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Inicio', exact: true }))
    expect(screen.getByRole('heading', { name: 'Nahum Emmanuel' })).toBeInTheDocument()
  })
})
