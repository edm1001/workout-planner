const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const workoutSchema = new Schema({
    name: String,
    description: String,
    tags: [String],
    steps: [String],
    photoUrl: String,
  });
  const Workout = model('Workout', workoutSchema);

  module.exports = Workout;