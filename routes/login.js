var express = require('express');
var router = express.Router();
const User = require('../models/userModel');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        console.log('user yok');
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.authenticate(password)) {
        console.log('password yanlis');
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login1',
    failureFlash: true
  })
);

module.exports = router;
