import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
  isLoggedIn: boolean
}
const initialState: UserState = {
  isLoggedIn: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin(state: {isLoggedIn: any}, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload
    },
  },
})

export const {userLogin} = userSlice.actions
export default userSlice.reducer
