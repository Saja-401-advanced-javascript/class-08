'use strict';

const categorySchema = require('./category-schema.js');
const Model = require('../model.js');

class Category extends Model {
  constructor() {
    super(categorySchema);
  }
}

module.exports = new Category();