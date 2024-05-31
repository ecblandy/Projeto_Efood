import React from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode
  clicked?: () => void
}

const Button = ({ children, clicked }: Props) => (
  <S.GlobalButton onClick={clicked}>{children}</S.GlobalButton>
)
export default Button
