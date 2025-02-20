// TODO: create a database for workouts
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const exercisesRouter = require('./routes/exercises'); // Import your routes
const PORT = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(express.json());
app.use('/api', exercisesRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB', MONGO_URL);
})
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// app.listen(5000, () => console.log(`Server is running on port 5000`));