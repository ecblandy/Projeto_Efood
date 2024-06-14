import React from 'react'
//UtILS
import { GlobalButton } from './styles'

type Props = {
  children: React.ReactNode
  clicked?: () => void
  type: 'submit' | 'button'
  classProps?: string
}

const Button = ({ children, clicked, type = 'submit', classProps }: Props) => {
  return (
    <GlobalButton className={classProps} type={type} onClick={clicked}>
      {children}
    </GlobalButton>
  )
}
export default Button
