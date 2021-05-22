import { render, screen } from '@testing-library/react'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders two buttons', async () => {
    render(
      <CreatePage
        currentPageId="1"
        onNavigate={jest.fn()}
        pages={[
          { title: 'Foo', id: '1' },
          { title: 'Bar', id: '2' },
        ]}
      />
    )

    const buttons = screen.getByRole('button', { text: 'Create game' })
    expect(buttons).toBeInTheDocument()
  })
})
