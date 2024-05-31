import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${Cores.pink};
  padding: 8px;
  width: 320px;
  height: 338px;

  img {
    width: 100%;
  }

  button {
    background-color: ${Cores.footer};
    color: ${Cores.pink};
    font-size: 14px;
    margin: 0;
    width: 100%;
  }
`
export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${Cores.footer};
  margin-bottom: 8px;
`
export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  color: ${Cores.footer};
  margin: 8px 0;
`
