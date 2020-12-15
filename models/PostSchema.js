const {Schema, Types} = require('mongoose');

const postSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'User' },
    userName: { type: String, required: true },
    userAvatar: { type: String },
    time: { type: Date, required: true },
    postText: { type: String },
    isFavorite: {type: Boolean, default: false},
    photos: [{
        type: String
    }]
})

module.exports = postSchema;
