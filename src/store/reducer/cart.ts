import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductCartType = {
  title: string
  image: string
  preco: number
  id: number
}

type ProductCart = {
  itens: ProductCartType[]
}

const initialState: ProductCart = {
  itens: []
}

const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductCartType>) => {
      const itemAtual = action.payload
      const verificado = state.itens.find((item) => item.id === itemAtual.id)
      if (!verificado) {
        state.itens.push(itemAtual)
      }
    },
    removeCart: (state, action: PayloadAction<{ id: number }>) => {
      state.itens = [
        ...state.itens.filter((item) => item.id !== action.payload.id)
      ]
    }
  }
})

export default CartReducer.reducer
export const { addCart, removeCart } = CartReducer.actions
