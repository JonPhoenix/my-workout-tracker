// Setting all dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// Setting up the port
const PORT = process.env.PORT || 8080;

// Setting up the Express app
const app = express();

// 
app.use(logger('dev'));

app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connecting to the Mongo database. Using the deployed db or the local db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Importing routes with Express app
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// Setting up the server listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
