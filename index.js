const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", productRouter.router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose
  .connect(
    "mongodb+srv://ayaan:Fq8FiSRtfVtH6Qa4@cluster0.xuhya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("error", err));