import {ADD_NOTIFICATION, REMOVE_NOTIFICATION, UPDATE_POSTS} from "../actions/PostActions";

export function postReducer(state = {}, action) {

    switch (action.type) {
        case UPDATE_POSTS: {
            return ({
                ...state,
                [action.payload.postType]: {
                    ...state[action.payload.postType],
                    posts: action.payload.posts,
                    isEmitted: false
                }
            });
        }
        case ADD_NOTIFICATION: {
            return ({
                ...state,
                [action.payload.postType]: {
                    ...state[action.payload.postType],
                    isEmitted: true
                }
            })
        }
        case REMOVE_NOTIFICATION: {
            return ({
                ...state,
                [action.payload.postType]: {
                    ...state[action.payload.postType],
                    isEmitted: false
                }
            })
        }
        default:
            return state
    }
}

