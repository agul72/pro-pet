import {SET_LOADING} from "../actions/AuthActions";

export function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                loading: action.payload
            }
        default:
            return state;
    }
}
