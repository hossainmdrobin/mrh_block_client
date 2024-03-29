/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import handleBlur from "../../../../functions/handleBlur";
import { useRouter } from "next/router";
import { getBaseUrl } from "../../../../config";
import { useSignupWithEmailAndPasswordMutation } from "../../../../Redux/feature/auth/authApi";

const SignupWithEmailPassword = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signupWithEmailAndPassword, { data, isLoading, isError }] =
    useSignupWithEmailAndPasswordMutation();

  const blur = (e) => {
    handleBlur(e, user, setUser);
  };
  const handleSubmit = (e) => {
    signupWithEmailAndPassword(user);    
    e.preventDefault();
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("login", "true");
      router.push(`/create_profile/${data.userId}`);
    }
  }, [data]);

  return (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 p-2 bg-gray-800 lg:w-1/3 shadow-2xl rounded-xl my-8"
        action=""
      >
        <h2 className="text-success text-xl text-center my-3">
          Create an Account
        </h2>
        <input
          onBlur={blur}
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="input w-full my-2"
        />
        {/* {error.username && <small className='text-white'>username</small>} */}
        <input
          onBlur={blur}
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="input w-full my-2"
        />
        <input
          onBlur={blur}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="input w-full my-2"
        />
        <input
          onBlur={blur}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm password"
          className="input w-full my-2"
        />
        <div className="flex justify-center">
          <input
            type="submit"
            value="Signup"
            className="btn btn-ghost hover:shadow-xl normal-case bg-success my-2 text-white"
          />
        </div>
        <p className="mb-8 text-center text-gray-200">
          Already have an account?{" "}
          <Link href="/auth/login">
            <a className="text-success hover:underline">Login</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupWithEmailPassword;
