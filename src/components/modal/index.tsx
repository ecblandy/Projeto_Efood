import { useDispatch, useSelector } from 'react-redux'
// COMPONENTS
import Button from '../button'
// UTILS
import { RootReducer } from '../../store'
import { addCart } from '../../store/reducer/cart'
import closeButton from '../../assets/img/close1.png'
import * as S from './styles'
import { addProduct } from '../../store/reducer/payment'

type Props = {
  onClose: (value: boolean) => void
}

const Modal = ({ onClose }: Props) => {
  const dispatch = useDispatch()
  const { currentProduct } = useSelector(
    (state: RootReducer) => state.modalOrSidebar
  )

  if (!currentProduct) {
    return <h2>Carregando...</h2>
  }

  function addToCart(item: PropsProduct) {
    const product = {
      id: item.id,
      nome: item.nome,
      descricao: item.descricao,
      foto: item.foto,
      preco: item.preco
    }
    dispatch(addCart(product))
    dispatch(addProduct({ id: item.id, price: item.preco }))
  }

  return (
    <S.ModalCard>
      <S.ImageDivModal>
        <img src={currentProduct.foto} alt="Modal Image" />
      </S.ImageDivModal>
      <S.ModalInfo>
        <S.TitleModal>{currentProduct.nome}</S.TitleModal>
        <S.DescriptionModal>
          {currentProduct.descricao}
          <br /> <br /> Serve de: {currentProduct.porcao}
        </S.DescriptionModal>
        <Button type="button" clicked={() => addToCart(currentProduct)}>
          Adicionar ao carrinho - R$ {currentProduct.preco}
        </Button>
      </S.ModalInfo>

      <S.CloseModal
        onClick={() => onClose(false)}
        src={closeButton}
        alt="Close Modal"
      />
    </S.ModalCard>
  )
}

export default Modal
