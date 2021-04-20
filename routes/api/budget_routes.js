// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');
// const User = require('../../models/User');
// const budget = require('../../validation/budget');


// router.patch('/budget', passport.authenticate('jwt', {session: false}),
// (req, res) => {
// const { errors, isValid } = validateBudgetInput(req.body);
// if (!isValid) {
//   return res.status(400).json(errors);
// }
// const newBudget = new Budget ({
//                                 home: req.body.home,
//                                 savings: req.body.savings,
//                                 transportation: req.body.transportation,
//                                 personalCare: req.body.personalCare,
//                                 foodAndDining: req.body.foodAndDining,
//                                 shopping: req.body.shopping,
//                                 entertainment: req.body.entertainment,
//                                 miscellaneous: req.body.miscellaneous,
//                                 debt: req.body.debt
//                               })


// await newBudget.save()
// })

// module.exports = router;