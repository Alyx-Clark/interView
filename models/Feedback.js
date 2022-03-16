const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  userFullName: {
    type: String,
    required: true
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