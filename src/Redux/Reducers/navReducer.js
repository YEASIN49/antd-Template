import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isNavCollapsed: false,
  selectedKeys: [ 'dashboard' ],
  keyItem: '1',
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setIsNavCollapsed: (state, action) => {
      state.isNavCollapsed = action.payload
    },
    setSelectedKeys: (state, action) => {
      state.selectedKeys = action.payload
    },
    setItem: (state, action) => {
        console.log("ENTYERED")
      state.keyItem = action.payload
    }
  }
})

export const {setItem, setIsNavCollapsed, setSelectedKeys } = navSlice.actions
export default navSlice.reducer