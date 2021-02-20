const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const product = require('./Routs/products.route');
const colors = require("colors");
const connectDb = require('./config/db');

dotenv.config()
connectDb()

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', product);



const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} on ${process.env.NODE_ENV} mode`.blue);
});
