import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import Taskbar from '../components/Taskbar'

describe('Taskbar Component', () => {
  const mockWindows = [
    { id: 'test1', title: 'Test Window 1', minimized: false },
    { id: 'test2', title: 'Test Window 2', minimized: true }
  ]

  it('renders taskbar with windows', () => {
    render(
      <ThemeProvider>
        <Taskbar windows={mockWindows} activeWindow="test1" onWindowClick={vi.fn()} />
      </ThemeProvider>
    )
    
    expect(screen.getByText('Test Window 1')).toBeInTheDocument()
    expect(screen.getByText('Test Window 2')).toBeInTheDocument()
  })

  it('displays current time', () => {
    render(
      <ThemeProvider>
        <Taskbar windows={[]} activeWindow={null} onWindowClick={vi.fn()} />
      </ThemeProvider>
    )
    
    const timeElement = document.querySelector('.tray-time')
    expect(timeElement).toBeInTheDocument()
  })

  it('calls onWindowClick when window button is clicked', () => {
    const mockOnClick = vi.fn()
    render(
      <ThemeProvider>
        <Taskbar windows={mockWindows} activeWindow="test1" onWindowClick={mockOnClick} />
      </ThemeProvider>
    )
    
    const windowButton = screen.getByText('Test Window 1')
    fireEvent.click(windowButton)
    expect(mockOnClick).toHaveBeenCalledWith('test1')
  })
})
