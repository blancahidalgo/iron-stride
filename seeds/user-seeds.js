const { User } = require('../models');

const userData = [
    {
        first_name: 'Ryan',
        last_name: 'Golder',
        email: 'rgolder78@gmail.com',
        password: 'password123',
    },
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;