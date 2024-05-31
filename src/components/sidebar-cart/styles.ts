import styled from 'styled-components'
import { Cores } from '../../styles'
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px 8px;
  /* background-color: blue; */

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  button {
    background-color: ${Cores.body};
    color: ${Cores.pink};
    font-size: 14px;
    margin: 0;
    height: 24px;
    width: 100%;
  }
`
export const InfoValue = styled.span`
  color: ${Cores.footer};
  font-size: 14px;
  font-weight: 700;
`
