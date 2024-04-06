

// // controllers/cartController.js
// const Cart = require('../models/Cart.js');

// exports.addToCart = async (req, res) => {
//   const { productId, userId } = req.body;
  
//   try {
//     // Check if the product already exists in the cart for the given user
//     const existingCartItem = await Cart.findOne({ productId, userId });

//     if (existingCartItem) {
//       // If the product already exists, update the quantity
//       existingCartItem.quantity += 1;
//       await existingCartItem.save();
//       return res.status(200).json({ message: 'Product quantity updated in the cart successfully', cart: existingCartItem });
//     }

//     // If the product doesn't exist in the cart, create a new cart item
//     const cartItem = new Cart({ productId, userId });
//     await cartItem.save();
    
//     return res.status(200).json({ message: 'Product added to cart successfully', cart: cartItem });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: error });
//   }
// };

// exports.getAllCart = async (req, res) => {
//   try {
//     // Retrieve all cart items
//     const cartItems = await Cart.find({}).populate('productId').select('productId userId quantity');
//     return res.status(200).json(cartItems);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: error });
//   }
// };

// exports.updateCartItemQuantity = async (req, res) => {
//   const { cartItemId, quantity } = req.body;

//   try {
//     const cartItem = await Cart.findById(cartItemId);

//     if (!cartItem) {
//       return res.status(404).json({ message: 'Cart item not found' });
//     }

//     cartItem.
//     quanity = quantity;
//     await cartItem.save();

//     return res.status(200).json({ message: 'Cart item quantity updated successfully', cart: cartItem });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: error });
//   }
// };



// controllers/cartController.js
const Cart = require('../models/Cart.js');

exports.addToCart = async (req, res) => {
  const { productId, userId } = req.body;
  
  try {
    // Check if the product already exists in the cart for the given user
    const existingCartItem = await Cart.findOne({ productId, userId });

    if (existingCartItem) {
      // If the product already exists, update the quantity
      existingCartItem.quantity += 1;
      await existingCartItem.save();
      return res.status(200).json({ message: 'Product quantity updated in the cart successfully', cart: existingCartItem });
    }

    // If the product doesn't exist in the cart, create a new cart item
    const cartItem = new Cart({ productId, userId });
    await cartItem.save();
    
    return res.status(200).json({ message: 'Product added to cart successfully', cart: cartItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

exports.getAllCart = async (req, res) => {
  try {
    // Retrieve all cart items
    const cartItems = await Cart.find({}).populate('productId').select('productId userId quantity');
    return res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

exports.updateCartItemQuantity = async (req, res) => {
  const { cartItemId, quantity } = req.body;

  try {
    const cartItem = await Cart.findById(cartItemId);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    return res.status(200).json({ message: 'Cart item quantity updated successfully', cart: cartItem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};

exports.deleteCartItem = async (req, res) => {
  const { cartItemId } = req.body;

  try {
    const cartItem = await Cart.findById(cartItemId);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    await cartItem.deleteOne()

    return res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
};
