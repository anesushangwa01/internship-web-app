const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
  
    email: { type: String, required: true},
    password: { type: String, required: true }
});



const login = mongoose.model('register-user', loginSchema);

module.exports = login;
