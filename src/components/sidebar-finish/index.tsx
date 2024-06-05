import { Link } from 'react-router-dom'
import Button from '../button'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import {
  closeModal,
  openOrCloseSidebar
} from '../../store/reducer/modal-and-sidebar'
import { clearCart } from '../../store/reducer/cart'

const SidebarFinish = () => {
  const dispatch = useDispatch()
  function sidebarChange(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
    dispatch(clearCart())

    dispatch(openOrCloseSidebar({ sidebarIsOpen: false }))
    dispatch(closeModal({ modalIsOpen: false }))
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
      <Button>
        <Link onClick={() => sidebarChange('cart')} to="/">
          Concluir
        </Link>
      </Button>
    </S.ContainerFinish>
  )
}
export default SidebarFinish
