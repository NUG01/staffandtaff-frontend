import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobsData.js'

export default configureStore({
    reducer: {
        jobsData: jobsReducer,
    }
})