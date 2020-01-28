'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/models-db';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

// mongoose.Promise = global.Promise
console.log(global.Promise);

mongoose.connect(MONGODB_URI, mongooseOptions);

server.start(6666);