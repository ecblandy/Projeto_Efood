import { styled, createGlobalStyle } from 'styled-components'

export const colors = {
  mainColor: '#fff',
  secondaryColor: '#4B4B4B',
  tertiaryColor: '#fff8f0',
  backgroundColor: '#E66767',
  footer: '#FFEBD9'
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

export const FormDeliveryAndPayment = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const DeliveryAndPaymentInput = styled.input`
  height: 32px;
  width: 100%;
  background-color: ${colors.tertiaryColor};
  color: ${colors.secondaryColor};
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
  color: ${colors.tertiaryColor};
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
