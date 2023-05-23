const router = require('express').Router();
const userRoutes = require('./user-routes');
const workoutRoutes = require('./workout-route');

router.use('/workout', workoutRoutes);
router.use('/users', userRoutes);

module.exports = router;
