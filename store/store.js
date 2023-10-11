import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/slice/userSlice'
import adminReducer from '../store/slice/adminSlice'
const Store = configureStore({
        reducer:{
             user: userReducer,
             admin: adminReducer
        }
})
export default Store