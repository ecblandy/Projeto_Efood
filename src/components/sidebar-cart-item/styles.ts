import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalCartItem = styled.div`
  padding: 8px 8px 12px;
  background-color: ${colors.footer};
  margin: 32px 8px 16px 8px;
  display: flex;
  position: relative;

  h4 {
    font-size: 18px;
    color: ${colors.backgroundColor};
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    color: ${colors.backgroundColor};
  }
`
export const LixeiraCartItem = styled.img`
  position: absolute;
  right: 8px;
  bottom: 8px;
  height: 16px;
  cursor: pointer;
`
export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 8px;
`
