// Require Libraries
const express = require('express');
const knex = require('knex');

// App Setup
const knexConfig = require('./knexfile.js');
const port = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.json()); // parse query string parameters as JSON (GET/DELETE)
app.use(express.urlencoded({ extended: true })); // parse body parameters as JSON (POST/PUT)


// Routes
//Save path of route files


//Url routes to file
var employees = require('./routes/employees');
var pto = require('./routes/pto');
var assignedtraining = require('./routes/assignedtraining');
var performance = require('./routes/performance');

app.use('/pto',pto);
app.use('/assignedtraining',assignedtraining);
app.use('/employees',  employees);
app.use('/performance', performance);

// const pool = knex(knexConfig);

app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

// Start Server

 app.listen(3000, () => {
   console.log('Listening on port localhost:3000!');
 });