// Require Libraries
const express = require('express');
const knex = require('knex');

// App Setup
const knexConfig = require('./knexfile.js');
const port = process.env.PORT || 3000;
var app = express();
var tester = {"slip":{"id":23,"advice":"Always bet on black in blackjack."}};

// Middleware
app.use(express.json()); // parse query string parameters as JSON (GET/DELETE)
app.use(express.urlencoded({ extended: true })); // parse body parameters as JSON (POST/PUT)


// import employees from 'employees'
// Routes
//Save path of route files


//Url routes to file
var employees = require('./routes/employees');
var pto = require('./routes/pto');
var assignedtraining = require('./routes/assignedtraining');
var performance = require('./routes/performance');
var login = require('./routes/login');



// const pool = knex(knexConfig);

// var express = require('express')
const cors = require('cors')
// var app = express()

app.use(cors())

app.use(function (req, res, next) {
  const allowedOrigins = [
    "http://localhost:3080/main#",
    // "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3080/main#');
  }
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/pto',pto);
app.use('/assignedtraining',assignedtraining);
app.use('/employees',  employees);
app.use('/performance', performance);
app.use('/login', login);

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
// //   Access-Control-Allow-Origin: *
// // Access-Control-Allow-Credentials: true
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.listen(30000, function () {
//   console.log('CORS-enabled web server listening on port 30000')
// })

// const cors = require('cors');
// app.use(cors({
//   origin: '*'
// }));

app.get('/', (req, res) => {
  res.send(tester);
  // res.send('Hello Squirrel');
  // res.send('{"slip":{"id":173,"advice":"Always bet on black."}}');
});

app.get('/employees', (req, res) => {
    res.send('Test');
  });

// Start Server

 app.listen(3000, () => {
   console.log('Listening on port localhost:3000!');
 });