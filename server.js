const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

//* App init
const app = express();

//* Middlewares
app.use(express.json());
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

//* Cors
const allowedOrigins = ['http://localhost:3000', 'https://jevdev.herokuapp.com/'];
app.use(cors({
    origin: allowedOrigins
}));

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
app.listen(PORT, () => console.log(`Application is running on port ${PORT} in ${process.env.NODE_ENV}mode!`));