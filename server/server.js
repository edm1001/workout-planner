// TODO: create a database for workouts
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const exercisesRouter = require('./routes/exercises'); // Import your routes
const PORT = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(express.json());
app.use('/api/workouts', exercisesRouter);
const MONGO_URL = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// app.listen(5000, () => console.log(`Server is running on port 5000`));