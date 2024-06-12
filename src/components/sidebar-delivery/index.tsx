import { useDispatch } from 'react-redux'
// COMPONENTS
import Button from '../button'
// UTILS
import * as S from '../../styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import { ContainerDelivery } from './styles'

const SidebarDelivery = () => {
  const dispatch = useDispatch()
  function sidebarChange(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
  }
  return (
    <ContainerDelivery>
      <h4>Entrega</h4>
      <S.FormDeliveryAndPayment>
        <S.DeliveryAndPaymentLabel htmlFor="name">
          Quem irá receber
        </S.DeliveryAndPaymentLabel>
        <S.DeliveryAndPaymentInput type="text" id="name" />

        <S.DeliveryAndPaymentLabel htmlFor="address">
          Endereço
        </S.DeliveryAndPaymentLabel>
        <S.DeliveryAndPaymentInput type="text" id="address" />

        <S.DeliveryAndPaymentLabel htmlFor="city">
          Cidade
        </S.DeliveryAndPaymentLabel>
        <S.DeliveryAndPaymentInput type="text" id="city" />

        <div>
          <S.DeliveryAndPaymentUl>
            <li>
              <S.DeliveryAndPaymentLabel htmlFor="cep">
                CEP
              </S.DeliveryAndPaymentLabel>
              <S.DeliveryAndPaymentInput type="number" name="cep" id="cep" />
            </li>
            <li>
              <S.DeliveryAndPaymentLabel htmlFor="number">
                Número
              </S.DeliveryAndPaymentLabel>
              <S.DeliveryAndPaymentInput
                type="number"
                name="numbe"
                id="number"
              />
            </li>
          </S.DeliveryAndPaymentUl>
        </div>

        <S.DeliveryAndPaymentLabel htmlFor="complement">
          Complemento(Opcional)
        </S.DeliveryAndPaymentLabel>
        <S.DeliveryAndPaymentInput type="text" id="complement" />
      </S.FormDeliveryAndPayment>
      <Button clicked={() => sidebarChange('payment')}>
        Continuar com o pagamento
      </Button>
      <Button clicked={() => sidebarChange('cart')}>
        Voltar para o carrinho
      </Button>
    </ContainerDelivery>
  )
}
export default SidebarDelivery
