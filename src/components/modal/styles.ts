import styled from 'styled-components'
import { Cores } from '../../styles'
import { DescriptionCard, TitleCard } from '../product/styles'

export const ModalCard = styled.div`
  background-color: ${Cores.pink};
  color: ${Cores.corPrincipal};
  padding: 32px;
  width: 1024px;
  height: 344px;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 1;
`

export const ImageDivModal = styled.div`
  width: 280px;
  margin-right: 24px;
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`
export const TitleModal = styled(TitleCard)`
  color: ${Cores.corPrincipal};
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 16px;
`
export const DescriptionModal = styled(DescriptionCard)`
  color: ${Cores.corPrincipal};
  line-height: 22px;
  width: 658px;
  height: 178px;
  margin: 0;
`

export const ModalInfo = styled.div`
  button {
    background-color: ${Cores.body};
    color: ${Cores.pink};
    font-size: 14px;
    width: 218px;
    margin: 0;
  }
`
export const CloseModal = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
`
