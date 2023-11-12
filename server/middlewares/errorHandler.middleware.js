import logger from "../utils/logger.util.js";

/**
 * The above code is a JavaScript function that handles errors in a web application and logs the error
 * message using a logger utility.
 */
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  logger.log("error", err.message);

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};

export default errorHandler;
