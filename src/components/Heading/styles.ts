import styled, { css, DefaultTheme } from 'styled-components'
import { LineColor, Props } from '.'
import media from 'styled-media-query'

const wrapperModifier = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColor) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xsmall};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<Props>`
  ${({ theme, lineLeft, lineColor, lineBottom, color }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifier.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifier.lineBottom(theme, lineColor!)};
  `}
`
