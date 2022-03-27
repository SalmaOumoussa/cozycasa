import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, clearErrors } from "../../redux/actions/userActions";
import Image from "next/image";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
    }
  }, [dispatch, message, error]);
  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
    };

    dispatch(forgotPassword(userData));
  };
  return (
    <>
      <div className="font-mono">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <img
                src="/images/rose.jpg"
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-none"
              />

              <div className="w-full lg:w-1/2 bg-gray-200 p-5 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and we'll send you a link to reset your password!
                  </p>
                </div>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={submitHandler}
                >
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter Email Address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={loading ? true : false}
                    >
                      {loading ? <SyncOutlined spin /> : "Send Email"}
                      <ToastContainer />
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link href="/register">
                      <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                        Create an Account!
                      </a>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/login">
                      <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                        Already have an account? Login!
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
