const express = require('express');
const router = express.Router();
const register = require('../models/register');

// POST a new information
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with the same name or email already exists
        const existingUser = await register.findOne({ $or: [{ name }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with the same name or email already exists' });
        }

        const application = new register({ name, email, password });
        await application.save();

        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});




  module.exports = router;