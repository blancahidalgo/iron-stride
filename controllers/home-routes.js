const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// TODO: Import the custom middleware
const withAuth = require('../utils/auth')
// GET all galleries for homepage



router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signUp', (req,res) =>{
    res.render('signup');
});

router.get('/', (req, res) => {
    if (!req.session.logged_in){
      res.redirect('/login');
      console.log('redirected to /login')
      return;
    }
    res.render('profile', {
      logged_in: req.session.logged_in
    })
  });

router.get('/user/:id', async (req, res) => {
    try {
        const dbUserData = await User.findById(req.params.id, {
            include: [
                {
                    model: Workout,
                    attributes: ['name', 'time', 'distance']
                },
            ],
            exclude: [
                {
                    attributes: ['password'],
                },
            ],
        });
        const users = dbUserData.map((User) =>
        User.get({plain: true})
        );
        res.render('profile', {
            users,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

module.exports = router;
