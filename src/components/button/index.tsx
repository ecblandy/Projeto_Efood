import React from 'react'
//UtILS
import { GlobalButton } from './styles'

type Props = {
  children: React.ReactNode
  clicked?: () => void
}

const Button = ({ children, clicked }: Props) => (
  <GlobalButton onClick={clicked}>{children}</GlobalButton>
)
export default Button
