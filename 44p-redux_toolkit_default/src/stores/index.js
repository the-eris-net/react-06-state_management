import { createStore } from 'redux';

const initialState = { isDarkMode: false, isLoggedIn: true };

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'LOGGED_IN':
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    default:
      return state;
  }
}

const store = createStore(myReducer);

export default store;