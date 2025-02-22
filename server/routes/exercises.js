const express = require('express');
const Workout = require('../models/Workout.js'); 

const router = express.Router();

// Get all workouts
router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get workouts by muscle group (tag)
router.get('/muscle/:muscleGroup', async (req, res) => {
    try {
        const { muscleGroup } = req.params;
        const workouts = await Workout.find({ tags: muscleGroup });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a single workout by ID
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
