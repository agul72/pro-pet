import {combineReducers} from "redux";
import {userReducer} from "./UserReducer";
import {postReducer} from "./PostReducer";
import {authReducer} from "./AuthReducer";
import {linkReducer} from "./LinkReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    auth: authReducer,
    link: linkReducer
});
