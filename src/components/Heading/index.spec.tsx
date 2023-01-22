import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Heading from '.'
import 'jest-styled-components'

describe('Heading', () => {
  it('Should render Header with children', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeInTheDocument()
  })

  it('Should render Header with children and color', () => {
    renderWithTheme(<Heading color="white">Heading</Heading>)

    expect(screen.getByRole('heading', { name: 'Heading' })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Should render Header with leftLine and default lineColor(primary)', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)

    expect(screen.getByRole('heading', { name: 'Heading' })).toHaveStyleRule(
      'border-left',
      '0.7rem solid #F231A5'
    )
  })

  it('Should render Header with bottomLine and default lineColor(primary)', () => {
    renderWithTheme(<Heading lineBottom>Heading</Heading>)

    expect(screen.getByRole('heading', { name: 'Heading' })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('Should render Header with bottomLine and lineColor', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Heading
      </Heading>
    )

    expect(screen.getByRole('heading', { name: 'Heading' })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #3CD3C1',
      {
        modifier: '::after'
      }
    )
  })
})
