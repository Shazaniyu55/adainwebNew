import{createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const AdminSlice = createSlice({
    name: 'admin',
    initialState: {
      user: null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  export const { login, logout } = AdminSlice.actions;
  
  // selectors
  export const selectAdmin = (state) => state.user.user;
  
  export default AdminSlice.reducer;