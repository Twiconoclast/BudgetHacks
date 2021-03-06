const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const validateBudgetInput = require('../../validation/budget');

// passport.authenticate('jwt', {session: false}),


router.patch('/:id', passport.authenticate('jwt', {session: false}),
  (req, res) => {

  const { errors, isValid } = validateBudgetInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findByIdAndUpdate({_id: req.params.id}, {budget: req.body}, {new: true}, function(err, user){
      if(err){
        res.send(err);
      } 
  })
    .then(user =>{
      
      if(user.budget.editCounter <= 1){
        user.points += 500;
        user.save();
      }
      res.send(user);
})
})

  router.get('/:id', passport.authenticate('jwt', {session: false}),
  (req, res) => {

  User.findById({_id: req.params.id}).then((user) => (
    res.send(user.budget)
  ))})

  module.exports = router;