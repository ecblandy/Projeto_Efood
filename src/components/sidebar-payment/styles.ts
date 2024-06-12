import styled from 'styled-components'
import { colors } from '../../styles'
export const ContainerPayment = styled.div`
  padding: 0px 8px;

  h4 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    color: ${colors.tertiaryColor};
    margin-bottom: 16px;
    margin-top: 32px;
  }

  button {
    background-color: ${colors.tertiaryColor};
    color: ${colors.backgroundColor};
    font-size: 14px;
    margin: 0;
    height: 24px;
    width: 100%;
    margin-bottom: 8px;
    width: 100%;
  }
`
