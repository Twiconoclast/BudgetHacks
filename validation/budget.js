const Validator = require('validator');
const validNum = require('./valid-num');


module.exports = function validateBudgetInput(data) {
  let errors = {};

  data.income = validNum(data.income) ? String(data.income) : "";
  data.home = validNum(data.home) ? String(data.home) : "";
  data.savings = validNum(data.savings) ? String(data.savings): "";
  data.transportation = validNum(data.transportation) ? String(data.transportation): "";
  data.personalCare = validNum(data.personalCare) ? String(data.personalCare): "";
  data.foodAndDining = validNum(data.foodAndDining) ? String(data.foodAndDining): "";
  data.shopping = validNum(data.shopping) ? String(data.shopping): "";
  data.entertainment = validNum(data.entertainment) ? String(data.entertainment): "";
  data.miscellaneous = validNum(data.miscellaneous) ? String(data.miscellaneous): "";
  data.debt = validNum(data.debt) ? String(data.debt): "";


  if (!Validator.isFloat(data.income, {min: 0})){
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

// const data = {debt: 0.08,
//               entertainment: 0.05,
//               foodAndDining: 0.15,
//               home: 0.4,
//               income: 2000,
//               miscellaneous: 0.02,
//               personalCare: 0.05,
//               savings: 0.12,
//               shopping: 0.05,
//               transportation: 0.08}

// validateBudgetInput(data);