// import { useState } from 'react'
import * as S from './styles'
import Product from '../product'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
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
