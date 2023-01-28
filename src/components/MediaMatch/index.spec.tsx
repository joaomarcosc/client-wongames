import { render, screen } from '@testing-library/react'
import MediaMatch from '.'
import 'jest-styled-components'

describe('MediaMatch', () => {
  let desktopElement: Element
  let mobileElement: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopElement = screen.getByTestId('desktop')
    mobileElement = screen.getByTestId('mobile')
  })

  it('Should render no passed media query', () => {
    expect(desktopElement.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileElement.parentElement).toHaveStyleRule('display', 'none')
  })

  it('Should render passed media query min-width', () => {
    expect(desktopElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })

  it('Should render passed media query max-width', () => {
    expect(mobileElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
