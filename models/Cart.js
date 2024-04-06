// // models/Cart.js
// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//   products: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product'
//     }
//   ]
// });

// const Cart = mongoose.model('Cart', cartSchema);

// module.exports = Cart;


// models/Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  quanity:{
    type:Number,
    default:1,
  }

});

module.exports = mongoose.model('Cart', cartSchema);
