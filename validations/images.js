const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateImageInput(data) {
  let errors = {};

  data.orginalname = validText(data.originalname) ? data.originalname : "";
  if (Validator.isEmpty(data.originalname)) {
    errors.details = "Picture is required";
  }    
}

