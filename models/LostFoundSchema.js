const {Schema, Types} = require('mongoose');

const lostFoundSchema = new Schema({
    animalKind: { type: String },
    animalSex: { type: String },
    animalBreed: { type: String },
    animalColor: { type: String },
    animalHeight: '',
    animalFeatures: { type: String },
    description: { type: String },
    location: { type: String },
    phone: { type: String },
    email: { type: String },
    facebook: { type: String },
    userId: { type: Types.ObjectId, ref: 'User' },
    userName: { type: String, required: true },
    userAvatar: { type: String },
    time: { type: Date, required: true },
    isFavorite: {type: Boolean, default: false},
    photos: [{
        type: String
    }]
})

module.exports = lostFoundSchema;
