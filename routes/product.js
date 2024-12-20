const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
router
  .post("/api/products", productController.create)
  .get("/api/products", productController.getAll)
  .get("/api/product/:id", productController.getOne)
  .patch("/api/product/:id", productController.update)
  .delete("/api/product/:id", productController.deleteOne);

exports.router = router;
