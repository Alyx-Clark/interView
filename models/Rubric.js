const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RubricSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: 'videos'
  },
  professionalism: {
    type: Number,
    required: true
  },
  confidence: {
    type: Number,
    required: true
  },
  content: {
    type: Number,
    required: true
  },
  voice: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Rubric = mongoose.model('rubric', RubricSchema);
