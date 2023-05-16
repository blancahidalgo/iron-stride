const {Workout} =require('../models')

const workoutData =
[{
  name:"marathon",
  date:"2023-03-02",
  time: 10800 ,
  distance:42.195,
  unit:'km',
  calories:"2520",
  planned:true,
  completed:true,
  category_id: 1,
  user_id: 1
},
{
  name:"Ocean swim",
  date:"2023-03-02",
  time: 10800 ,
  distance:42.195,
  unit:'km',
  calories:"2520",
  planned:true,
  completed:true,
  category_id: 1,
  user_id: 1
},
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
