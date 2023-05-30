const {Workout} =require('../models')

const workoutData =
[{
  name:"marathon",
  date:"2023-03-02",
  time: 180 ,
  distance: 42.195,
  unit:'km',
  calories: 2520,
  planned: false,
  completed: true,
  category_id: 1,
  user_id: 2
},
{
  name:"Ocean swim",
  date: null,
  time: 30 ,
  distance: 1.5,
  unit:'km',
  calories:null,
  planned: true,
  completed: false,
  category_id: 1,
  user_id: 2
},
{
  name:"bicycle race",
  date:"2023-04-12",
  time: 180 ,
  distance: 100,
  unit:'km',
  calories: 1500,
  planned:true,
  completed:true,
  category_id: 3,
  user_id: 2
},
{
  name:"Bike ride",
  date:"2023-05-29",
  time: 165 ,
  distance: 80,
  unit:'km',
  calories: 1100,
  planned:true,
  completed:true,
  category_id: 3,
  user_id: 2
},
{
  name:"Short bike ride",
  date:"2023-05-23",
  time: 60 ,
  distance: 20,
  unit:'km',
  calories: 600,
  planned:true,
  completed:true,
  category_id: 3,
  user_id: 2
},
{
  name:"Long bike ride",
  date:"2023-05-30",
  time: 360 ,
  distance: 180,
  unit:'km',
  calories: 4500,
  planned:true,
  completed:true,
  category_id: 3,
  user_id: 2
},
{
  name: "morning run",
  date: "2023-05-01",
  time: 65,
  distance: 10.5,
  unit: "km",
  calories: 800,
  planned: true,
  completed: true,
  category_id: 1,
  user_id: 3,
},
{
  name: "swimming laps",
  date: "2023-05-05",
  time: 45,
  distance: 1.5,
  unit: "km",
  calories: 350,
  planned: true,
  completed: true,
  category_id: 2,
  user_id: 3,
},
{
  name: "evening bike ride",
  date: "2023-05-12",
  time: 44,
  distance: 20.2,
  unit: "km",
  calories: 950,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 4,
},
{
  name: "yoga class",
  date: "2023-05-18",
  time: 60,
  distance: 0,
  unit: "km",
  calories: 300,
  planned: true,
  completed: true,
  category_id: 4,
  user_id: 5,
},
{
  name: "hiking adventure",
  date: "2023-05-22",
  time: 120,
  distance: 12.8,
  unit: "km",
  calories: 1200,
  planned: true,
  completed: true,
  category_id: 6,
  user_id: 2,
},
{
  name: "indoor cycling",
  date: "2023-05-03",
  time: 29,
  distance: 15,
  unit: "km",
  calories: 700,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 1,
},
{
  name: "morning swim",
  date: "2023-05-07",
  time: 32,
  distance: 1.2,
  unit: "km",
  calories: 300,
  planned: true,
  completed: true,
  category_id: 2,
  user_id: 3,
},
{
  name: "yoga at the park",
  date: "2023-05-11",
  time: 45,
  distance: 0,
  unit: "km",
  calories: 250,
  planned: true,
  completed: true,
  category_id: 4,
  user_id: 2,
},
{
  name: "evening jog",
  date: "2023-05-15",
  time: 35,
  distance: 7,
  unit: "km",
  calories: 550,
  planned: true,
  completed: false,
  category_id: 1,
  user_id: 4,
},
{
  name: "cycling in the mountains",
  date: "2023-05-19",
  time: 180,
  distance: 45.6,
  unit: "km",
  calories: 1800,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 5,
},
{
  name: "pilates session",
  date: "2023-05-02",
  time: 60,
  distance: 0,
  unit: "km",
  calories: 200,
  planned: true,
  completed: false,
  category_id: 5,
  user_id: 3,
},
{
  name: "evening swim",
  date: "2023-05-06",
  time: 35,
  distance: 1.8,
  unit: "km",
  calories: 400,
  planned: true,
  completed: true,
  category_id: 2,
  user_id: 3,
},
{
  name: "cycling to work",
  date: "2023-05-10",
  time: 30,
  distance: 9,
  unit: "km",
  calories: 400,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 4,
},
{
  name: "yoga retreat",
  date: "2023-05-14",
  time: 240,
  distance: 0,
  unit: "km",
  calories: 600,
  planned: true,
  completed: false,
  category_id: 4,
  user_id: 2,
},
{
  name: "hiking in the national park",
  date: "2023-05-17",
  time: 90,
  distance: 8.5,
  unit: "km",
  calories: 1000,
  planned: true,
  completed: true,
  category_id: 6,
  user_id: 3,
},
{
  name: "morning jog by the beach",
  date: "2023-05-21",
  time: 45,
  distance: 7.8,
  unit: "km",
  calories: 600,
  planned: true,
  completed: true,
  category_id: 1,
  user_id: 3,
},
{
  name: "swimming drills",
  date: "2023-05-04",
  time: 45,
  distance: 2,
  unit: "km",
  calories: 500,
  planned: true,
  completed: true,
  category_id: 2,
  user_id: 4,
},
{
  name: "cycling tour with friends",
  date: "2023-05-09",
  time: 120,
  distance: 35.2,
  unit: "km",
  calories: 1600,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 4,
},
{
  name: "yoga at sunrise",
  date: "2023-05-13",
  time: 60,
  distance: 0,
  unit: "km",
  calories: 300,
  planned: true,
  completed: true,
  category_id: 4,
  user_id: 2,
},
{
  name: "hiking up the mountain",
  date: "2023-05-16",
  time: 120,
  distance: 15,
  unit: "km",
  calories: 1100,
  planned: true,
  completed: true,
  category_id: 6,
  user_id: 5,
},
{
  name: "morning run in the park",
  date: "2023-05-20",
  time: 40,
  distance: 9.5,
  unit: "km",
  calories: 700,
  planned: true,
  completed: true,
  category_id: 1,
  user_id: 3,
},
{
  name: "swimming at the community pool",
  date: "2023-05-24",
  time: 30,
  distance: 1.2,
  unit: "km",
  calories: 350,
  planned: true,
  completed: true,
  category_id: 2,
  user_id: 1,
},
{
  name: "cycling challenge",
  date: "2023-05-26",
  time: 180,
  distance: 55.3,
  unit: "km",
  calories: 2100,
  planned: true,
  completed: true,
  category_id: 3,
  user_id: 2,
},
{
  name: "yoga for relaxation",
  date: "2023-05-08",
  time: 60,
  distance: 0,
  unit: "km",
  calories: 250,
  planned: true,
  completed: true,
  category_id: 4,
  user_id: 1,
},
{
  name: "evening hike",
  date: "2023-05-23",
  time: 90,
  distance: 6.7,
  unit: "km",
  calories: 800,
  planned: true,
  completed: true,
  category_id: 6,
  user_id: 3,
},
{
  name: "morning jog in the city",
  date: "2023-05-28",
  time: 35,
  distance: 8.5,
  unit: "km",
  calories: 650,
  planned: true,
  completed: true,
  category_id: 1,
  user_id: 4,
},
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
