import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GameForm from './GameForm'

describe('GameForm', () => {
  it('renders two inputs', () => {
    render(<GameForm onSubmit={() => jest.fn()}></GameForm>)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)
    expect(inputs[0]).toHaveAttribute('placeholder')
    expect(inputs[1]).toHaveAttribute('placeholder')
  })

  it('renders a button who submit the form', () => {
    const handleClick = jest.fn()
    render(<GameForm onSubmit={handleClick}></GameForm>)

    const form = screen.getByRole('form')
    const button = screen.getByRole('button', { name: 'Create game' })

    userEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })
})
