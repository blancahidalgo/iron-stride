const router = require('express').Router();

const withAuth = require('../utils/auth')




router.get('/login', (req, res) => {
  if (req.session.logged_in) {
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
  if (!req.session.logged_in){
    res.redirect('/login');
    console.log('redirected to /login')
    return;
  }
  res.render('profile', {
    logged_in: req.session.logged_in
  });
})


module.exports = router;
