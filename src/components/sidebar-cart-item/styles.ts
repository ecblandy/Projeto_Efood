import styled from 'styled-components'
import { Cores } from '../../styles'

export const ModalCartItem = styled.div`
  padding: 8px 8px 12px;
  background-color: ${Cores.footer};
  margin: 32px 8px 16px 8px;
  display: flex;
  position: relative;
  img {
  }

  h4 {
    font-size: 18px;
    color: ${Cores.pink};
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${Cores.pink};
  }
`
export const LixeiraCartItem = styled.img`
  position: absolute;
  right: 8px;
  bottom: 8px;
  height: 16px;
`
export const ProductImage = styled.img`
  height: 80px;
  margin-right: 8px;
`
