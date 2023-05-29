const router = require('express').Router();
// TODO: Import the custom middleware
// const withAuth = require('../utils/auth')
// GET all galleries for homepage
const { Workout, User, Category  } = require('../models');


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/signUp', (req,res) =>{
    res.render('signup');
    // res.render('addActivity');
});

router.get('/', async(req, res) => {
    if (!req.session.logged_in){
      res.redirect('/login');
      console.log('redirected to /login')
      return;
    }

    // logged in so req.session.user_id
    // then can pull in user info
      // first_name
      // last_name
      // email
    const userData = await User.findOne(
      {
        where:
         { id: req.session.user_id }
        }
      );
      let meUser = userData.get({ plain: true });


    // Then like we did at "workouts" route, pull in workouts
    // But we only need the first two workouts
    // Array.slice(0,2) // return array of 0-2 items

      const workoutData = await Workout.findAll(
        {
          where: {
            user_id: req.session.user_id
          }
        },{
        include: [{ model: User }, { model: Category }],
        // exclude
      });
  
      let workouts = workoutData.map((workout) => workout.get({ plain: true }));
      workouts = workouts.slice(0,2);

      let userInfo = {
        ...meUser,
        workouts
      }
      console.log(userInfo);

    
    res.render('profile', {
      logged_in: req.session.logged_in,
      userInfo
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
        res.render('profile', { users });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });


// For the all activities page
// /workout
router.get("/workout", async (req, res) => {
  if (!req?.session?.logged_in) {
    // res.render('login');
    res.redirect('/');
    return;
  }

  try {
    const workoutData = await Workout.findAll(
      {
        where: {
          user_id: req.session.user_id
        }
      },{
      include: [{ model: User }, { model: Category }],
      // exclude
    });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    res.render("activities-page", { workouts });
  } catch (err) {
    res.status(500).json(err);
  } // try

  });



module.exports = router;
