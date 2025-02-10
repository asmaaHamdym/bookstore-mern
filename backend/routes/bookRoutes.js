import express from "express";

import { Book } from "../models/bookModel.js";

const router = express.Router();

// get request to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).send({
      count: books.length,
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});
// get request to get a book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});
// post request to add a book
router.post("/", async (req, res) => {
  //   console.log(req.query.title);

  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send("Please fill all required fields: title, author, publishYear");
    }
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    });
    const newBookCreated = await Book.create(newBook);
    return res.status(201).send(newBookCreated);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

// put request to update a book
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send("Please fill all required fields: title, author, publishYear");
    }
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});
// delete request to delete a book
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

export default router;
