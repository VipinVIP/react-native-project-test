import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import userDetailsReducer from './userDetailsSlice'

export const store = configureStore({
  reducer: {
    userReducer,
    userDetailsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
