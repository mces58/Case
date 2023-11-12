import multer from "multer";
import { extname } from "path";

/**
 * The code is setting up a storage configuration for multer, a middleware for handling file uploads in Node.js.
 * The storage configuration is used to specify the destination directory and the filename of the uploaded file.
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./`);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${extname(file.originalname)}`);
  },
});

const upload = multer({ storage }).single("image");

export default upload;
