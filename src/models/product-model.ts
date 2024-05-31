class ProductsType {
  image: string
  title: string
  description: string
  id: number
  preco: number
  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    preco: number
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.id = id
    this.preco = preco
  }
}
export default ProductsType
