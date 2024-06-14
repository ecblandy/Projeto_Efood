import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { DescriptionCard, TitleCard } from '../product/styles'

export const ImageDivModal = styled.div`
  width: 280px;
  margin-right: 24px;
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`
export const ModalCard = styled.div`
  background-color: ${colors.backgroundColor};
  color: ${colors.mainColor};
  padding: 32px;
  max-width: 1024px;
  height: 344px;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    height: 90%;
    top: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;

    ${ImageDivModal} {
      margin-right: 0;
    }
  }
`
export const ModalInfo = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  button {
    background-color: ${colors.tertiaryColor};
    color: ${colors.backgroundColor};
    font-size: 14px;
    width: 218px;
    margin: 0;
  }
`

export const TitleModal = styled(TitleCard)`
  color: ${colors.mainColor};
  font-size: 18px;
  line-height: 21px;
  margin: 16px 0;
`
export const DescriptionModal = styled(DescriptionCard)`
  color: ${colors.mainColor};
  line-height: 22px;
  width: 658px;
  height: 178px;
  margin: 0;

  @media (max-width: ${breakpoints.desktop}) {
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const CloseModal = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  cursor: pointer;
`

// @media (max-width: ${breakpoints.tablet}) {
//     flex-direction: column;
//     text-align: center;
//     width: 90%;
//     height: 90%;
//     top: 50%;
//     ${ImageDivModal} {
//       margin-bottom: 8px;
//     }
// }

//  @media (max-width: ${breakpoints.tablet}) {

//   }
