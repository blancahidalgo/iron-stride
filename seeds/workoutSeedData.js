const {Workout} =require('../models')

const workoutData =
[{
  name:"marathon",
  date:"2023-03-02",
  time: 10800 ,
  distance: 42.195,
  unit:'km',
  calories: 2520,
  planned: false,
  completed: true,
  category_id: 1,
  user_id: 1
},
{
  name:"Ocean swim",
  date: null,
  time: null ,
  distance: 1.5,
  unit:'km',
  calories:null,
  planned: true,
  completed: false,
  category_id: 1,
  user_id: 1
},
{
  name:"bicycle race",
  date:"2023-04-12",
  time: 10800 ,
  distance: 100,
  unit:'km',
  calories: 1500,
  planned:true,
  completed:true,
  category_id: 3,
  user_id: 1
},
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
