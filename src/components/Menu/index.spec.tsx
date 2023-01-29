import { renderWithTheme } from '../../utils/tests/helpers'
import Menu from '.'
import { fireEvent } from '@testing-library/react'

describe('Menu', () => {
  it('Should render Menu', () => {
    const { getByLabelText } = renderWithTheme(<Menu />)

    expect(getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(getByLabelText(/search/i)).toBeInTheDocument()
    expect(getByLabelText(/open shop/i)).toBeInTheDocument()
    expect(getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('Should render the open/close mobile menu', () => {
    const { getByRole, getByLabelText } = renderWithTheme(<Menu />)

    // Pegar o MenuFull
    const menuFull = getByRole('navigation', { hidden: true })

    // MenuFull oculto
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })

    // Exibir MenuFull
    fireEvent.click(getByLabelText(/open menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyle({ opacity: 1 })

    // Ocultar menu
    fireEvent.click(getByLabelText(/close menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: 0 })
  })

  it('Should render register box when log out and not render wishlist an My account', () => {
    const { getByText, queryByText } = renderWithTheme(<Menu />)

    expect(getByText(/log in now/i)).toBeInTheDocument()
    expect(getByText(/sign up/i)).toBeInTheDocument()
    expect(queryByText(/my account/i)).not.toBeInTheDocument()
    expect(queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('Should not render register box when log out and render wishlist an My account', () => {
    const { getByText, queryByText } = renderWithTheme(<Menu username="Joao" />)

    expect(queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(getByText(/my account/i)).toBeInTheDocument()
    expect(getByText(/wishlist/i)).toBeInTheDocument()
  })
})
