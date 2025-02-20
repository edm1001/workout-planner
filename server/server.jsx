// TODO: create a database for workouts

const mongoose = require('mongoose');
const express = require('express');
const exercisesRouter = require('./routes/exercises'); // Import your routes
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use('/api', exercisesRouter); \

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => console.log('Server is running on port 5000'));
})
.catch(err => console.error('MongoDB connection error:', err));
