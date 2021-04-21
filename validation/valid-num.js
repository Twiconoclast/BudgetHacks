const validNum = num => {
  // let num_copy = (' ' + num).slice(1);
  // return typeof Number(num_copy) == 'number';
  return typeof num === 'number';
}

module.exports = validNum;