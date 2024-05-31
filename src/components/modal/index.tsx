import * as S from './styles'
import Button from '../button'
import closeButton from '../../assets/img/close1.png'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/reducer/cart'
type Props = {
  preco: number
  image: string
  title: string
  id: number
  onClose: (value: boolean) => void
}

const Modal = ({ title, preco, image, onClose, id }: Props) => {
  const dispatch = useDispatch()
  function addProduct() {
    const Product = {
      title,
      image,
      preco,
      id
    }
    dispatch(addCart(Product))
  }
  return (
    <S.ModalCard>
      <S.ImageDivModal>
        <img src={image} alt="Modal Image" />
      </S.ImageDivModal>
      <S.ModalInfo>
        <S.TitleModal>{title}</S.TitleModal>
        <S.DescriptionModal>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
          <br /> <br /> Serve: de 2 a 3 pessoas
        </S.DescriptionModal>
        <Button clicked={addProduct}>Adicionar ao carrinho - R$ {preco}</Button>
      </S.ModalInfo>
      <Button clicked={() => onClose(false)}>
        <S.CloseModal src={closeButton} alt="Close Modal" />
      </Button>
    </S.ModalCard>
  )
}

export default Modal
