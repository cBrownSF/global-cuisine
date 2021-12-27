const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  author_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
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
  title: {
    type: String,
    required: true,
  },
  servings:{
    type: String,
    required: true
  },
  picture:{
    type: String,
    required: true
  },
  key:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model("listing", ListingSchema);
module.exports = Listing;