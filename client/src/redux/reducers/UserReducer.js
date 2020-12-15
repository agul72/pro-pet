import {
    LOGOUT,
    LOGIN,
} from "../actions/UserActions";

export function userReducer(state = {}, action) {
    switch (action.type) {

        case LOGIN:
            console.log('LOGIN_USER', action.payload)
            return {
                ...action.payload
            }

        case LOGOUT:
            console.log('LOGOUT_USER', action.payload)
            return { };

        default:
            return state;
    }
}
