const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BudgetSchema = new Schema({
                                  editCounter: {type: Number},
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
  points: {
    type: Number,
    required: true
  },
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
  },
  prizes: {
    type: Object,
    required: true
  }
  }, 
{timestamps: true})

module.exports = User = mongoose.model('User', UserSchema);

