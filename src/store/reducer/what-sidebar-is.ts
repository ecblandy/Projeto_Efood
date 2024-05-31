import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type currentSidebarType = 'cart' | 'delivery' | 'payment' | 'finish'

type SideBarState = {
  currentSidebar: currentSidebarType
}

const initialState: SideBarState = {
  currentSidebar: 'cart'
}

const currentSidebarReducer = createSlice({
  name: 'currentSidebar',
  initialState,
  reducers: {
    alteraSidebar: (state, action: PayloadAction<SideBarState>) => {
      const sidebarType = action.payload.currentSidebar
      switch (sidebarType) {
        case 'cart':
          state.currentSidebar = sidebarType
          break
        case 'delivery':
          state.currentSidebar = sidebarType
          break
        case 'payment':
          state.currentSidebar = sidebarType
          break
        case 'finish':
          state.currentSidebar = sidebarType
      }
    }
  }
})

export default currentSidebarReducer.reducer
export const { alteraSidebar } = currentSidebarReducer.actions
