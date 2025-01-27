import { Button, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router";
import validator from "validator";
import { serverUrl } from "../utils/helper";
import axios from "axios";
import { updateUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [userFormData, setUserFormData] = React.useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleUserLogin() {
    if (validator.isEmail(userFormData.email) === false) {
      return alert("Provide a valid email address");
    }
    if (
      validator.isStrongPassword(userFormData.password, {
        minlength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      }) === false
    ) {
      return alert(
        "Password must contain UPPERCASE, lowercase, number, special characters and a digit"
      );
    }
    setIsLoading(true);
    // Now we can login the user successfully
    try {
      const response = await axios.post(
        `${serverUrl}/auth/login`,
        userFormData
      );
      if (response.data.status === "success") {
        dispatch(updateUser(response.data.user));
      }
      if (response.data.user.userType === "admin") {
        return navigate("/admin");
      }

      navigate("/profile");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="grid h-screen place-items-center">
      <form className="grid gap-4 w-full max-w-[500px] border p-4 rounded-lg">
        <h3 className="text-2xl text-blue-500">Welcome back!</h3>
        <p className="text-gray-500 text-lg font light text center">
          Enter your login details to continue
        </p>
        <Input
          onChange={(e) =>
            setUserFormData({ ...userFormData, email: e.target.value })
          }
          placeholder="Enter your email"
          size="large"
        />
        <Input.Password
          onChange={(e) =>
            setUserFormData({ ...userFormData, password: e.target.value })
          }
          placeholder="password"
          size="large"
        />
        <Button
          onClick={handleUserLogin}
          loading={isLoading}
          type="primary"
          size="large"
        >
          Login
        </Button>

        <p>
          {" "}
          Don't have an account yet{" "}
          <Link
            className=" hover:underline font-semibold text-gray-500"
            to={"/register"}
          >
            Sign Up Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
