const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const validateBudgetInput = require('../../validation/budget');


router.patch('/:id', passport.authenticate('jwt', {session: false}),
  (req, res) => {
    console.log(req)
  const { errors, isValid } = validateBudgetInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findByIdAndUpdate({_id: req.params.id}, {budget: req.body}, function(err, result){
      if(err){
        console.log(err)
        res.send(err);
      }else{
        console.log(result)
        res.send(result);
      }
  }
)


  })

  router.get('/:id', passport.authenticate('jwt', {session: false}),
  (req, res) => {

  User.findById({_id: req.params.id}).then((user) => (
    res.send(user.budget)
  ))})

  module.exports = router;