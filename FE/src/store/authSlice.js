import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInFo : (state,action) => {
      state.userInfo= action.payload
    },
    loginSetState: (state) => {
      state.isLogin = true;
    },
    logoutSetState: (state) => {
      state.isLogin = false;
    },
    AutoLogin: () => {
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSetState, logoutSetState,setUserInFo } = authSlice.actions;

export default authSlice.reducer;
