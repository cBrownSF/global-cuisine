const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  author_name: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model("listing", ListingSchema);
module.exports = Listing;
