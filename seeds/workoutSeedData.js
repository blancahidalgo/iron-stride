const {Workout} =require('../models')

const workoutData =
[{
  name:"marathon",
  date:"2023-03-02",
  time:"",
  distance:42.195,
  unit:'km',
  calories:"",
  planned:"",
  completed:"",
  category_id: ,
  user_id:
},
{
  
}
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
