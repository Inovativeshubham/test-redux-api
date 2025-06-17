import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/reducers/counterSlice'
import userReducer from '../features/reducers/userSlice'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        user: userReducer,
    }
})

export default store;