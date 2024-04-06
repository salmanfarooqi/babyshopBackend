const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userControler.js');



const productController = require('../controllers/productController.js');

 userRouter.post('/signup', userController.signup);
 userRouter.post('/login', userController.login);


module.exports =  userRouter;
