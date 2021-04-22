const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  }
  }, 
{timestamps: true})

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema);