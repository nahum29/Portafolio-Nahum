import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PhotoAvatar from '../components/PhotoAvatar'

describe('PhotoAvatar Component', () => {
  it('renders without crashing', () => {
    render(<PhotoAvatar />)
    const avatarContainer = screen.getByTestId('photo-avatar')
    expect(avatarContainer).toBeInTheDocument()
  })

  it('displays the portfolio text', () => {
    render(<PhotoAvatar />)
    const portText = screen.getByText('PORT')
    const folioText = screen.getByText('FOLIO')
    expect(portText).toBeInTheDocument()
    expect(folioText).toBeInTheDocument()
  })

  it('has correct class name', () => {
    render(<PhotoAvatar />)
    const container = screen.getByTestId('photo-avatar')
    expect(container).toHaveClass('photo-avatar-container')
  })
})
