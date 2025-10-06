import { DARK_MODE } from "../actions";

const initialState = { isDarkMode: false };

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}