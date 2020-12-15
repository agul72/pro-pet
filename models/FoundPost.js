const {Schema, model} = require('mongoose');
const lostFoundSchema = require("./LostFoundSchema");

const schema = new Schema(lostFoundSchema)

module.exports = model('FoundPost', schema, 'foundPosts');
