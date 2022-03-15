const Validator = require('validator');

module.exports = function validateRubricInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.professionalism)) {
    errors.text = 'Please provide a professionalim score';
  }

  if (Validator.isEmpty(data.confidence)) {
    errors.text = 'Please provide a confidence score';
  }

  if (Validator.isEmpty(data.content)) {
    errors.text = 'Please provide a content of answer score';
  }

  if (Validator.isEmpty(data.voice)) {
    errors.text = 'Please provide a quality of voice score';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};