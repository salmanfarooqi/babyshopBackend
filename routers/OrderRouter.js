// routes.js

const express = require('express');
const OrderRouter = express.Router();
const { createOrder } = require('../controllers/OrderController.js');

// Route for creating a new order
OrderRouter.post('/orders', createOrder);

// Route for fetching all orders
// OrderRouter.get('/orders', getOrders);

module.exports = OrderRouter;
