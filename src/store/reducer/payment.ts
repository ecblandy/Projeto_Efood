import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StatePurchase = {
  products: [],
  delivery: {
    receiver: '',
    address: {
      city: '',
      complement: '',
      description: '',
      number: 0,
      zipCode: ''
    }
  },
  payment: {
    card: {
      code: 0,
      name: '',
      number: '',
      expires: {
        month: 0,
        year: 0
      }
    }
  },
  orderId: ''
}

const paymentReducer = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addDelivery: (state, action: PayloadAction<DeliveryPayload>) => {
      const receiver = action.payload.delivery.receiver
      const city = action.payload.delivery.address.city
      const complement = action.payload.delivery.address.complement
      const description = action.payload.delivery.address.description
      const zipCode = action.payload.delivery.address.zipCode
      const number = action.payload.delivery.address.number
      state.delivery.receiver = receiver
      state.delivery.address.city = city
      state.delivery.address.complement = complement
      state.delivery.address.description = description
      state.delivery.address.number = number
      state.delivery.address.zipCode = zipCode
    },
    addPayment: (state, action: PayloadAction<PaymentPayload>) => {
      const cardName = action.payload.payment.card.name
      const cardCode = action.payload.payment.card.code
      const cardNumber = action.payload.payment.card.number
      const expiresMonth = action.payload.payment.card.expires.month
      const expiresYear = action.payload.payment.card.expires.year
      state.payment.card.name = cardName
      state.payment.card.code = cardCode
      state.payment.card.number = cardNumber
      state.payment.card.expires.month = expiresMonth
      state.payment.card.expires.year = expiresYear
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const id = action.payload.id
      const price = action.payload.price
      state.products = [...state.products, { id, price }]
    },
    addOrder: (state, action: PayloadAction<{ orderId: string }>) => {
      state.orderId = action.payload.orderId
    }
  }
})

export default paymentReducer.reducer
export const { addDelivery, addPayment, addProduct, addOrder } =
  paymentReducer.actions
