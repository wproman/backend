const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const productRouter = require("./routes/product");
connectDB();
const app = express();
const port = process.env.PORT || 8000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/products", productRouter.router);

// Error Handling Middleware
app.use(errorHandler);
// Connect to MongoDB

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
