import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import loginReducer from "../features/login/loginSlice";
import postReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
    posts: postReducer,
  },
});

export default store;