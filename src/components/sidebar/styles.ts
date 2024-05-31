import styled from 'styled-components'
import { Cores } from '../../styles'
import { CloseModal } from '../modal/styles'

export const Sidebar = styled.div`
  background-color: ${Cores.pink};
  width: 360px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`
export const CloseSidebar = styled(CloseModal)`
  left: 8px;
  top: 8px;
  width: 20px;
`
export const CloseDiv = styled.div`
  position: relative;
  button {
    background-color: transparent;
  }
`
