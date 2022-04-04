import React, { useState, useContext, useEffect } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/";
      toast.success("Successfully Logged In");
    }
  };

  // router
  const router = useRouter();
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-300 h-screen">
        <div className="flex flex-col m-5 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-purple-600">
          {/* <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-purple-600 shadow-2xl p-6 rounded-full text-white">
                Sign In
              </div> */}
          <div className="relative  justify-center flex items-center h-11 cursor-pointer ">
            <Image
              src="https://i.ibb.co/Y7WYJH7/Cozy-Casa-Single-Home.png"
              // layout="fill"
              // objectFit="contain"
              objectPosition="left"
              width={170}
              height={170}
            />
          </div>
          <div className="mt-10">
            <form onSubmit={submitHandler}>
              <div className="relative w-full mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="  border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.here"
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="  border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="●●●●●●●●●●"
                  required
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="text-white bg-purple-500 px-5 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
                >
                  {loading ? <SyncOutlined spin /> : "Submit"}
                  <ToastContainer />
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-1/2 text-left">
              <Link href="/password/forgot">
                <a className="text-blue-900 text-xl">
                  <small>Forgot password?</small>
                </a>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <a href="#" className="text-blue-900 text-xl">
                <Link href="/register">
                  <a> Register</a>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
