const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
  try {
    console.log('api/users/login')
    // running an await function - requesting to find a single user from the data base with a specific email
    const userData = await User.findOne({where: { email: req.body.email }});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // This validates the password
    
    const validPassword = await userData.checkPassword(req.body.password);
    
    console.log(`validPassword = ${validPassword}`);
    // if wrong password then 400 error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // This saves the session if user id and password match
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    console.log('is logged in:')
    console.log(req.session.logged_in)
  } catch (err) {
    console.log('error caught!!!!')
    res.status(400).json(err);
  }
});

//CREATE new user
router.post('/', async (req, res) => {
  console.log('creating new user')
  console.log(req);
  try {
    const userData = await User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// This will log the user out - when the user selects 'logout'
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
