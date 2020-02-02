'use strict';

const express = require('express');

const category = require('../models/categories/category-model');

const categoryRouter = express.Router();

categoryRouter.get('/category', getCategory);
categoryRouter.get('/category/:id', getOneCategory);
categoryRouter.post('/category', postCategory);
categoryRouter.put('/category/:id', putCategory);
categoryRouter.delete('/category/:id', deleteCategory);


function getCategory(req, res, next) {
  category.get()
    .then(data => {        
      res.status(200).json(data);
    })
    .catch(next);
}

function getOneCategory(req, res, next) {
  // console.log('req.params.id', req.params.id);
  category.get(req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(next);
}

function postCategory(req, res, next) {
  category.create(req.body)
    .then(data => {
      res.status(201).json(data);
    });
}

function putCategory(req, res, next) {

  category.update(req.params.id,req.body)
    .then(data => {
      res.status(201).json(data);
    });
}

function deleteCategory(req, res, next) {
  let mess = 'item deleted';
  category.delete(req.params.id)
    .then(data => {
      res.status(200).json(mess);
    });
}



module.exports = categoryRouter;