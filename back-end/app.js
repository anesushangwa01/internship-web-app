const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/app', {}) // Removed useNewUrlParser and useUnifiedTopology options
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Express middleware
app.use(express.json());

const jobApplication = require('./routes/jobapplication');
const register = require('./routes/registerUser');

// Routes
app.use('/application', jobApplication);
app.use('/register', register);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
