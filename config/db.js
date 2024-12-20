const mongoose = require("mongoose");
const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose
    .connect(dbURI)
    .then(() => {
      console.log("Database connected successfully!");
      // Start the server after successful DB connection
    })

    .catch((err) => {
      console.error("Database connection failed:", err.message);
      process.exit(1); // Exit the process if DB connection fails
    });

  process.on("SIGINT", async () => {
    console.log("Shutting down gracefully...");
    await mongoose.connection.close();
    process.exit(0);
  });
};
module.exports = connectDB;
