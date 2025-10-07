import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;