import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { CloseModal } from '../modal/styles'

export const Sidebar = styled.div`
  background-color: ${colors.backgroundColor};
  max-width: 360px;
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`
export const CloseSidebar = styled(CloseModal)`
  left: 8px;
  top: 8px;
  width: 20px;
`
export const CloseDiv = styled.div`
  position: relative;
`

export const TextNoItem = styled.p`
  color: ${colors.mainColor};
  margin-top: 64px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
`
