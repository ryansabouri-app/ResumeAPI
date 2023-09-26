const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB connection URL)
mongoose.connect('mongodb://localhost:27017/resumedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Import and use the resume router
const resumeRouter = require('./routes/resume');
app.use('/resume', resumeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
