import { configureStore } from '@reduxjs/toolkit'
import modalAndSidebar from './reducer/modal-and-sidebar'
import currentSidebar from './reducer/what-sidebar-is'
import cart from './reducer/cart'
const store = configureStore({
  reducer: {
    cart: cart,
    modalOrSidebar: modalAndSidebar,
    currentSidebar: currentSidebar
  }
})
export default store
export type RootReducer = ReturnType<typeof store.getState>
