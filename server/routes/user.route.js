import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

/**
 * The code `router.route("/").get(getUsers).post(createUser)` sets up a route for the root URL ("/")
 * that accepts GET and POST requests. The `getUsers` function is called when a GET request is made to
 * the root URL, and the `createUser` function is called when a POST request is made to the root URL.
 */
const router = Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
