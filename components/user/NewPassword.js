import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../../redux/actions/userActions";
import Image from "next/image";

const NewPassword = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { error, loading, success } = useSelector(
    (state) => state.forgotPassword
  );
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      router.push("/login");
    }
  }, [dispatch, success, error]);
  const submitHandler = (e) => {
    e.preventDefault();

    const passwords = {
      password,
      confirmPassword,
    };

    dispatch(resetPassword(router.query.token, passwords));
  };
  return (
    <>
      {/* <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
        defer
      ></script> */}

      <div className="container max-w-full mx-auto md:py-24 px-6 -my-10">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="md:mt-6">
                <form onSubmit={submitHandler} className="mt-8">
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600 font-bold">
                        Password
                      </span>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=""
                        type="password"
                        className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600 font-bold">
                        Password Confirm
                      </span>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder=""
                        type="password"
                        className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-purple-500 px-5 py-2 shadow-md w-full rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
                      disabled={loading ? true : false}
                    >
                      {loading ? <SyncOutlined spin /> : "Update Password"}
                      <ToastContainer />
                    </button>
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

export default NewPassword;
