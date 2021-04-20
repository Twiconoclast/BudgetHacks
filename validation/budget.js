const Validator = require('validator');
const validNum = require('./valid-num');


module.exports = function validateBudgetInput(data){
  let errors = {};

  data.budget.home = validNum(data.budget.home) ? data.budget.home: "";
  data.budget.savings = validNum(data.budget.savings) ? data.budget.savings: "";
  data.budget.transportation = validNum(data.budget.transportation) ? data.budget.transportation: "";
  data.budget.personalCare = validNum(data.budget.personalCare) ? data.budget.personalCare: "";
  data.budget.foodAndDining = validNum(data.budget.foodAndDining) ? data.budget.foodAndDining: "";
  data.budget.shopping = validNum(data.budget.shopping) ? data.budget.shopping: "";
  data.budget.entertainment = validNum(data.budget.entertainment) ? data.budget.entertainment: "";
  data.budget.miscellaneous = validNum(data.budget.miscellaneous) ? data.budget.miscellaneous: "";
  data.budget.debt = validNum(data.budget.debt) ? data.budget.debt: "";

  const total = []

  if (Validator.isFloat(data.budget.home, {min: 0 , max: 1})){
    total.push(data.budget.home)
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.savings, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.transportation, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.personalCare, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  
  }if (Validator.isFloat(data.budget.foodAndDining, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.shopping, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.personalCare, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.miscellaneous, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }
  if (Validator.isFloat(data.budget.debt, {min: 0 , max: 1})){
    errors.budget = "Must be a decimal from 0 to 1"
  }

  if (total.reduce((amt, acc)=> amt + acc) === 1){
    errors.budget = 'Total needs to be 1'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}