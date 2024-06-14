import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// COMPONENTS
import Button from '../button'
// UTILS
import * as S from './styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import {
  closeModal,
  openOrCloseSidebar
} from '../../store/reducer/modal-and-sidebar'
import { clearCart } from '../../store/reducer/cart'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

const SidebarFinish = () => {
  const dispatch = useDispatch()
  const { products, delivery, payment } = useSelector(
    (state: RootReducer) => state.payment
  )
  const [purchase] = usePurchaseMutation()
  function sidebarChange(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
    dispatch(clearCart())
    dispatch(openOrCloseSidebar({ sidebarIsOpen: false }))
    dispatch(closeModal({ modalIsOpen: false }))
    postProduct()
  }

  function postProduct() {
    purchase({
      products,
      delivery,
      payment
    })
  }
  return (
    <S.ContainerFinish>
      <S.TitleFinish>Pedido Realizado</S.TitleFinish>
      <S.ParagraphFinish>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
        <br />
        <br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
        <br />
        <br />
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        <br />
        <br />
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.ParagraphFinish>
      <Button type="button">
        <Link onClick={() => sidebarChange('cart')} to="/">
          Concluir
        </Link>
      </Button>
    </S.ContainerFinish>
  )
}
export default SidebarFinish
