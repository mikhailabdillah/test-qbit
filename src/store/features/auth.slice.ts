import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  user: {
    token: string
    isLogged: boolean
  }
}

const initialState: UserState = {
  user: localStorage.getItem('persist:root')
    ? JSON.parse(localStorage.getItem('persist:root') as string).auth
    : {
        isLogged: false,
        token: '',
      },
}
const name = 'auth'
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = {
        isLogged: false,
        token: '',
      }
    },
  },
})

export const authActions = { ...slice.actions }
export const authReducer = slice.reducer
