import * as S from './styles'

import Modal from '../modal'
import ProductsType from '../../models/product-model'

import Button from '../button'
import ProductList from '../list-products/product-store'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeModal, openModal } from '../../store/reducer/modal-and-sidebar'

const Product = ({ image, description, title, id }: ProductsType) => {
  const { modalIsOpen, currentProduct } = useSelector(
    (state: RootReducer) => state.modalOrSidebar
  )

  const dispatch = useDispatch()

  function verificaProduto() {
    const produto = ProductList.find((item) => item.id === id)
    if (produto) {
      dispatch(openModal({ modalIsOpen: true, product: produto }))
    }
  }

  function closeModalHandler(value: boolean) {
    const change = { modalIsOpen: value }
    dispatch(closeModal(change))
  }

  return (
    <>
      <S.CardProduct>
        <img src={image} alt="" />
        <S.TitleCard>{title}</S.TitleCard>
        <S.DescriptionCard>{description}</S.DescriptionCard>
        {/* Corrigindo a chamada da função openModal */}
        <Button clicked={verificaProduto}>Mais detalhes</Button>
      </S.CardProduct>
      {modalIsOpen && currentProduct && (
        <Modal
          image={currentProduct.image}
          title={currentProduct.title}
          preco={currentProduct.preco}
          id={currentProduct.id}
          onClose={() => closeModalHandler(false)}
        />
      )}
    </>
  )
}

export default Product
