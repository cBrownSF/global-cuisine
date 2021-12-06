const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateListingInput(date) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.authername = validText(data.authername) ? data.authername : '';
    data.difficulty = validText(data.difficulty) ? data.difficulty : '';

    if(!Validator.isLength(data.text, {min: 5, max: 140})){
        errors.text = 'Tweet must be between 5 and 140 characters'
    }

    if(Validator.isEmpty(data.text)){
        errors.text = "text field is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}