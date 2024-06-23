const express = require('express');
const cors = require('cors');
const connectDb = require("./db.js");
const port = process.env.PORT || 3000;

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: ['https://shop-nest-six.vercel.app','http://localhost:5173'],
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
  credentials: true,
}));


// Middleware for error catching
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong!");
  next();
});

const ProductRouter = require('./Routes/ProductRoute.js');
const UserRouter = require('./Routes/UserRoute.js');

app.use('/product-route', ProductRouter, UserRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});


