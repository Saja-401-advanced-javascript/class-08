'use strict';

const express = require('express');

const product = require('../models/products/product-model');

const productRouter = express.Router();

productRouter.get('/product', getProduct);
productRouter.post('/product', postProduct);
productRouter.put('/product', putProduct);
productRouter.delete('/product', deleteProduct);

function getProduct(req, res, next) {
  product.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function postProduct(req, res, next) {
  product.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}

function putProduct(req, res, next) {
    category.create(req.body)
      .then(data => {
        console.log('req body:', data);
        res.status(201).json(data);
      })
  }

  function deleteProduct(req, res, next) {
    category.create(req.body)
      .then(data => {
        console.log('req body:', data);
        res.status(201).json(data);
      })
  }

module.exports = productRouter;