const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const logger = require('morgan');

const ridesRoute = require('./api/routes/rides');

app.use(logger('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'GET, POST');
    return response.status(200).json({});
  }
  return next();
});

app.use('/api/v1/rides', ridesRoute);

app.use((request, response) => {
  response.status(404);
  response.json({
    error: {
      message: 'Not Found',
    },
  });
});

module.exports = app;
