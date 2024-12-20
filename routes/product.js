const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
router.route("/").post(productController.create).get(productController.getAll);
router
  .route("/:id")
  .get(productController.getOne)
  .patch(productController.update)
  .delete(productController.deleteOne);

exports.router = router;
