const express = require('express');
const mongoose = require('mongoose');
const register = require('./models/register');
const bcrypt = require('bcrypt');

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
const registers = require('./routes/registerUser');

// Routes
app.use('/application', jobApplication);
app.use('/register', registers);



app.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await register.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      // If the password is valid, return success message
      res.status(200).json({ message: 'Login successful' });

  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
