const express = require('express');
const router = express.Router();
const JoblistModel = require('../models/addjobs');

// POST a new information
router.post("/", async (req, res) => {
    try {
      const application = new  JoblistModel(req.body); // Assuming req.body contains the product data
      await application.save();
      
      res.status(201).json({ message: 'applicaation submited ',  });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  router.get("/", async (req, res) => {
    try {
        const application = await JoblistModel.find({});
        res.status(200).send(application);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
  

module.exports = router