import { styled, createGlobalStyle } from 'styled-components'

type InputProps = {
  $maxWidth?: string
  $marginLeft?: string
}

export const colors = {
  mainColor: '#fff',
  secondaryColor: '#4B4B4B',
  tertiaryColor: '#fff8f0',
  backgroundColor: '#E66767',
  footer: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '430px'
}

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
  list-style: none;
}

body {
    background-color: ${colors.tertiaryColor};
}
`

export const CardInfoContainer = styled.div`
  display: flex;
  gap: 30px;
`
export const InfoContainer = styled.div`
  width: 87px;
`

export const Container = styled.div`
  padding: 0px 8px;
`

export const ContainerGroup = styled.div`
  display: flex;
`

export const InputGroup = styled.div<InputProps>`
  max-width: ${(props) => props.$maxWidth || 'auto'};
  width: 100%;
  margin-left: ${(props) => props.$marginLeft || 'auto'};

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
    padding: 8px;
    &.is-error {
      border: 2px solid red;
    }
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
