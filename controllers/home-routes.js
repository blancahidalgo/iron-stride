const router = require('express').Router();
const session = require('express-session');

const withAuth = require('../utils/auth')




router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  console.log('login in homeroute');
  res.render('login');
});

router.get('/signUp', (req,res) =>{
  res.render('signup');
})


router.get('/', (req,res) =>{
  if (!req.session.loggedIn){
    res.redirect('/login');
    console.log('redirected to /login')
    return;
  }
  res.render('profile')
})

module.exports = router;
