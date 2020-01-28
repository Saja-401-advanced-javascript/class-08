'use strict';

const express = require('express');

const category = require('../models/categories/category-model');

const categoryRouter = express.Router();

categoryRouter.get('/category', getCategory);
categoryRouter.post('/category', postCategory);
categoryRouter.put('/category', putCategory);
categoryRouter.delete('/category', deleteCategory);

function getCategory(req, res, next) {
  category.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function postCategory(req, res, next) {
  category.create(req.body)
    .then(data => {
      console.log('req body:', data);
      res.status(201).json(data);
    })
}

function putCategory(req, res, next) {
    category.create(req.body)
      .then(data => {
        console.log('req body:', data);
        res.status(201).json(data);
      })
  }

  function deleteCategory(req, res, next) {
    category.create(req.body)
      .then(data => {
        console.log('req body:', data);
        res.status(201).json(data);
      })
  }

module.exports = categoryRouter;