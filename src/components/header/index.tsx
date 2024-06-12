import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// COMPONENTS
import Button from '../button'
import SideBar from '../sidebar'
// UTILS
import { RootReducer } from '../../store'
import { openOrCloseSidebar } from '../../store/reducer/modal-and-sidebar'
import logo from '../../assets/img/logo.png'
import * as S from './styles'

export type Props = {
  isprofilepage?: 'home' | 'profile'
}

const Header = ({ isprofilepage }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const { sidebarIsOpen } = useSelector(
    (state: RootReducer) => state.modalOrSidebar
  )

  const dispatch = useDispatch()
  function showSidebar() {
    dispatch(openOrCloseSidebar({ sidebarIsOpen: true }))
  }

  return (
    <S.HeaderContainer isprofilepage={isprofilepage}>
      {isprofilepage === 'profile' ? (
        <S.ProfileHeader className="container">
          <Link to="/">Restaurantes</Link>
          <S.EfoodLogo src={logo} alt="logo efood" />
          <Button clicked={showSidebar}>
            <S.SpanProfile>
              {itens.length} produto(s) no carrinho.
            </S.SpanProfile>
          </Button>
          {sidebarIsOpen && <SideBar />}
        </S.ProfileHeader>
      ) : (
        <S.HomeHeader>
          <S.EfoodLogo src={logo} alt="logo efood" />
          <S.SpanHome>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </S.SpanHome>
        </S.HomeHeader>
      )}
      {}
    </S.HeaderContainer>
  )
}

export default Header
