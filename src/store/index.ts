import { configureStore } from '@reduxjs/toolkit'
import modalAndSidebar from './reducer/modal-and-sidebar'
import currentSidebar from './reducer/what-sidebar-is'
import cart from './reducer/cart'
import getInfosReducer from './reducer/info-banner'
const store = configureStore({
  reducer: {
    cart: cart,
    modalOrSidebar: modalAndSidebar,
    currentSidebar: currentSidebar,
    getInfosBanner: getInfosReducer
  }
})
export default store
export type RootReducer = ReturnType<typeof store.getState>
