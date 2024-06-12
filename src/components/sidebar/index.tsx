import { useDispatch, useSelector } from 'react-redux'
// COMPONENTS
import Button from '../button'
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
  const dispatch = useDispatch()
  function closeSidebar() {
    dispatch(openOrCloseSidebar({ sidebarIsOpen: false }))
  }
  return (
    <S.Sidebar>
      <S.CloseDiv>
        <Button clicked={closeSidebar}>
          <S.CloseSidebar src={closeButton} alt="" />
        </Button>
      </S.CloseDiv>
      {currentSidebar === 'delivery' && <SidebarDelivery />}
      {currentSidebar === 'cart' && <SidebarCart />}
      {currentSidebar === 'payment' && <SidebarPayment />}
      {currentSidebar === 'finish' && <SidebarFinish />}
    </S.Sidebar>
  )
}
export default SideBar
