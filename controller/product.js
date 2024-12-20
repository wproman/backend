const Product = require("../models/product.model");
exports.create = async (req, res, next) => {
  try {
    if (!req.body.json) {
      const error = new Error("Invaid entry");
      res.status(400);
      throw error;
    }
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find({});
    if (!products) {
      const error = new Error("Product not found");
      res.status(404);
      throw error; // This will automatically pass to the error handler
    }
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404);
      throw new Error("No product found"); // This will automatically pass to the error handler
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    // If no product is found, return a 404 response
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    // If successful, return a success message
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};
