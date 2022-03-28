// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const {Pool} = require('pg');
const pool = new Pool({
 connectionString: "postgres://wirgwphxtjgazc:0d6bd578a728ae0862d1945ca60a32424a26503c6a0ad7acc87e8cf41dd80a1b@ec2-34-206-220-95.compute-1.amazonaws.com:5432/d3o2p1et5m8njs",
 ssl: {
 rejectUnauthorized: false
 }
});

pool.query("select data->>'firstName' as firstName from employees where data->>'firstName'='Chris';", (err, res) => {
  if (err) {
      console.log("Error - Failed to select all from Users");
      console.log(err);
  }
  else{
      console.log(res.rows);
  }
});
// Routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

// Start Server

// app.listen(3000, () => {
//   console.log('Gif Search listening on port localhost:3000!');
// });