import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type Breakpoints = keyof DefaultBreakpoints

export type Props = {
  lessThan?: Breakpoints
  greaterThan?: Breakpoints
}

const wrapperModifier = {
  lessThan: (size: Breakpoints) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,
  greaterThan: (size: Breakpoints) =>
    css`
      ${media.greaterThan(size)`
        display: block
      `}
    `
}

export default styled.div<Props>`
  display: none;

  ${({ lessThan, greaterThan }) => css`
    ${lessThan && wrapperModifier.lessThan(lessThan)}
    ${greaterThan && wrapperModifier.greaterThan(greaterThan)}
  `}
`
