const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const logger = require('morgan');

const ridesRoute = require('./api/routes/rides');

app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/v1/rides', ridesRoute);

app.use((request, response, next) => {
  const error = new Error();
  error.status = 404;
  next(error);
});

app.use((error, request, response) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
