const router = require('express').Router();
const { Category, Workout} = require('../../models');

router.get('/', async(req,res) => {
    try {
        const categoryData = await Category.findAll({
            include: [{model: Workout}]
        });
        res.status(200).json(categoryData);
    } catch(err) {
        res.status(500).json(err);
    };
});

router.get('/:id', async(req, res) => {
    try {
        const categoryData = await Category.findByPk (req.params.id, {
            include: [{ model: Workout}],
        });
        if(!categoryData) {
            res.status(404).json({ message: ''});
            return;
        };
        res.status(200).json(categoryData);
    } catch(err) {
        res.status(500).json(err);
    };
});





