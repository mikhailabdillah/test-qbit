import { createSlice } from '@reduxjs/toolkit'

export type PostingState = {
  id: string
  status: 0 | 1
  title: string
  content: string
}

const initialState: PostingState[] = []
const name = 'posting'
const slice = createSlice({
  name,
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
    // @ts-ignore
    updateStatus: (state, action) => {
      return state.flatMap((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            status: post.status ? 0 : 1,
          }
        }
      })
    },
  },
})

export const postingActions = { ...slice.actions }
export const postingReducer = slice.reducer
