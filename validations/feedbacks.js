const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateFeedbackInput(data) {
  let errors = {};

  data.positive = validText(data.positive) ? data.positive : '';
  data.negative = validText(data.negative) ? data.negative : '';

  if (!Validator.isLength(data.positive, { min: 1, max: 1000 })) {
    errors.text = 'Feedback must be less than 5000 characters';
  }

  if (!Validator.isLength(data.negative, { min: 1, max: 1000 })) {
    errors.text = 'Feedback must be less than 5000 characters';
  }

  if (Validator.isEmpty(data.positive)) {
    errors.text = 'Positive feedback must be provided';
  }

  if (Validator.isEmpty(data.negative)) {
    errors.text = 'Improvement feedback must be provided';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};