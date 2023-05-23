const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// TODO: Import the custom middleware
const withAuth = require('../utils/auth')
// GET all galleries for homepage



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
