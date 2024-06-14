import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 1024px;
  gap: 32px;

  @media (max-width: 1381px) {
    justify-content: center;
  }
`

export const SectionContainer = styled.section`
  margin: 120px 170px;
  display: flex;
  justify-content: center;
  background-color: ${colors.tertiaryColor};
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 30px 40px;
  }
`

export const SelectProduct = styled.div`
  background-color: ${colors.backgroundColor};
  width: 1024px;
  height: 344px;
`
