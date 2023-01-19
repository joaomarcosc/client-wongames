import * as S from './styles'

export interface IProps {
  title: string
  description: string
}

export function Main({ title, description }: IProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
