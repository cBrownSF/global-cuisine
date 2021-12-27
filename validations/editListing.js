const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateListingInput(data, fileData) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  data.ingredients = validText(data.ingredients) ? data.ingredients : "";

  if (Validator.isEmpty(data.ingredients)) {
    errors.ingredients = "Ingredients are required";
  }

  data.name = validText(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  data.difficulty = validText(data.difficulty) ? data.difficulty : "";

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Level of difficulty is required";
  }

  data.instruction = validText(data.instruction) ? data.instruction : "";

  if (Validator.isEmpty(data.instruction)) {
    errors.instruction = "Instruction is required";
  }

  data.servings = validText(data.servings) ? data.servings : "";

  if (Validator.isEmpty(data.servings)) {
    errors.servings = "Serving size is required";
  }

  data.details = validText(data.details) ? data.details : "";

  if (Validator.isEmpty(data.details)) {
    errors.details = "Details are required";
  }

  // if (typeof (fileData) === "undefined") {
  //   errors.file = "Problem with sending data"
  //   console.log(typeof fileData)
  // }
  // if (fileData.mimetype === 'image/jpeg' || fileData.mimetype == 'image/png') {
  // } else {
  //   errors.picture = "Mime Type must be JPEG or PNG"
  // }
  // data.picture = validText(fileData.originalname) ? fileData.originalname : "";

  // if (Validator.isEmpty(fileData.originalname)) {
  //   errors.picture = "Picture is required";
  // }
  data.country = validText(data.country) ? data.country : "";
  if (Validator.isEmpty(data.country)) {
    errors.country = "Country is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

}
