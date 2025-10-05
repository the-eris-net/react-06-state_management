import { DARK_MODE, LOGGED_IN } from "../actions";

const initialState = { isDarkMode: false, isLoggedIn: true };

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case LOGGED_IN:
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    default:
      return state;
  }
}