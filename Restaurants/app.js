const express = require('express');
const morgan = require('morgan');
const notFound = require('./middlewares/not-found');
const error500 = require('./middlewares/error-500');
const routerRestaurants = require('./routes/restaurants');
const mongoose = require('mongoose');
const config = require('./config');

const mongoUri = `mongodb://${config.mongo.host}/${config.mongo.db}`;
mongoose.connect(mongoUri, {
  useMongoClient: true,
});

const app = express();

app.use(morgan('dev'));

app.use('/api/restaurants', routerRestaurants);

app.use('/api', notFound);
app.use('/api', error500);

module.exports = app;
