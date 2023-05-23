const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./workout-route');

router.use('/workout', workoutRoute);
router.use('/users', userRoutes);

module.exports = router;
