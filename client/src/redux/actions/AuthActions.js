export const LOGIN_USER = 'LOGIN_USER;';
export const LOGOUT_USER = 'LOGOUT_USER;';
export const SET_LOADING = 'SET_LOADING;';

export const login = (user) => ({
        type: LOGIN_USER,
        payload: user
    });

export const logout = (user) => ({
    type: LOGOUT_USER,
    payload: user
})

export const setLoading = (bool) => ({
    type: SET_LOADING,
    payload: bool
})
