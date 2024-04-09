
const mongoose = require('mongoose');

const  Joblistschema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true
  },
  address:{ type :String,
       required:true
},
joboverview:{ type :String,
  required:true
 },
skillsrequired:{ type :String,
  required:true
},
jobwebsite:{ type :String,
  required:true
},
jobwebsite:{ type :String,
  required:true
},
postdate:{
  type: Date, 
  required: true
},
expdate:{
  type: Date, 
  required: true
}

});

const JoblistModel = mongoose.model('joblist', Joblistschema);

module.exports = JoblistModel;