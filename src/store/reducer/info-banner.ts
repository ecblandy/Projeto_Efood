import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GetInfos = {
  titleBanner: string
  infoBanner: string[]
}

const initialState: GetInfos = {
  titleBanner: '',
  infoBanner: ['']
}

const GetInfosReducer = createSlice({
  name: 'getInfos',
  initialState,
  reducers: {
    getText: (state, action: PayloadAction<GetInfos>) => {
      state.infoBanner = action.payload.infoBanner
      state.titleBanner = action.payload.titleBanner
    }
  }
})

export default GetInfosReducer.reducer
export const { getText } = GetInfosReducer.actions
