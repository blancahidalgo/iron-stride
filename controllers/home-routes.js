const router = require('express').Router();
// TODO: Import the custom middleware
// const withAuth = require('../utils/auth')
// GET all galleries for homepage
const { Workout, User, Category  } = require('../models');


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', (req, res) => {
  

  res.render('profile');
});

// For the all activities page
router.get("/workout", async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      include: [{ model: User }, { model: Category }],
      // exclude
    });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render("activities-page", { workouts });
  } catch (err) {
    res.status(500).json(err);
  }
  });


module.exports = router;
