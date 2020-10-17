// Setting all dependencies
const express = require('express');
const mongoose = require('mongoose');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');

// Setting up the port
const PORT = process.env.PORT || 3000;

// Setting up the Express app
const app = express();

app.use(logger('dev'));

app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up Mongo database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes?

// Setting up the server listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
