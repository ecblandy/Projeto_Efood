// import { useState } from 'react'
import * as S from './styles'
import ProductList from './product-store'
import Product from '../product'
const Products = () => {
  return (
    <S.SectionContainer>
      <S.ProductContainer>
        {ProductList.map(({ id, image, title, description, preco }) => (
          <Product
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            preco={preco}
          />
        ))}
      </S.ProductContainer>
    </S.SectionContainer>
  )
}
export default Products
