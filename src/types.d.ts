declare interface PropsProduct {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare interface ProductCartType
  extends Omit<PropsProduct, 'porcao' | 'descricao'> {}

declare type Product = {
  id: number
  price: number
}

declare interface PurchasePayload {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare interface StatePurchase extends PurchasePayload {
  orderId: string
}

declare type DeliveryPayload = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}

declare type PaymentPayload = {
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
