import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initialState = {
  isDarkMode: false,
  isLoggedIn: true,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { toggleDarkMode, setLoggedIn } = slice.actions;

export default configureStore({
  reducer: slice.reducer,
});