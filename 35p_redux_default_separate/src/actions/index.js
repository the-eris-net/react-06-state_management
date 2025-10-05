export const DARK_MODE = 'DARK_MODE';
export const LOGGED_IN = 'LOGGED_IN';

const toggleDarkMode = () => {
  return { type: DARK_MODE };
}

const setLoggedIn = (isLoggedIn) => {
    return { type: LOGGED_IN, payload: { isLoggedIn } };
}

export { toggleDarkMode, setLoggedIn };