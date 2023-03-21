import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'jobsData',
  initialState: {
    value: []
  },

  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    pushData: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { pushData } = counterSlice.actions

export default counterSlice.reducer