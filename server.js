const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/database.js');
const userRouter  = require('./routers/userRouter.js');
const productRouter = require('./routers/productRouter.js');
const Cartrouter = require('./routers/cartRouter.js');
const OrderRouter = require('./routers/OrderRouter.js');
// dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectdb();

app.use(userRouter );
app.use(Cartrouter)
app.use(productRouter);
app.use(OrderRouter);


const PORT = 9000; // Use process.env.PORT if available, otherwise default to 9000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
