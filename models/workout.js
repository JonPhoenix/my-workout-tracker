const mongoose = require('mongoose'); // Importing mongoose

const Schema = mongoose.Schema; // Schema declaration

const workoutSchema = new Schema ({ // Creating a new schema object
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: { type: String, trim: true },
            name: { type: String, trim: true },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }
    ]
},

{
    toJSON: { // Adds a virtual property not stored in Mongo
        virtuals: true
    }
});

// Adds a virtual property to schema, this reduces the array
// of exercises to the sum of their total duration.
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;