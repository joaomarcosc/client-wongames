import { renderWithTheme } from '../../utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from '.'
import 'jest-styled-components'

describe('Button', () => {
  it('Should render the medium size by default', () => {
    const { getByRole } = renderWithTheme(<Button>Medium</Button>)

    const button = getByRole('button', { name: /Medium/i })

    expect(button).toHaveStyle({
      height: '4rem'
    })
  })

  it('Should render the large size', () => {
    const { getByRole } = renderWithTheme(<Button size="large">Large</Button>)

    const button = getByRole('button', { name: /Large/i })

    expect(button).toHaveStyle({
      height: '5rem'
    })
  })

  it('Should render the small size', () => {
    const { getByRole } = renderWithTheme(<Button size="small">Small</Button>)

    const button = getByRole('button', { name: /Small/i })

    expect(button).toHaveStyle({
      height: '3rem'
    })
  })

  it('Should render with full width', () => {
    const { getByRole } = renderWithTheme(
      <Button size="small" fullWidth>
        Full Width
      </Button>
    )

    const button = getByRole('button', { name: /Full Width/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('Should render with icon', () => {
    const { getByRole, getByTestId } = renderWithTheme(
      <Button size="small" icon={<AddShoppingCart data-testid="icon" />}>
        With icon
      </Button>
    )

    const button = getByRole('button', { name: /with icon/i })
    const icon = getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
