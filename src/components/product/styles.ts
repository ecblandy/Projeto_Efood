import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${Cores.pink};
  padding: 8px;
  width: 320px;
  height: 340px;

  img {
    width: 100%;
    height: 167px;
    margin-bottom: 8px;
  }

  button {
    background-color: ${Cores.footer};
    color: ${Cores.pink};
    font-size: 14px;
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`
export const DescriptionCard = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.footer};
  margin: 8px 0;
  width: 304px;
  height: 88px;
`
export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  color: ${Cores.footer};
  height: 19px;
`
