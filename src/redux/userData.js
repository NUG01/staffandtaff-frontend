import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'userData',
  initialState: {
    value: {}
  },

  reducers: {
    setData: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setData } = counterSlice.actions

export default counterSlice.reducer