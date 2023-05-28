const router = require('express').Router();

const workoutRoute = require('./workout-route');
const userRoutes = require('./user-routes');


router.use('/workout', workoutRoute);
router.use('/users', userRoutes);

// localhost:3001/
router.get('/', async (req, res) => {
try{
    const workouts = {
        name: "marathon",
        username: "joe",
        date: "2023-03-02",
        category: "running",
        duration: 10800,
        description: "ran a marathon",
    }
    res.render('profile', {
        workouts
    })
} catch (err) {

}

})


module.exports = router;
