const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductModel");

// Route to fetch all data
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

// Creat new product
router.post("/post", async (req, res) => {
    const product = new Product({
      name: req.body.name,
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      userId: req.body.userId,
      category: req.body.category,
      images: req.body.images,
      brand: req.body.brand,
      warranty: req.body.warranty,
      condition: req.body.condition,
      size: req.body.size,
      gender: req.body.gender,
      color: req.body.color,
      material: req.body.material,
      isbn: req.body.isbn,
      edition: req.body.edition,
      publisher: req.body.publisher,
      jobType: req.body.jobType,
      requirements: req.body.requirements,
      processor: req.body.processor,
      ram: req.body.ram,
      storage: req.body.storage,
      screenSize: req.body.screenSize,
      os: req.body.os,
    });
  
    try {
      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (err) {
      console.log(err);
    }
  });

// Put route to add buyerID and offer
router.post("/product/buy", async (req, res) => {
    const productId = req.body.productId
    console.log(productId)
    const data = {
      productId: productId,
      buyerId: req.body.buyerId,
      offer: req.body.offer,
      status: req.body.status
    }
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $push: { offers: data } },
        { new: true }
      );
      console.log(updatedProduct)
      res.json("Request Successfull")
    } catch (err) {
      console.log("Buyer", err);
    }
  });

// Find the product by productId
router.get("/product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const foundProduct = await Product.findById(productId);

    if (!foundProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(foundProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
