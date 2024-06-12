import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '../../components/span'

export const Title = styled.h2<Props>`
  color: ${colors.backgroundColor};
  line-height: 42px;
  text-align: center;
  margin-bottom: 40px;
`
