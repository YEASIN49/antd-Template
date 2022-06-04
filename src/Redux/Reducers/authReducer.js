import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: true,
  isValidating: false,
  token: null,
  user: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setIsValidating: (state, action) => {
      state.isValidating = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setIsAuthenticated, setIsValidating, setToken, setUser } = authSlice.actions
export default authSlice.reducer