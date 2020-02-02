'use strict';

const productSchema = require('./product-schema');
const Model = require('../model.js');

class Prodect extends Model {
  constructor() {
    super(productSchema);
  }
}

module.exports = new Prodect();