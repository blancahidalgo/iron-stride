const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// localhost:3001/
// router.get('/', async (req, res) => {
// try{
//     const workouts = {
//         name: "marathon",
//         username: "joe",
//         date: "2023-03-02",
//         category: "running",
//         duration: 10800,
//         description: "ran a marathon",
//     }
//     res.render('profile', {
//         workouts
//     })
// } catch (err) {

// }
// });

module.exports = router;