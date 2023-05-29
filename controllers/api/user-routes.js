const router = require("express").Router();
const { User } = require("../../models");

router.post('/login', async (req, res) => {
  try {
    console.log('api/users/login')
    // get the user from the data base with a specific email
    const userData = await User.findOne({where: { email: req.body.email }});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // This validates the password 
    const validPassword = await userData.checkPassword(req.body.password);
    
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
  
  try {
    //check if the supplied email has already been used for a user account
    const existingUser = await User.findAll({where:{ email: req.body.email }})
    if(existingUser){
      res.status(400).json({ message: 'There is already a user with this email address!!' });
      return;
    }
    //CREATE the User depending on User input in signup page
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
  console.log(`before login out, logged_in value is ${req.session.logged_in}`);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });

    console.log(`User is now logged out!!!`);  
  } else {
    res.status(404).end();
  }
});

module.exports = router;
