const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

/* GET post page. */
router.post('/sign-up', function(req, res, next) {
  var newUser = req.body;


  // TODO if user already exist
  User.create(newUser)
    .then(function(user) {
      res.json(user);
    }, function(err) {
      next(err);
    });
});

module.exports = router;
