import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all products
// @access  public
// @route   GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc    Fetch single product
// @access  public
// @route   GET /api/products/:id

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProductById, getProducts };
