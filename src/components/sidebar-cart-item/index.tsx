import * as S from './styles'
import lixeira from '../../assets/img/lixeira-de-reciclagem 1.png'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../store/reducer/cart'
import { paraReal } from '../sidebar-payment'

export type Props = {
  foto: string
  nome: string
  preco: number
  id: number
}

const SidebarItem = ({ foto, nome, id, preco }: Props) => {
  const dispatch = useDispatch()
  function removeItem() {
    dispatch(removeCart({ id: id }))
  }
  return (
    <S.ModalCartItem key={id}>
      <S.ProductImage src={foto} alt="" />
      <div>
        <h4>{nome}</h4>
        <span>{paraReal(preco)}</span>

        <S.LixeiraCartItem onClick={() => removeItem()} src={lixeira} alt="" />
      </div>
    </S.ModalCartItem>
  )
}
export default SidebarItem
