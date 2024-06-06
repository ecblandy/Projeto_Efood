import { useDispatch, useSelector } from 'react-redux'
import Button from '../button'
import SidebarItem from '../sidebar-cart-item'
import * as S from './styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import { useGetRestaurantsQuery } from '../../services/api'
import { RootReducer } from '../../store'

const SidebarCart = () => {
  const { data } = useGetRestaurantsQuery()
  const dispatch = useDispatch()
  const { precoTotal } = useSelector((state: RootReducer) => state.cart)
  const { itens } = useSelector((state: RootReducer) => state.cart)
  if (!data) {
    return <h2>ola</h2>
  }

  const paraReal = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  function deliverySidebar(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
  }

  return (
    <div>
      {itens.map(({ id, foto, nome, preco }) => (
        <SidebarItem key={id} foto={foto} nome={nome} id={id} preco={preco} />
      ))}

      <S.InfoContainer>
        <div>
          <S.InfoValue>Valor total</S.InfoValue>
          <S.InfoValue>{paraReal(precoTotal)}</S.InfoValue>
        </div>
        <Button clicked={() => deliverySidebar('delivery')}>
          Continuar com a entrega
        </Button>
      </S.InfoContainer>
    </div>
  )
}

export default SidebarCart
