import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../themeSlice'

const Store = configureStore({
        reducer:{
            theme: themeReducer
        }
})
export default Store