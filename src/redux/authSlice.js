import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  email:'',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setMail: (state, action) => {
      state.email = action.payload;
    },
    clearMAil: (state) => {
      state.email = '';  
    },
}});

export const { setToken, clearToken, setMail, clearMAil } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectMail = (state) => state.auth.email;
export default authSlice.reducer;
