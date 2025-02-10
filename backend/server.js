import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import booksRouter from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  return res.status(234).send("Hello from my server");
});

app.use("/books", booksRouter);
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
