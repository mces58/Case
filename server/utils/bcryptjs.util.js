import bcryptjs from "bcryptjs";

/**
 * The above code defines two functions, `encode` and `decode`, which use the bcryptjs library to hash
 * and compare passwords respectively.
 * @param password - The `password` parameter is the plain text password that you want to encode or
 * compare.
 * @returns The `encode` function returns the hashed password, while the `decode` function returns a
 * boolean value indicating whether the provided password matches the hashed password.
 */
const encode = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

const decode = async (password, hashedPassword) => {
  const isMatch = await bcryptjs.compare(password, hashedPassword);
  return isMatch;
};

export { encode, decode };
