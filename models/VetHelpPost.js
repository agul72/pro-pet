const {Schema, model} = require('mongoose');
const postSchema = require("./PostSchema");

const schema = new Schema(
    postSchema
)

module.exports = model('VetHelpPost', schema, 'vetHelpPosts');
