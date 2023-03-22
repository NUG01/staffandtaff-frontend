import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'jobsData',
  initialState: {
    value: []
  },

  reducers: {
    pushData: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { pushData } = counterSlice.actions

export default counterSlice.reducer