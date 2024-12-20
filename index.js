const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const productRouter = require("./routes/product");
connectDB();
const app = express();
const port = process.env.PORT || 5000;
// Enable CORS
app.use(cors());
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
