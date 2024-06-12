import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 1024px;
  gap: 32px;
`

export const SectionContainer = styled.section`
  margin: 120px 170px;
  display: flex;
  background-color: ${colors.tertiaryColor};
  justify-content: center;
  align-items: center;
`

export const SelectProduct = styled.div`
  background-color: ${colors.backgroundColor};
  width: 1024px;
  height: 344px;
`
