const { User } = require('../models');

const userData = [
    {
        first_name: 'Ryan',
        last_name: 'Golder',
        email: 'rgolder78@gmail.com',
        password: 'Password123!',
    },
    {
        first_name: 'Blanca',
        last_name: 'Hidalgo',
        email: 'b.hidalgo.ley@gmail.com',
        password: 'Password123!',
    },
    {
        first_name: 'Grethel',
        last_name: 'Reyes',
        email: 'reyes.grethelmaec@gmail.com',
        password: 'Password123!',
    },
    {
        first_name: 'Jeremy',
        last_name: 'Decherat',
        email: 'jejedech.63@gmail.com',
        password: 'Password123!',
    },
    {
        first_name: 'Jeison',
        last_name: 'Fajardo',
        email: 'jfajardobolivar@gmail.com',
        password: 'Password123!',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;