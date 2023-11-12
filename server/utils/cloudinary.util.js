import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * This JavaScript function uploads an image to Cloudinary and returns the public ID and secure URL of
 * the uploaded image.
 * @param image - The `image` parameter is the path or URL of the image file that you want to upload to
 * Cloudinary.
 * @returns The function `uploadImage` returns an object with two properties: `public_id` and `url`.
 */
const uploadImage = async (image) => {
  const result = await cloudinary.uploader.upload(image, {
    folder: "images",
    use_filename: true,
  });

  const imageLink = {
    public_id: result.public_id,
    url: result.secure_url,
  };

  return imageLink;
};

export default uploadImage;
