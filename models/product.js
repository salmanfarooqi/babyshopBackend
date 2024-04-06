const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  category: String,
  imageUrl:{
    type:String,
  },
  quantity:{
    type:Number,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
