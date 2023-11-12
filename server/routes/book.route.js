import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

/**
 * The code `router.route("/").get(getBooks).post(createBook)` sets up a route for the root URL ("/")
 * that accepts GET and POST requests. The `getBooks` function is called when a GET request is made to
 * the root URL, and the `createBook` function is called when a POST request is made to the root URL.
 */
const router = Router();

router.route("/").get(getBooks).post(createBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

export default router;
