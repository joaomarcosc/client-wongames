import { ReactNode } from 'react'
import * as S from './styles'

export type Props = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
}

function Button({ children, size = 'medium', fullWidth = false, icon }: Props) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
