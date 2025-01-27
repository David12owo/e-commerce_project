import { UserModel } from "../../models/userModel/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (validator.isEmail(email) === false) {
    return alert("Please a valid email address");
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
      message: "Please provide a strong password",
      status: "failed",
    });
  }

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });

    if (user === null) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect === false) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }
    user.password = undefined;
    res.status(200).json({ user, status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { loginUser };
