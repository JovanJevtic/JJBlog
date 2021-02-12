const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect').default;

//* App init
const app = express();

//* Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

//* Cors
const allowedOrigins = ['http://localhost:3000', 'https://jevdevs.herokuapp.com/', 'http://jevdevs.herokuapp.com/'];
app.use(cors({
    origin: allowedOrigins
}));

//* Redirect from http to https
app.use(sslRedirect(['production']));

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