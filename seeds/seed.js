const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedCategory = require('./categorySeedData');
const seedWorkout = require('./workoutSeedData');

const seedAll = async ()=> {
  await sequelize.sync({force : true});
  await seedUser();
  await seedCategory();
  await seedWorkout();
  process.exit(0);
}

seedAll();