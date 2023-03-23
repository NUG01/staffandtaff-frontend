import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from './jobsData.js'
import userReducer from './userData.js'
import userAuthReducer from './userAuth.js'

export default configureStore({
    reducer: {
        jobsData: jobsReducer,
        userData: userReducer,
        userAuthData: userAuthReducer,
    }
})