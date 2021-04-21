const validCategory = str => {
  const categories = ["income", "home", "savings", "transportation", "personalCare", "foodAndDining", "shopping", "entertainment", "miscellaneous", "debt"];
  return typeof str === 'string' && str.trim().length > 0 && categories.includes(str);
}

module.exports = validCategory;