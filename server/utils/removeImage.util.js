import fs from "fs";

/**
 * The `removeImage` function is used to delete a file from the file system using the `fs.unlink`
 * method.
 * @param path - The `path` parameter is a string that represents the file path of the image that you
 * want to remove.
 */
const removeImage = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

export default removeImage;
