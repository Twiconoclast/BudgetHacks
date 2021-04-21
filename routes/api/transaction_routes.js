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

router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
   Transaction.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(transactions => res.json(transactions))
        .catch(err =>
            res.status(404).json({ notransactionsfound: 'No transactions found from this user' }
        )
    );
})

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Transaction.findById(req.params.id)
        .then(transaction => {
          if(req.user._id.equals(transaction.user)){
            res.json(transaction)
          }else{
            res.status(404).json({ notransactionfound: 'No transaction found from this ID' })
          }
          
        })
        .catch(err =>
            res.status(404).json({ notransactionfound: 'No transaction found from this ID' }
        )
    );
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Transaction.findByIdAndDelete(req.params.id, function(err, transaction){
    if(err){
      res.send("No transaction found from this ID");
    }else{
      res.send(transaction)
    };
  })
})

router.patch('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateTransactionInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Transaction.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    }
  )
})







module.exports = router;
