import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerCards = styled.section`
  padding: 80px 171px;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 40px;
  }
  background-color: ${colors.tertiaryColor};
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
