// Require Libraries
const express = require('express');
const knex = require('knex');
// App Setup
const knexConfig = require('./knexfile.js');
const port = process.env.PORT || 3000;

const app = express();
const pool = knex(knexConfig);

// Middleware
app.use(express.json()); // parse query string parameters as JSON (GET/DELETE)
app.use(express.urlencoded({ extended: true })); // parse body parameters as JSON (POST/PUT)

app.get('/', (req, res) => {
  pool.select('*').from('employees').then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    // Send a 500 (internal server error) if something goes wrong (rejected promises are not caught by express).
    res.status(500).end();
  });
});
// Routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

// Start Server

 app.listen(3000, () => {
   console.log('Gif Search listening on port localhost:3000!');
 });