const Validator = require("validator");
const validText = require("./valid-text");
const validArray = require("./valid-array");
const validInteger = require("./valid-integer");

module.exports = function validateReviewInput(data){
    let errors = {};

    data.review = validText(data.review) ? data.review : "";

     if (Validator.isEmpty(data.review)) {
       errors.review = "Review is required";
     }

     data.score = validInteger(data.score) ? data.score : 5;

     if(Validator.isEmpty(data.score)) {
         errors.score = "Please enter a score"
     }

    //  if(Validator.isFloat(data.score, {min:1, max:5})) {
    //      errors.score = "Score must be between 1 and 5"
    //  }

     data.reviewer_name = validText(data.reviewer_name) ? data.reviewer_name : "";

     if(Validator.isEmpty(data.reviewer_name)) {
         errors.reviewer_name = "Please enter a reviewer_name"
     }

     return {
         errors, 
         isValid: Object.keys(errors).length === 0
     }

}
