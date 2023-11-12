import { Schema, model } from "mongoose";

/**
 * The code you provided is defining a Mongoose schema for a book and exporting it as a model.
 * The schema defines the shape of the documents in the books collection.
 */
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter book title"],
  },

  description: {
    type: String,
  },

  image: {
    public_id: {
      type: String,
      required: [true, "Please enter book image public id"],
    },

    url: {
      type: String,
      required: [true, "Please enter book image url"],
    },
  },

  price: {
    type: Number,
    required: [true, "Please enter book price"],
  },

  author: {
    type: String,
    required: [true, "Please enter book author"],
  },

  publisher: {
    type: String,
    required: [true, "Please enter book publisher"],
  },
});

const Book = model("Book", BookSchema);

export default Book;
