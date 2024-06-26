import { configureStore } from '@reduxjs/toolkit'
import modalAndSidebar from './reducer/modal-and-sidebar'
import currentSidebar from './reducer/what-sidebar-is'
import cart from './reducer/cart'
import getInfosReducer from './reducer/infos'
import RestaurantReducer from './reducer/restaurants'
import paymentReducer from './reducer/payment'
import API from '../services/api'
const store = configureStore({
  reducer: {
    cart: cart,
    modalOrSidebar: modalAndSidebar,
    currentSidebar: currentSidebar,
    getInfosBanner: getInfosReducer,
    restaurant: RestaurantReducer,
    payment: paymentReducer,
    [API.reducerPath]: API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware)
})
export default store
export type RootReducer = ReturnType<typeof store.getState>
