import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProductCartType = {
  title: string
  image: string
  preco: number
  id: number
}

type ProductCart = {
  itens: ProductCartType[]
  precoTotal: number
}

const initialState: ProductCart = {
  itens: [],
  precoTotal: 0
}

const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductCartType>) => {
      const itemAtual = action.payload
      const verificado = state.itens.find((item) => item.id === itemAtual.id)
      if (!verificado) {
        state.itens = [...state.itens, itemAtual]
        state.precoTotal += itemAtual.preco
      }
    },
    removeCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        const itemRemovido = state.itens[itemIndex]
        state.itens.splice(itemIndex, 1)
        state.precoTotal -= itemRemovido.preco
      }
    },
    clearCart: (state) => {
      state.itens = []
      state.precoTotal = 0
    }
  }
})

export default CartReducer.reducer
export const { addCart, removeCart, clearCart } = CartReducer.actions
