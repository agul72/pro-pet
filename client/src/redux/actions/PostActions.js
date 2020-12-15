export const UPDATE_POSTS = 'UPDATE_POSTS';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const updatePosts = (postType, posts) => ({
    type: UPDATE_POSTS,
    payload: {postType, posts}
});

export const addNotification = (postType) => ({
    type: ADD_NOTIFICATION,
    payload: postType
});

export const removeNotification = (postType) => ({
    type: REMOVE_NOTIFICATION,
    payload: postType
});


