const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.fullname = validText(data.fullname) ? data.fullname : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.industry = validText(data.industry) ? data.industry : '';
    data.experience = validText(data.experience) ? data.experience : '';

    if (Validator.isEmpty(data.fullname)) {
        errors.fullname = 'Full name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.industry)) {
        errors.industry = 'Industry field is required';
    }

    if (Validator.isEmpty(data.experience)) {
        errors.experience = 'Experience field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};