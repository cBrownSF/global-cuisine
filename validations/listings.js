const Validator = require("validator");
const validText = require("./valid-text");
const validArray = require("./valid-array");

module.exports = function validateListingInput(data){
    let errors = {};

    data.title = validText(data.title) ? data.title : "";

     if (Validator.isEmpty(data.title)) {
       errors.title = "Title is required";
     }

    data.ingredients = validArray(data.ingredients) ? data.ingredients : [];

      if(data.ingredients.length === 0){
          errors.ingredients = "Ingredients are required"
      }

    data.author_name = validText(data.author_name) ? author_name : "";

     if (Validator.isEmpty(data.author_name)) {
       errors.author_name = "Author is required";
     }

    data.difficulty = validText(data.difficulty) ? data.difficulty : "";

      if (Validator.isEmpty(data.difficulty)) {
        errors.difficulty = "Difficulty is required";
      }

    data.instruction = validArray(data.instruction) ? data.instruction : [];

       if (data.instruction.length === 0) {
         errors.instruction = "Instruction are required";
       }

    data.servings = validText(data.servings) ? data.servings : "";

     if (Validator.isEmpty(data.servings)) {
       errors.servings = "Serving size is required";
     }

    data.details = validText(data.details) ? data.details : "";

     if (Validator.isEmpty(data.details)) {
       errors.details = "Details are required";
     }    

      data.picture = validText(data.picture) ? data.picture : "";

      if (Validator.isEmpty(data.picture)) {
        errors.picture = "Picture is required";
      }   

     return {
         errors, 
         isValid: Object.keys(errors).length === 0
     }

}
