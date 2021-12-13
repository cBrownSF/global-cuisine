const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  liker_id: {
    type:  Schema.Types.ObjectId,
    ref: 'users'
  },
  listing_id: {
    type: Schema.Types.ObjectId,
    ref: 'listings'
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Like = mongoose.model("like", LikeSchema);
module.exports = Like;
