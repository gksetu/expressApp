var express = require('express');
var router = express.Router();
var login =require('./../public/javascripts/login.js'); 
var signup =require('./../public/javascripts/signup.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/loginPage', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res, next) {
    var uname= req.body.username;
    var psw=req.body.password;
    login.loginUser(uname,psw,res,next);
});
router.get('/register', function(req, res, next) {
  res.render('signup');
});
router.post('/signup', function(req, res, next) {
  var uname= req.body.username;
  var psw=req.body.password;
  var mail=req.body.email;
  signup.registerUser(uname,psw,mail,res,next);
});
module.exports = router;
