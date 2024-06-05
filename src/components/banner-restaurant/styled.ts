import styled from 'styled-components'
import { Cores } from '../../styles'
export const BannerRestaurant = styled.div`
  .image-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`

export const DarkDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  top: 0;
  left: 0;
`
export const Info = styled.span`
  line-height: 37px;
  font-weight: 100;
  margin-right: 20px;
`
export const ContainerInfo = styled.div`
  margin-top: 24px;
`

export const Title = styled.h2`
  margin-bottom: 32px;
  font-weight: 900;
  line-height: 37px;
`
export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 170px;
  font-size: 32px;
  position: absolute;
  top: 0;
  left: 0;
  color: ${Cores.corPrincipal};
`
