const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//* App init 
const app = express();

//* Middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//* Cors
const allowedOrigins = ['http://localhost:3000', 'http://jevdevs.herokuapp.com/', 'https://jevdevs.herokuapp.com/'];
// app.use(cors({
//     origin: allowedOrigins
// }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://jevdevs.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//* Redirecting ti https
app.use(function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

//* Routes
app.use('/api/blogs', require('./routes/blogs'));

//* Database connection
mongoose.connect( process.env.mongoURI , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

//* Static files serve
let dirname = path.resolve()
const environment = process.env.NODE_ENV;

if (environment === 'production') {
  app.use(express.static(path.join(dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send(`API is running.... in ${environment} mode`)
  })
}

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database!'));

//* App running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application is running on port ${PORT} in${process.env.NODE_ENV} mode!`));