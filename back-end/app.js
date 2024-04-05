// app.js
const express = require('express');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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

// Routes
app.use('/application', jobApplication );

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
