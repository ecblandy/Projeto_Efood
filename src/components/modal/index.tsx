import { useDispatch, useSelector } from 'react-redux'
// COMPONENTS
import Button from '../button'
// UTILS
import { RootReducer } from '../../store'
import { addCart } from '../../store/reducer/cart'
import closeButton from '../../assets/img/close1.png'
import * as S from './styles'

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
        <Button clicked={() => addToCart(currentProduct)}>
          Adicionar ao carrinho - R$ {currentProduct.preco}
        </Button>
      </S.ModalInfo>
      <Button clicked={() => onClose(false)}>
        <S.CloseModal src={closeButton} alt="Close Modal" />
      </Button>
    </S.ModalCard>
  )
}

export default Modal
