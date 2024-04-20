const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/UserModel");
const Product = require("../Models/ProductModel")

// Get route for getting all the users
router.get("/login", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
  }
});

// Get route to get wishlist products
router.get("/wishlist/:userId", async (req, res) => {
  let userId = req.params.userId;

  try {
    const response = await User.find({ userId: userId });
    res.json(response[0].likedProducts);
  } catch (err) {
    console.error(err);
  }
});

// Get route for single user
router.get('/user/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      const foundUser = await User.find({ userId: userId });
      res.json(foundUser);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
