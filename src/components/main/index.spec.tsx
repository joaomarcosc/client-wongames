import { render, screen } from '@testing-library/react'
import { Main } from '.'

const mainProps = {
  title: 'React Avançado',
  description: 'testando'
}

describe('Main', () => {
  it('Should render Header', () => {
    render(<Main {...mainProps} />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('Should render with correctly style', () => {
    const { container } = render(<Main {...mainProps} />)

    expect(container.firstChild).toHaveStyleRule({
      'background-color': '#06092b'
    })
  })
})
