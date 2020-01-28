'use strict';

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// internal files
const categoryRouter = require('../routes/categories.js');
const productRouter = require('../routes/products');


// application constants
const app = express();


function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
}

// 3rd party middleware
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

// 1st party middleware
app.use('/api/v1', categoryRouter);
app.use('/api/v1', productRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);



module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 2222;
    app.listen(PORT, () => console.log(`server up: ${PORT}`));
  }
}