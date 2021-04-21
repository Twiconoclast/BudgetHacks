const express = require('express');
const router = express.Router();
const passport = require('passport');
const Transaction = require('../../models/Transaction');
const validateTransactionInput = require('../../validation/transaction');

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateTransactionInput(req.body)

  if(!isValid){
    return res.status(400).json(errors);
  }
  
  const newTransaction = new Transaction({
    user: req.user.id,
    date: req.body.date,
    amount: req.body.amount,
    category: req.body.category,
    description: req.body.description
  });

  newTransaction.save().then(transaction => res.json(transaction));
});

module.exports = router;
