import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="grid h-screen place-items-center">
      <form className="grid gap-4 w-full max-w-[500px] border p-4 rounded-lg">
        <h3 className="text-2xl text-blue-500">Welcome back!</h3>
        <p className="text-gray-500 text-lg font light text center">
          Enter your login details to continue
        </p>
        <Input placeholder="Enter your email" />
        <Input placeholder="password" size="large" />
        <Button type="primary">Login</Button>

        <p>
          {" "}
          Don't have an account yet{" "}
          <Link
            className=" hover:underline font-semibold text-gray-500"
            to={"/register"}
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
