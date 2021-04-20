const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');
const validateBudgetInput = require('../../validation/budget')

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        // Use the validations to send the error
        errors.username = 'Username already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          balance: req.body.balance,
          password: req.body.password,
          budget: {
            home: 0,
            savings: 0,
            transportation: 0,
            personalCare: 0,
            foodAndDining: 0,
            shopping: 0,
            entertainment: 0,
            miscellaneous: 0,
            debt: 0
          }
        })
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })     
  })

  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    console.log(errors);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
      .then(user => {
        if (!user) {
          return res.status(404).json({username: 'This user does not exist'});
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
          const payload = {id: user.id, name: user.name};

          jwt.sign(
            payload,
            keys.secretOrKey,
            {expiresIn: 3600},
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
            } else {
              return res.status(400).json({password: 'Incorrect password'});
        }
      })
    })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    balance: req.user.balance
  });
});



module.exports = router;