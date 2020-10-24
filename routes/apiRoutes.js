const db = require('../models');

module.exports = (app) => {
    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
  
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

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