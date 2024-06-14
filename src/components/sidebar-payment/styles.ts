import styled from 'styled-components'
import { colors } from '../../styles'

type InputProps = {
  maxWidth?: string
  propsmargin?: string
}

export const Container = styled.div`
  padding: 0px 8px;
`

export const ContainerGroup = styled.div`
  display: flex;
`

export const InputGroup = styled.div<InputProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  width: 100%;
  margin-left: ${(props) => props.propsmargin || 'auto'};

  label {
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.footer};
  }

  input {
    width: 100%;
    margin: 8px 0;
    height: 32px;
  }
`

export const Form = styled.form`
  > div {
    margin-bottom: 24px;
    h4 {
      font-size: 16px;
      line-height: 18px;
      font-weight: 700;
      color: ${colors.tertiaryColor};
      margin-bottom: 16px;
      margin-top: 64px;
    }
  }

  button {
    background-color: ${colors.footer};
    color: ${colors.backgroundColor};
    width: 100%;
    margin: 0;
    margin-bottom: 8px;
  }
`
