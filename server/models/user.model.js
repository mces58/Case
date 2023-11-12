import { Schema, model } from "mongoose";

/**
 * The code is defining a Mongoose schema for a user.
 * The schema defines the shape of user objects in the collection.
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email address",
    ],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },

  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = model("User", userSchema);

export default User;
