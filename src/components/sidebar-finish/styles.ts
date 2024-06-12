import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerFinish = styled.div`
  padding: 0px 8px;
  button {
    background-color: ${colors.tertiaryColor};
    color: ${colors.backgroundColor};
    font-size: 14px;
    margin: 0;
    height: 24px;
    width: 100%;
    margin-bottom: 8px;
    padding: 0;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

export const TitleFinish = styled.h4`
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: ${colors.tertiaryColor};
  margin-bottom: 16px;
  margin-top: 32px;
`
export const ParagraphFinish = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.tertiaryColor};
  margin-bottom: 24px;
`
