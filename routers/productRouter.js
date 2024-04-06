const express = require('express');
const productRouter = express.Router();
// const userController = require('../controllers/userControler.js');



const productController = require('../controllers/productController.js');
// Create a new product

productRouter.post('/addproduct', productController.createProduct);

// Get all products
productRouter.get('/product', productController.getAllProducts);

// Get a single product by ID
productRouter.get('/:id', productController.getProductById);

// Update a product
productRouter.put('/:id', productController.updateProduct);

// Delete a product
productRouter.delete('/:id', productController.deleteProduct);
module.exports = productRouter