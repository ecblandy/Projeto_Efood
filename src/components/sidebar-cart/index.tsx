import { useDispatch, useSelector } from 'react-redux'
import Button from '../button'
import { RootReducer } from '../../store'
import SidebarItem from '../sidebar-cart-item'
import { Props } from '../sidebar-cart-item'
import * as S from './styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'

const SidebarCart = () => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const valorTotal = itens.reduce((acc: number, item: Props) => {
    acc += item.preco
    return acc
  }, 0)

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
      {itens.map(({ image, title, id, preco }) => (
        <SidebarItem
          key={id}
          image={image}
          title={title}
          id={id}
          preco={preco}
        />
      ))}
      <S.InfoContainer>
        <div>
          <S.InfoValue>Valor total</S.InfoValue>
          <S.InfoValue>{paraReal(valorTotal)}</S.InfoValue>
        </div>
        <Button clicked={() => deliverySidebar('delivery')}>
          Continuar com a entrega
        </Button>
      </S.InfoContainer>
    </div>
  )
}

export default SidebarCart
