import mongoose from "mongoose";
import logger from "../utils/logger.util.js";

/**
 * The function `connectDB` connects to a MongoDB database using the provided URI and logs the
 * connection status.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.log("info", `MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.log("error", `Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
