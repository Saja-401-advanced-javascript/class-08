'use strict';

const express = require('express');

const product = require('../models/products/product-model');

const productRouter = express.Router();

productRouter.get('/product', getProduct);
productRouter.get('/product/:id', getOneProduct);

productRouter.post('/product', postProduct);
productRouter.put('/product/:id', putProduct);
productRouter.delete('/product/:id', deleteProduct);

function getProduct(req, res, next) {
  product.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}




function getOneProduct(req, res, next) {
  product.get(req.params.id)
    .then(data => {
      res.status(200).json(data[0]);
    }).catch(next);
}

function postProduct(req, res, next) {
  product.create(req.body)
    .then(data => {
      res.status(201).json(data);
    });
}




function putProduct(req, res, next) {
  product.update(req.params.id, req.body)
    .then(data => {
      res.status(201).json(data);
    });
}




function deleteProduct(req, res, next) {
  let mess = 'item deleted';

  product.delete(req.params.body)
    .then(data => {
      res.status(201).json(mess);
    });
}

module.exports = productRouter;