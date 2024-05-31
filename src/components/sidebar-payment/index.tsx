import { useDispatch, useSelector } from 'react-redux'
import * as S from '../../styles'
import Button from '../button'
import { ContainerPayment } from './styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import { RootReducer } from '../../store'

const paraReal = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

const SidebarPayment = () => {
  const dispatch = useDispatch()
  function sidebarChange(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
  }
  const { precoTotal } = useSelector((state: RootReducer) => state.cart)

  return (
    <ContainerPayment>
      <h4>Pagamento - Valor a pagar {paraReal(precoTotal)}</h4>
      <S.FormDeliveryAndPayment>
        <S.DeliveryAndPaymentLabel htmlFor="cardName">
          Nome do cartão
        </S.DeliveryAndPaymentLabel>
        <S.DeliveryAndPaymentInput type="text" id="cardName" />
        <S.CardInfoContainer>
          <div>
            <S.DeliveryAndPaymentLabel htmlFor="numberCard">
              Numero do cartão
            </S.DeliveryAndPaymentLabel>
            <S.DeliveryAndPaymentInput type="number" id="numberCard" />
          </div>

          <S.InfoContainer>
            <S.DeliveryAndPaymentLabel htmlFor="CVV">
              CVV
            </S.DeliveryAndPaymentLabel>
            <S.DeliveryAndPaymentInput type="number" id="CVV" />
          </S.InfoContainer>
        </S.CardInfoContainer>
        <S.DeliveryAndPaymentUl>
          <li>
            <S.DeliveryAndPaymentLabel htmlFor="dueMonth">
              Mês de vencimento
            </S.DeliveryAndPaymentLabel>
            <S.DeliveryAndPaymentInput type="text" id="dueMonth" />
          </li>
          <li>
            <S.DeliveryAndPaymentLabel htmlFor="dueYear">
              Ano de vencimento
            </S.DeliveryAndPaymentLabel>
            <S.DeliveryAndPaymentInput type="number" id="dueYear" />
          </li>
        </S.DeliveryAndPaymentUl>
      </S.FormDeliveryAndPayment>

      <Button clicked={() => sidebarChange('finish')}>
        Finalizar pagamento
      </Button>
      <Button clicked={() => sidebarChange('delivery')}>
        Voltar para edição de endereço
      </Button>
    </ContainerPayment>
  )
}
export default SidebarPayment
