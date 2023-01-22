import { renderWithTheme } from '../../utils/tests/helpers'
import 'jest-styled-components'
import Logo from '.'

describe('Logo', () => {
  it('Should render a white label by default', () => {
    const { getByLabelText } = renderWithTheme(<Logo />)
    expect(getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render color of "color" props', () => {
    const { getByLabelText } = renderWithTheme(<Logo color="white" />)
    expect(getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Should render large size', () => {
    const { getByLabelText } = renderWithTheme(
      <Logo color="black" size="large" />
    )
    expect(getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('Should render default size', () => {
    const { getByLabelText } = renderWithTheme(<Logo />)
    expect(getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('Should render a bigger logo without text if hideOnMobile', () => {
    const { getByLabelText } = renderWithTheme(<Logo hideOnMobile />)
    expect(getByLabelText(/Won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
