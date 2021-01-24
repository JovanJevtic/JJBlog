const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

const app = express();

//* Middlewares
app.use(express.json());

//* Database connection
mongoose.connect( process.env.mongoURI , {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database!'));

//* App running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application is running on port ${PORT} in${process.env.NODE_ENV} mode!`));