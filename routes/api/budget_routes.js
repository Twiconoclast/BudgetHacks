const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const validateBudgetInput = require('../../validation/budget');


router.patch('/:id', passport.authenticate('jwt', {session: false}),
  (req, res) => {

  const { errors, isValid } = validateBudgetInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findByIdAndUpdate({_id: req.params.id}, {budget: req.body}, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    }
  )


})

  module.exports = router;