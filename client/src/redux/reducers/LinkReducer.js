import {CHANGE_NEXT_LINK} from "../actions/LinkActions";

export function linkReducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_NEXT_LINK:
            return {
                nextLink: action.payload
            }
        default:
            return state;
    }
}
