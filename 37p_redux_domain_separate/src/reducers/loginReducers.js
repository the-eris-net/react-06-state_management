import { LOGGED_IN } from "../actions";

const initialState = { isLoggedIn: true };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    default:
      return state;
  }
}