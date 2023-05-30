const { User } = require('../models');

const userData = [
    {
        first_name: 'Ryan',
        last_name: 'Golder',
        email: 'rgolder78@gmail.com',
        password: 'Password123!',
        image: '',
    },
    {
        first_name: 'Blanca',
        last_name: 'Hidalgo',
        email: 'b.hidalgo.ley@gmail.com',
        password: 'Password123!',
        image: '',
    },
    {
        first_name: 'Grethel',
        last_name: 'Reyes',
        email: 'reyes.grethelmaec@gmail.com',
        password: 'Password123!',
        image: '',
    },
    {
        first_name: 'Jeremy',
        last_name: 'Decherat',
        email: 'jejedech.63@gmail.com',
        password: 'Password123!',
        image: '',
    },
    {
        first_name: 'Jeison',
        last_name: 'Fajardo',
        email: 'jfajardobolivar@gmail.com',
        password: 'Password123!',
        image: 'https://www.bing.com/images/search?view=detailV2&ccid=FhOMCLW9&id=590D193B248E8DE9C60AE3976384A139C50BDCC3&thid=OIP.FhOMCLW9mJFxr-rDISls0gAAAA&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.16138c08b5bd989171afeac321296cd2%3Frik%3Dw9wLxTmhhGOX4w%26riu%3Dhttp%253a%252f%252fi.imgur.com%252f494dOKr.png%26ehk%3DYc6ec7rIZ5JWgz0T3tzgddMP2b3QOiiIj%252fBlMf6qDpU%253d%26risl%3D%26pid%3DImgRaw%26r%3D0%26sres%3D1%26sresct%3D1&exph=400&expw=400&q=avatar+url+image&simid=608037240692811902&form=IRPRST&ck=69EA465B5F0E17855BF5652D430C9735&selectedindex=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    },
];

const seedUsers = () => User.bulkCreate(userData,{ 
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;