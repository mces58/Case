import User from "../models/user.model.js";
import { encode } from "../utils/bcryptjs.util.js";

/**
 * The getUsers function retrieves all users from the database, including their associated books, and
 * returns them as a JSON response.
 */
const getUsers = async (req, res, next) => {
  try {
    const userCount = await User.countDocuments();
    const users = await User.find()
      .populate({
        path: "books",
        select: "title description author image.url -_id",
      })
      .select("-password -__v");

    res.status(200).json({
      status: "success",
      results: userCount,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The getUser function retrieves a user by their ID and populates their books.
 * @returns a JSON response with the status code 200 and the user data in the "data" field.
 */
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId).populate("books");

    if (!user)
      return next(new Error("User with id ${req.params.userId} not found"));

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * The function `createUser` is an asynchronous function that creates a new user in a database with the
 * provided name, email, password, and books, and returns the created user as a response.
 * @returns a JSON response with the status code and data. If the user creation is successful, it will
 * return a status code of 201 (Created) and the newly created user object in the response data. If
 * there are any errors during the process, it will call the `next` function with the error object.
 */
const createUser = async (req, res, next) => {
  try {
    const { name, email, password, books } = req.body;

    if (!name || !email || !password || !books)
      return res.status(400).json({
        success: false,
        message: "Please enter all required fields.",
      });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });

    const user = await User.findOne({ email });

    if (user)
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });

    const hashedPassword = await encode(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      books,
    });

    await newUser.save();

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {};

const deleteUser = async (req, res, next) => {};

export { getUsers, getUser, createUser, updateUser, deleteUser };
