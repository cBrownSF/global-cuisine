const Validator = require('validator');
const validText = require('./valid-text');
const validInteger = require('./valid-integer');

module.exports = function validateListingInput(date) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.authername = validText(data.authername) ? data.authername : '';
    data.difficulty = validText(data.difficulty) ? data.difficulty : '';
    data.servings = validInteger(data.servings) ? data.servings : '';
    data.details = validText(data.details) ? data.details : '';
    data.ingredients = validText(data.ingredients) ? data.ingredients : '';
    data.instructions = validText(data.instructions) ? data.instructions : '';

    if(!Validator.isLength(data.title, {min: 5, max: 30})){
        errors.title = 'Title must be between 5 and 30 characters'
    }

    if(Validator.isEmpty(data.title)){
        errors.title = "title is required"
    }

    if(!Validator.isLength(data.authername, {min: 5, max: 30})){
        errors.authername = 'Authername must be between 5 and 30 characters'
    }

    if(Validator.isEmpty(data.authername)){
        errors.authername = "Authername is required"
    }

    if(Validator.isEmpty(data.difficulty)){
        errors.difficulty = "Difficulty level is required"
    }

    if(Validator.isEmpty(data.servings)){
        errors.servings = "Serving size is required"
    }

    if(Validator.isEmpty(data.details)){
        errors.details = "Recipe details are required"
    }

    if(Validator.isEmpty(data.ingredients)){
        errors.ingredients = "Please enter all of your recipes ingredients"
    }

    if(Validator.isEmpty(data.instructions)){
        errors.instructions = "Recipe instructions are required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}