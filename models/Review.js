const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  author_id: {
    type:  Schema.Types.ObjectId,
    ref: 'users'
  },
  listing_id: {
    type: Schema.Types.ObjectId,
    ref: 'listings'
  },
  review: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  reviewer_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("reviews", ReviewSchema);
module.exports = Review;
