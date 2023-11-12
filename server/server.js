import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectDB from "./configs/db.config.js";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import upload from "./utils/multer.util.js";
import notFoundHandler from "./middlewares/notFounderHandler.middleware.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

/**
 * The code snippet is configuring and setting up a Node.js Express server.
 * The server is listening on port 5000.
 * The server is using body-parser to parse incoming requests with JSON payloads.
 * The server is using dotenv to load environment variables from a .env file.
 * The server is connecting to MongoDB using Mongoose.
 * The server is using Multer to handle file uploads.
 * The server is using the bookRoutes for handling all the routes related to books.
 * The server is using the userRoutes for handling all the routes related to users.
 * The server is using the notFoundHandler middleware to handle 404 errors.
 */
dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/v1/books", upload, bookRoutes);
app.use("/api/v1/users", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
