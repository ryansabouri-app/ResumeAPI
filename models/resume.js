// models/resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  title: String,
  summary: String,
  school: String,
  major: String,
  GPA: Number,
  project1: [String],
  project2: [String],
  project3: [String],
  languages: [String],
  tools: [String]
  // Add more fields as needed
});

module.exports = mongoose.model('Resume', resumeSchema);