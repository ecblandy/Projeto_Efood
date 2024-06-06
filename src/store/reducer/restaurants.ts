import { createSlice } from '@reduxjs/toolkit'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

type RestaurantType = {
  restaurants: Restaurant[]
}

const initialState: RestaurantType = {
  restaurants: []
}

const RestaurantReducer = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {}
})

export default RestaurantReducer.reducer
