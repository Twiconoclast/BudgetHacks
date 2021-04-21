const Validator = require('validator');
const validText = require('./valid-text');
const validNum = require('./valid-num');
const validCategory = require('./valid-category')


module.exports = function validateTransactionInput(data) {
  let errors = {};
  console.log(data)
  data.amount = validNum(data.amount) ? data.amount : '';
  data.category = validCategory(data.category) ? data.category : '';
  data.description = validText(data.description) ? data.description : '';



  if (!Validator.isFloat(data.amount)) {
    errors.amount = 'Amount field is required';
  }

  if (!Validator.isDate(data.date)) {
    errors.date = 'Date field is required';
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category must be income, home, savings, transportation, personalCare, foodAndDining, shopping, entertainment, miscellaneous, or debt";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};