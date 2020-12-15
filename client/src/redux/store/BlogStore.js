import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "../reducers";

const initState = {

    user: {
        token: null,
        userId: null,

    },
    auth: {
        loading: false,
        isAuthenticated: false,

    },
    post: {
        home: {posts: [], isEmitted: true},
        found: {posts: [], isEmitted: true},
        lost: {posts: [], isEmitted: true},
        hotels: {posts: [], isEmitted: true},
        walking: {posts: [], isEmitted: true},
        fostering: {posts: [], isEmitted: true},
        vethelp: {posts: [], isEmitted: true},

    },
    link: {
        nextLink: '/home'
    }


};

// if (process.env.NODE_ENV === 'production') {
//     const store = createStore(
//         rootReducer,
//         initState,
//         applyMiddleware(thunk)
//     )
// } else {
//     const {composeWithDevTools} = require("redux-devtools-extension");
//     const logger = require('redux-logger');
const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
)
// }

export default store;
