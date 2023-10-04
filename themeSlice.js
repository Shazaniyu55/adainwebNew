import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toogleTheme: (state)=>(state === 'light'? 'dark': 'light'),
    }
})

export const {toogleTheme}= themeSlice.actions
export default themeSlice.reducer