import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './features/auth.slice'
import { postingReducer } from './features/post.slice'

const rootReducer = combineReducers({
  auth: authReducer,
  posting: postingReducer,
})

export default rootReducer
