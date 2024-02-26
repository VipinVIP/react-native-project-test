import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserDetailsState {
  userID: string
  jwtToken: string
}
const initialState: UserDetailsState = {
  userID: '',
  jwtToken: '',
}
export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    userDetails(
      state: UserDetailsState,
      action: PayloadAction<UserDetailsState>,
    ) {
      state.userID = action.payload.userID
      state.jwtToken = action.payload.jwtToken
    },
  },
})

export const {userDetails} = userDetailsSlice.actions
export default userDetailsSlice.reducer
