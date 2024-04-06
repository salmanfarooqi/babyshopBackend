// orderController.js

const Order = require('../models/order.js');

// Controller function to create a new order
const createOrder = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { userId, products, totalAmount,zipCode,address,phone } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      userId,
      products, // Assuming products is an array of objects containing productId and quantity
      
      totalAmount,
      zipCode,address,phone
      


    });

    // Save the new order to the database
    await newOrder.save();

    // Send a success response
    res.status(201).json({ success: true, message: 'Order created successfully', order: newOrder });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to get all orders
// const getOrders = async (req, res) => {
//   try {
//     // Fetch all orders from the database
//     const orders = await Order.find().populate('userId'); // Assuming you want to populate the userId with username

//     // Send the orders as a response
//     console.log("orders",orders)
//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     // Send an error response if something goes wrong
//     console.log("err",error)
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

module.exports = { createOrder };
