import { createSlice } from '@reduxjs/toolkit'

export type PostingState = {
  id: string
  status: 0 | 1
  title: string
  content: string
}

const initialState: { post: PostingState[] } = {
  post: [],
}
const name = 'posting'
const slice = createSlice({
  name,
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.post.push(action.payload)
    },
    updateStatus: (state, action) => {
      state.post.map((post) => {
        if (post.id !== action.payload) {
          return post
        }

        return {
          ...post,
          status: !post.status,
        }
      })
    },
  },
})

export const postingActions = { ...slice.actions }
export const postingReducer = slice.reducer
