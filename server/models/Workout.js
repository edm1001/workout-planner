const workoutSchema = new mongoose.Schema({
    name: String,
    description: String,
    tags: [String],
    steps: [String],
    photoUrl: String,
  });