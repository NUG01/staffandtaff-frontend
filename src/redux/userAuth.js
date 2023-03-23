import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'userAuth',
  initialState: {
    value: false,
    userValue: {}
  },

  reducers: {
    setAuthData: (state, action) => {
      state.value = action.payload
    },

    setUserData: (state, action) => {
        state.userValue = action.payload
    }
  }
})

export const { setAuthData } = counterSlice.actions

export default counterSlice.reducer