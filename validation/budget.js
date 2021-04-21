const Validator = require('validator');
const validNum = require('./valid-num');


module.exports = function validateBudgetInput(data){
  let errors = {};

  data.income = validNum(data.income) ? data.income : "";
  data.home = validNum(data.home) ? data.home : "";
  data.savings = validNum(data.savings) ? data.savings: "";
  data.transportation = validNum(data.transportation) ? data.transportation: "";
  data.personalCare = validNum(data.personalCare) ? data.personalCare: "";
  data.foodAndDining = validNum(data.foodAndDining) ? data.foodAndDining: "";
  data.shopping = validNum(data.shopping) ? data.shopping: "";
  data.entertainment = validNum(data.entertainment) ? data.entertainment: "";
  data.miscellaneous = validNum(data.miscellaneous) ? data.miscellaneous: "";
  data.debt = validNum(data.debt) ? data.debt: "";

  if (!Validator.isFloat(data.income, {min: Number(0)})){
    errors.income = "Income must equal to or greater than 0.00"
  }
  
  if (!Validator.isFloat(data.home, {min: 0 , max: 1})){
    errors.home = "Home must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.savings, {min: 0 , max: 1})){
    errors.savings = "Saving must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.transportation, {min: 0 , max: 1})){
    errors.transportation = "Transportation must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.personalCare, {min: 0 , max: 1})){
    errors.personalCare = "Personal Care must be a percent between 0% to 100%"
  
  }if (!Validator.isFloat(data.foodAndDining, {min: 0 , max: 1})){
    errors.foodAndDining = "Food and Dining must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.shopping, {min: 0 , max: 1})){
    errors.shopping = "Shopping must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.entertainment, {min: 0 , max: 1})){
    errors.entertainment = "Entertainment must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.miscellaneous, {min: 0 , max: 1})){
    errors.miscellaneous = "Miscellaneous must be a percent between 0% to 100%"
  }
  if (!Validator.isFloat(data.debt, {min: 0 , max: 1})){
    errors.debt = "Debt must be a percent between 0% to 100%"
  }
  
  let total = Number(data.entertainment) + Number(data.debt) + Number(data.miscellaneous) + Number(data.personalCare) + Number(data.shopping) + Number(data.foodAndDining) + Number(data.transportation) + Number(data.savings) + Number(data.home)

  if (total !== 1){
    errors.budget = "Total needs to be 100%";
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}