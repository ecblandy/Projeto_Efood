import { styled, createGlobalStyle } from 'styled-components'

export const Cores = {
  pink: '#E66767',
  corPrincipal: '#fff',
  footer: '#FFEBD9',
  body: '#fff8f0',
  corSecundaria: '#4B4B4B'
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
    background-color: ${Cores.body};
}
`

export const FormDeliveryAndPayment = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const DeliveryAndPaymentInput = styled.input`
  height: 32px;
  width: 100%;
  background-color: ${Cores.body};
  color: ${Cores.corSecundaria};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  margin: 8px 0px;
  border: none;
  padding: 8px;
`
export const DeliveryAndPaymentLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${Cores.body};
`
export const DeliveryAndPaymentUl = styled.ul`
  display: flex;
  gap: 34px;
`
export const CardInfoContainer = styled.div`
  display: flex;
  gap: 30px;
`
export const InfoContainer = styled.div`
  width: 87px;
`
