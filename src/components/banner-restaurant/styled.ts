import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const BackgroundDivImg = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 32px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: clamp(16px, 4.235vw, 32px);
    text-align: center;
    height: 90%;
  }
  @media (max-width: 1060px) {
    margin-left: 30px;
  }
  line-height: 37px;
  color: ${colors.mainColor};
  div {
    margin-top: 25px;
    span {
      font-weight: 100;
      margin-right: 8px;
    }
  }

  div {
    margin-bottom: 32px;
    h2 {
      font-weight: 900;
    }
  }
`
