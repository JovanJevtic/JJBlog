const express = require('express');

const app = express();

//* Middlewares
app.use(express.json());

//* App running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application is running on port ${PORT} in${process.env.NODE_ENV} mode!`));