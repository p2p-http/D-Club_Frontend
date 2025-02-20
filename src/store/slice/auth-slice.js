import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: null,
  isAuth: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, authToken } = action.payload;
      console.log("Action => ", action.payload);
      state.user = user;
      state.authToken = authToken;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.authToken = null;
      state.isAuth = false;
      state.tempUser = null;
    },
  }
})

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;