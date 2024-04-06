const mongoose = require('mongoose');

const  registerSchema = new  mongoose.Schema({
    name: { type : String , required : true },
    email:{type:String,required:true, unique: true},
    password:{type:String,required:true}
});

     
const register = mongoose.model('register-user', registerSchema);

module.exports = register;