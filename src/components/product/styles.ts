import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${colors.backgroundColor};
  padding: 8px;
  max-width: 320px;
  width: 100%;
  height: 340px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
  }

  img {
    width: 100%;
    height: 167px;
    margin-bottom: 8px;
  }

  button {
    background-color: ${colors.footer};
    color: ${colors.backgroundColor};
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
  color: ${colors.footer};
  margin: 8px 0;
  width: 304px;
  height: 88px;
`
export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  color: ${colors.footer};
  height: 19px;
`
