// routes/resume.js
const express = require('express');
const router = express.Router();
const Resume = require('../models/resume');

// Route to get the resume
router.get('/', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
    console.log("Get request success")
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update the resume
router.put('/', async (req, res) => {
  try {
    const updatedResume = await Resume.findOneAndUpdate({}, req.body, { new: true });
    res.json(updatedResume);
    console.log("Put request success")
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to create a new resume
router.post('/', async (req, res) => {
    try {
      // Assuming req.body contains the data for the new resume
      const newResume = new Resume(req.body);
      const savedResume = await newResume.save();
      res.status(201).json(savedResume); // Respond with 201 Created status and the created resource
      console.log("Post request Success")
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
