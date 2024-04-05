// userRoutes.js
const express = require('express');
const router = express.Router();
const JobApplicationModel = require('../models/jobApplication');


// POST a new bakery entry
router.post("/", async (req, res) => {
    try {
      const application = new  JobApplicationModel(req.body); // Assuming req.body contains the product data
      await application.save();
      
      res.status(201).json({ message: 'Created ',  });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  router.get("/", async (req, res) => {
    try {
        const application = await JobApplicationModel.find({});
        res.status(200).send(application);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
  

module.exports = router;
