import { useDispatch, useSelector } from 'react-redux'
// COMPONENTS

import SidebarDelivery from '../sidebar-delivery'
import SidebarCart from '../sidebar-cart'
import SidebarPayment from '../sidebar-payment'
import SidebarFinish from '../sidebar-finish'

// UTILS
import closeButton from '../../assets/img/close1.png'
import { openOrCloseSidebar } from '../../store/reducer/modal-and-sidebar'
import { RootReducer } from '../../store'
import * as S from './styles'

const SideBar = () => {
  const { currentSidebar } = useSelector(
    (state: RootReducer) => state.currentSidebar
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  function closeSidebar() {
    dispatch(openOrCloseSidebar({ sidebarIsOpen: false }))
  }
  return (
    <S.Sidebar>
      <S.CloseDiv>
        <S.CloseSidebar
          onClick={closeSidebar}
          src={closeButton}
          alt="botão fechar"
        />
      </S.CloseDiv>
      {items.length > 0 ? (
        <>
          {currentSidebar === 'delivery' && <SidebarDelivery />}
          {currentSidebar === 'cart' && <SidebarCart />}
          {currentSidebar === 'payment' && <SidebarPayment />}
          {currentSidebar === 'finish' && <SidebarFinish />}
        </>
      ) : (
        <S.TextNoItem>
          O carrinho está vazio, adicione pelo menos um produto para continuar a
          compra
        </S.TextNoItem>
      )}
    </S.Sidebar>
  )
}
export default SideBar
