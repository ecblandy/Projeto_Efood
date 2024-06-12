import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GetInfos = {
  titleBanner: string
  infoBanner: string
  imageBanner: string
  cardapio?: PropsProduct[]
}

const initialState: GetInfos = {
  titleBanner: '',
  infoBanner: '',
  imageBanner: '',
  cardapio: []
}

const GetInfosReducer = createSlice({
  name: 'getInfos',
  initialState,
  reducers: {
    getText: (state, action: PayloadAction<GetInfos>) => {
      state.infoBanner = action.payload.infoBanner
      state.titleBanner = action.payload.titleBanner
      state.imageBanner = action.payload.imageBanner
      state.cardapio = action.payload.cardapio
    }
  }
})

export default GetInfosReducer.reducer
export const { getText } = GetInfosReducer.actions
