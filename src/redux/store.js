import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobsData.js'
import userReducer from './userData.js'

export default configureStore({
    reducer: {
        jobsData: jobsReducer,
        userData: userReducer,
    }
})