// import { useState } from 'react'
import { useSelector } from 'react-redux'
// COMPONENTS
import Product from '../product'
// UTILS
import { RootReducer } from '../../store'
import * as S from './styles'

const Products = () => {
  const { cardapio } = useSelector((state: RootReducer) => state.getInfosBanner)
  if (!cardapio) {
    return <h1>Carregando...</h1>
  }
  return (
    <S.SectionContainer>
      <S.ProductContainer>
        {cardapio.map((item) => (
          <>
            {console.log(item)}
            <Product
              id={item.id}
              descricao={item.descricao}
              foto={item.foto}
              nome={item.nome}
              porcao={item.porcao}
              preco={item.preco}
              key={item.id}
            />
          </>
        ))}
      </S.ProductContainer>
    </S.SectionContainer>
  )
}
export default Products
