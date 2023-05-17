const router = require('express').Router();
const { Workout, User, Category  } = require('../../models');

// GET all workouts

router.get("/", async (req, res) => {
    try {
      const workoutData = await Workout.findAll({
        include: [{ model: User }, { model: Category }],
      });
      res.status(200).json(workoutData);
    } catch (err) {
      res.status(500).json(err);
    }
    });

// FIND all workouts
router.get("/:id", async (req, res) => {
    const workoutData = await Workout.findByPk(req.params.id, {
        include: [{ model: User }, { model: Category }],
        });
        res.status(200).json(workoutData);
    });


// CREATE a workout
router.post("/", async (req, res) => {
    try {
      const workoutData = {
        category: req.body.category_name,
        user: req.body.user_name,
        date: req.body.date,
        time: req.body.time,
        name: req.body.name,
        distance: req.body.distance,
        duration: req.body.duration,
        calories: req.body.calories,
        planned: req.body.planned,
        notes: req.body.notes,
      };
        const newWorkout = await Workout.create(workoutData);
        res.status(200).json(newWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});



// UPDATE a workout
router.put("/:id", async (req, res) => {
    Workout.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((updatedWorkout) => {
        res.json(updatedWorkout);
    })
    .catch((err) => res.json(err));
});













// DELETE a workout