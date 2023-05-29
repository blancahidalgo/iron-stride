const { User } = require('../models');

const userData = [
    {
        first_name: 'Ryan',
        last_name: 'Golder',
        email: 'rgolder78@gmail.com',
        password: 'password123',
    },
    
];

const seedUsers = () => User.bulkCreate(userData,{ 
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;