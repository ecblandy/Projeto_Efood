import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductCart = {
  items: ProductCartType[]
  precoTotal: number
}

const initialState: ProductCart = {
  items: [],
  precoTotal: 0
}

const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductCartType>) => {
      const itemAtual = action.payload
      const verificado = state.items.find((item) => item.id === itemAtual.id)
      if (!verificado) {
        state.items = [...state.items, itemAtual]
        state.precoTotal += itemAtual.preco
      }
    },
    removeCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        const itemRemovido = state.items[itemIndex]
        state.items.splice(itemIndex, 1)
        state.precoTotal -= itemRemovido.preco
      }
    },
    clearCart: (state) => {
      state.items = []
      state.precoTotal = 0
    }
  }
})

export default CartReducer.reducer
export const { addCart, removeCart, clearCart } = CartReducer.actions
