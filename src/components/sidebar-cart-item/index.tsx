import { useDispatch } from 'react-redux'
// UTILS
import * as S from './styles'
import lixeira from '../../assets/img/lixeira-de-reciclagem 1.png'
import { removeCart } from '../../store/reducer/cart'
import { paraReal } from '../../utils'

const SidebarItem = ({ foto, nome, id, preco }: ProductCartType) => {
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
