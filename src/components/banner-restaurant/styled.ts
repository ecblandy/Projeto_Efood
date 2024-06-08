import styled from 'styled-components'
import { Cores } from '../../styles'

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
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    position: absolute;
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
  line-height: 37px;
  color: ${Cores.corPrincipal};
  div {
    margin-top: 25px;
    span {
      font-weight: 100;
      margin-right: 8px;
    }
  }

  h2 {
    margin-bottom: 32px;
    font-weight: 900;
  }
`

// export const BannerRestaurant = styled.div`
//   .image-container {
//     position: relative;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     img {
//       width: 100%;
//     }
//   }
// `

// export const DarkDiv = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   background-color: black;
//   opacity: 0.5;
//   top: 0;
//   left: 0;
// `
// export const Info = styled.span`
//   line-height: 37px;
//   font-weight: 100;
// `
// export const ContainerInfo = styled.div`
//   display: flex;
//   background-color: red;
//   .container {
//     max-width: 1024px;
//     width: 100%;
//   }
// `

// export const Title = styled.h2`
//   margin-bottom: 32px;
//   font-weight: 900;
//   line-height: 37px;
//   font-size: 32px;
// `

// export const DivContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   max-width: 1024px;
//   width: 100%;
//   font-size: 32px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   color: ${Cores.corPrincipal};
//   background-color: black;
// `

// export const DivContent = styled.div`
//   > div {
//     background-color: green;
//   }
// `
