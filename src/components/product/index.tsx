import * as S from './styles'

import Modal from '../modal'
import Button from '../button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeModal, openModal } from '../../store/reducer/modal-and-sidebar'

export type PropsProduct = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Product = ({
  foto,
  descricao,
  nome,
  id,
  porcao,
  preco
}: PropsProduct) => {
  const { modalIsOpen, currentProduct } = useSelector(
    (state: RootReducer) => state.modalOrSidebar
  )

  const dispatch = useDispatch()

  function closeModalHandler(value: boolean) {
    const change = { modalIsOpen: value }
    dispatch(closeModal(change))
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 175) + '...'
    }
    return descricao
  }

  function verificaProduto({
    id,
    descricao,
    foto,
    nome,
    porcao,
    preco
  }: PropsProduct) {
    dispatch(
      openModal({
        modalIsOpen: true,
        product: { id, descricao, foto, nome, porcao, preco }
      })
    )
  }

  return (
    <>
      <S.CardProduct>
        <img src={foto} alt="" />
        <S.TitleCard>{nome}</S.TitleCard>
        <S.DescriptionCard>{getDescricao(descricao)}</S.DescriptionCard>

        <Button
          clicked={() =>
            verificaProduto({ id, descricao, foto, nome, porcao, preco })
          }
        >
          Mais detalhes
        </Button>
      </S.CardProduct>
      {modalIsOpen && currentProduct && (
        <Modal onClose={() => closeModalHandler(false)} />
      )}
    </>
  )
}

export default Product
