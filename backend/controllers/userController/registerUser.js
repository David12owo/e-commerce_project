import { UserModel } from "../../models/userModel/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
  const { email, name, password } = req.body;

  if (validator.isEmpty(name, { ignore_whitespace: true })) {
    return res
      .status(400)
      .json({ message: "Please provide your name", status: "failed" });
  }
  if (validator.isEmail(email) === false) {
    return res
      .status(400)
      .json({ message: "Please provide your email address", status: "failed" });
  }
  if (
    validator.isStrongPassword(password, {
      minlength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res.status(400).json({
      message:
        "Password must contain UPPERCASE, lowercase, number, special characters",
      status: "failed",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  // registering the user
  try {
    const user = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    await user.save();

    res
      .status(201)
      .json({ message: "Account created successfully", status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { registerUser };
