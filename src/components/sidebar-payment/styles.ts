import styled from 'styled-components'
import { Cores } from '../../styles'
export const ContainerPayment = styled.div`
  padding: 0px 8px;

  h4 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    color: ${Cores.body};
    margin-bottom: 16px;
    margin-top: 32px;
  }

  button {
    background-color: ${Cores.body};
    color: ${Cores.pink};
    font-size: 14px;
    margin: 0;
    height: 24px;
    width: 100%;
    margin-bottom: 8px;
    width: 100%;
  }
`
