var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'

  },

  price: {
    type: Number,
    default: '',
    required: 'price required'
  },

  quantity: {
    type: Number,
    default: '',
    required: 'Quantity required'
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
