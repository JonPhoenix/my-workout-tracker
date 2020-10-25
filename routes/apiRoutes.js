const db = require('../models');

module.exports = (app) => {
    // Creates a new workout using public/api.js
    // and public/exercise.js
    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    
    // Reads the last workout from public/api.js
    // models/index.js and models/workout.js
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // Reads workouts in range from public/api.js
    // and public/stats.js
    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // Adds an exercise to an existing workout using public/api.js
    // and public/exercise.js
    app.put('/api/workouts/:id', ({ body, params }, res) => {

        if (body.name) {
            db.Workout.findByIdAndUpdate
            (
                { _id: params.id },
                { $push: {exercises: body} },
            )
            .then(dbWorkout => {
                res.json(dbWorkout);
                res.end()
            })
            .catch(err => {
                res.status(400).json(err);
            });
        }
    });
};