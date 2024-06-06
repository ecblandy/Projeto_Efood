import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PropsProduct } from '../../components/product'

type Modal = {
  modalIsOpen: boolean
  sidebarIsOpen: boolean
  currentProduct: PropsProduct | null
}

const initialState: Modal = {
  modalIsOpen: false,
  sidebarIsOpen: false,
  currentProduct: null
}

const ModalAndSidebar = createSlice({
  name: 'modalAndSidebar',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ modalIsOpen: boolean; product: PropsProduct }>
    ) => {
      state.modalIsOpen = action.payload.modalIsOpen
      state.currentProduct = action.payload.product
      state.sidebarIsOpen = !action.payload.modalIsOpen
    },
    closeModal: (state, action: PayloadAction<{ modalIsOpen: boolean }>) => {
      state.modalIsOpen = action.payload.modalIsOpen
      state.currentProduct = null
    },
    openOrCloseSidebar: (
      state,
      action: PayloadAction<{ sidebarIsOpen: boolean }>
    ) => {
      state.sidebarIsOpen = action.payload.sidebarIsOpen
      state.modalIsOpen = !action.payload.sidebarIsOpen
    }
  }
})

export default ModalAndSidebar.reducer
export const { openModal, closeModal, openOrCloseSidebar } =
  ModalAndSidebar.actions
