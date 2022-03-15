const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'videos'
  },
  positive: {
    type: String,
    required: true
  },
  negative: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);