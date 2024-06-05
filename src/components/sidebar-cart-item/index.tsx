import Button from '../button'
import * as S from './styles'
import lixeira from '../../assets/img/lixeira-de-reciclagem 1.png'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../store/reducer/cart'

export type Props = {
  image: string
  title: string
  preco: number
  id: number
}

const SidebarItem = ({ image, title, id, preco }: Props) => {
  const dispatch = useDispatch()
  function removeItem() {
    dispatch(removeCart({ id: id }))
  }
  return (
    <S.ModalCartItem key={id}>
      <S.ProductImage src={image} alt="" />
      <div>
        <h4>{title}</h4>
        <span>{preco}</span>
      </div>
      <Button clicked={removeItem}>
        <S.LixeiraCartItem src={lixeira} alt="" />
      </Button>
    </S.ModalCartItem>
  )
}
export default SidebarItem
