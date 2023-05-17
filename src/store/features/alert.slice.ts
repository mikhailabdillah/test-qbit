import { createSlice } from '@reduxjs/toolkit'

export type AlertState = {
  isActive: boolean
  message: null
}

const initialState: AlertState = {
  isActive: false,
  message: null,
}
const name = 'alert'
const alertDuration = 9000
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state = action.payload
      setTimeout(() => {
        state = initialState
      }, alertDuration)
    },
  },
})

export const alertActions = { ...slice.actions }
export const alertReducer = slice.reducer
