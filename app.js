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
var employees = require('./routes/employees');

//Url routes to file
app.use('/employees',  employees);

// const pool = knex(knexConfig);

app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

// Start Server

 app.listen(3000, () => {
   console.log('Gif Search listening on port localhost:3000!');
 });