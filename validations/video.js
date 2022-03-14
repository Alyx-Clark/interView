const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateVideoInput(data) {
    let errors = {};

    data.question = validText(data.question) ? data.question : '';
    data.experience = validText(data.experience) ? data.experience : '';
    data.industry = validText(data.industry) ? data.industry : '';

    if (Validator.isEmpty(data.question)) {
        errors.question = 'Question field is required';
    }

    if (Validator.isEmpty(data.experience)) {
        errors.experience = 'Experience field is required';
    }

    if (Validator.isEmpty(data.industry)) {
        errors.industry = 'Industry field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};