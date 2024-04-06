const express = require('express');
const router = express.Router();
const register = require('../models/register');

// POST a new information
router.post("/", async (req, res) => {
    try {
      const application = new  JobApplicationModel(req.body); // Assuming req.body contains the product data
      await application.save();
      
      res.status(201).json({ message: 'applicaation submited ',  });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  export.module