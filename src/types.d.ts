declare interface PropsProduct {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface ProductCartType extends Omit<PropsProduct, 'porcao' | 'descricao'> {}
