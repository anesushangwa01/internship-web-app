// user.js
const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: String,
  linkedIn: String,
  github: String,
  website: String,
  // You can add more fields as needed
});



const JobApplicationModel = mongoose.model('jobapplications', JobApplicationSchema);

module.exports = JobApplicationModel;