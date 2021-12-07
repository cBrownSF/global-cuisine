const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    authorname: {
        type: String,
       required: true
    },
    difficulty: {
        type: String,
       required: true
    },
    servings: {
        type: Number,
       required: true
    },
    details: {
        type: String,
       required: true
    },
    ingredients: {
        type: String,
       required: true
    },
    instructions: {
        type: String,
       required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

 const Listing = mongoose.model('listing', ListingSchema);

 module.exports = Listing;