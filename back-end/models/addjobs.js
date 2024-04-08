
const mongoose = require('mongoose');

const  Joblistschema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true
  },
  address: String,
  joboverview:String,
  skillsrequired: String,
  jobwebsite: String,
  // You can add more fields as needed
});



const JoblistModel = mongoose.model('joblist', Joblistschema);

module.exports = JoblistModel;