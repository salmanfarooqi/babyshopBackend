const Product = require('../models/product.js');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category,imageUrl,quantity } = req.body;
    const product = new Product({ name, price, description, category,quantity,imageUrl });
    await product.save();
    res.status(201).json({message:"product added sucessfully"});
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    // console.log("product is",products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
   const {id}=req.params
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a product


// Delete a product


module.exports = { createProduct, getAllProducts, getProductById };
