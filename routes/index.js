var express = require('express');
var router = express.Router();

const passport = require('passport');

router.get('/auth/google', passport.authenticate(
  
  'google',
  {
   
    scope: ['profile', 'email'],
  }
))

router.get('/', function(req, res, next) {
  res.redirect('/todos');
});


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/todos',
    failureRedirect: '/todos'
  }
));


router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/todos');
  });
});


module.exports = router;
