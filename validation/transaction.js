const Validator = require('validator');
const validText = require('./valid-text');
const validNum = require('./valid-num');
const validCategory = require('./valid-category')


module.exports = function validateTransactionInput(data) {
  let errors = {};
  data.amount = validNum(data.amount) ? data.amount.toString(): '';
  data.category = validCategory(data.category) ? data.category : '';
  data.description = validText(data.description) ? data.description : '';

  // if (data.amount === 0) {
  //   errors.amount = 'Amount field is required and should be greater than zero';
  // }
  if (!Validator.isFloat(data.amount)) {
    errors.amount = 'Amount field is required and should be greater than zero';
  }

  if (data.amount.includes('.') && data.amount.split(".")[1].length > 2){
    errors.amount = 'Amount should be in the format 10.52';
  }

  if (!Validator.isDate(data.date)) {
    errors.date = ['Date field is required', data.date];
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