/**
 * The notFoundHandler function is a middleware that handles 404 errors by creating a new Error object
 * with a message indicating the requested URL was not found, setting the response status to 404, and
 * passing the error to the next middleware.
 */
const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);

  next(error);
};

export default notFoundHandler;
