 // routes/cart.js
const express = require('express');
const Cartrouter = express.Router();
const cartController = require('../controllers/Cart.js');

Cartrouter.post('/add-to-cart', cartController.addToCart);
Cartrouter.get('/', cartController.getAllCart);
Cartrouter.post("/updateCartQuantity",cartController.updateCartItemQuantity)
Cartrouter.post("/deleteCartItems",cartController.deleteCartItem)

module.exports = Cartrouter;
