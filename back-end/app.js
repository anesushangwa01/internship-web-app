require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const register = require('./models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/auth');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/app', {}) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Express middleware
app.use(express.json());

// Use cors middleware to enable CORS
app.use(cors());

const jobApplication = require('./routes/jobapplication');
const registers = require('./routes/registerUser');
const joblist = require('./routes/addjob');

app.use('/application', jobApplication);
app.use('/register', registers);
app.use('/jobslist', joblist);

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await register.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await register.findById(req.user._id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
