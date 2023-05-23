const router = require('express').Router();

const workoutRoute = require('./workout-route');
const userRoutes = require('./user-routes');


router.use('/workout', workoutRoute);
router.use('/users', userRoutes);

module.exports = router;
