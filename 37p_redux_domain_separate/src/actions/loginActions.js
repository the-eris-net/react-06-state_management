export const LOGGED_IN = 'LOGGED_IN';

export const setLoggedIn = (isLoggedIn) => {
    return { type: LOGGED_IN, payload: { isLoggedIn } };
}
