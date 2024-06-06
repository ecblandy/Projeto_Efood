// import { useState } from 'react'
import * as S from './styles'
import Product from '../product'
import { useGetRestaurantsQuery } from '../../services/api'
const Products = () => {
  const { data } = useGetRestaurantsQuery()
  if (!data) {
    return <h2>Carregando ...</h2>
  }
  return (
    <S.SectionContainer>
      <S.ProductContainer>
        {data.map(
          ({ cardapio: [{ descricao, foto, id, nome, preco, porcao }] }) => (
            <Product
              key={id}
              id={id}
              foto={foto}
              nome={nome}
              descricao={descricao}
              preco={preco}
              porcao={porcao}
            />
          )
        )}
      </S.ProductContainer>
    </S.SectionContainer>
  )
}
export default Products
