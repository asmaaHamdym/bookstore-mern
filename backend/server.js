import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log(req);

  return res.status(234).send("Hello from my server");
});
const port = 3000 || process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECT_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
