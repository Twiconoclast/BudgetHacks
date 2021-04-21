const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
                                  income: {type: Number},
                                  home: {type: Number},
                                  savings: {type: Number},
                                  transportation: {type: Number},
                                  personalCare: {type: Number},
                                  foodAndDining: {type: Number},
                                  shopping: {type: Number},
                                  entertainment: {type: Number},
                                  miscellaneous: {type: Number},
                                  debt: {type: Number}
                                }
                              )

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  budget: { 
    type: BudgetSchema
  }
  }, 
{timestamps: true})

module.exports = User = mongoose.model('User', UserSchema);
// module.exports = Budget = mongoose.model('Budget', BudgetSchema);
