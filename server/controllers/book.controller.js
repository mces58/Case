import Book from "../models/book.model.js";
import BookFilter from "../utils/bookFilter.util.js";
import uploadImage from "../utils/cloudinary.util.js";
import removeImage from "../utils/removeImage.util.js";

/**
 * The function `getBooks` retrieves a list of books from a database and returns them as a JSON
 * response.
 */
const getBooks = async (req, res, next) => {
  try {
    const bookCount = await Book.countDocuments();
    const apiFeatures = new BookFilter(Book.find(), req.query).search();
    const books = await apiFeatures.query;

    res.status(200).json({
      status: "success",
      results: bookCount,
      data: {
        books,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The function `getBook` is an asynchronous function that retrieves a book by its ID and returns it in
 * a JSON response.
 * @returns a JSON response with the status code 200 and the book data in the "data" field.
 */
const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book)
      return next(new Error(`Book with id ${req.params.id} not found`));

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The `createBook` function is an asynchronous function that handles the creation of a new book by
 * uploading an image, removing the image after upload, and saving the book details to the database.
 */
const createBook = async (req, res, next) => {
  try {
    const result = await uploadImage(req.file.path);
    removeImage(req.file.path);
    const book = new Book({
      title: req.body.title,
      description: req.body.description,
      image: result,
      price: req.body.price,
      author: req.body.author,
      publisher: req.body.publisher,
    });

    await book.save();

    res.status(201).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The `updateBook` function updates a book record in a database based on the provided request
 * parameters and body, including handling image uploads.
 * @returns a JSON response with a status of "success" and the updated book data.
 */
const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return next(new Error(`Book with id ${req.params.id} not found`));
    }

    if (req.file) {
      const result = await uploadImage(req.file.path);
      removeImage(req.file.path);
      req.body.image = result;
    }

    const updateFields = {};
    for (const key in req.body) {
      updateFields[key] = req.body[key];
    }

    const allowedFields = [
      "title",
      "description",
      "price",
      "author",
      "publisher",
      "image",
    ];
    const isValidOperation = Object.keys(updateFields).every((field) =>
      allowedFields.includes(field)
    );

    if (!isValidOperation) {
      return next(new Error("Invalid update operation."));
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        book: updatedBook,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The `deleteBook` function deletes a book from the database based on the provided book ID.
 * @returns The deleteBook function returns a JSON response with a status of "success" and a data
 * property set to null.
 */
const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book)
      return next(new Error(`Book with id ${req.params.id} not found`));

    await Book.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
