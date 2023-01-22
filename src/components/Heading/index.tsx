import * as S from './styles'

export type LineColor = 'secondary' | 'primary'

export type Props = {
  children: string
  lineBottom?: boolean
  lineLeft?: boolean
  lineColor?: LineColor
  color?: 'white' | 'black'
}
function Heading({
  children,
  lineLeft,
  lineBottom,
  lineColor = 'primary',
  color = 'black'
}: Props) {
  return (
    <S.Wrapper
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      color={color}
    >
      {children}
    </S.Wrapper>
  )
}

export default Heading
