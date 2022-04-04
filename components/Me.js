import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
function Me() {
  const router = useRouter();
  const { user } = useSelector((state) => state.loadedUser);
  return (
    <>
      {user && (
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-purple-600">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src={user.avatar.url}
                    alt={user.username}
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {user.username}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {user.description}
                </h3>
              </div>
              <div className="my-4"></div>
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-1 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{user.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">{user.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">{user.contactNum}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Address</div>
                      <div className="px-4 py-2">{user.address}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <a className="text-blue-800">{user.email}</a>
                      </div>
                    </div>

                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span>Status</span>
                        <span className="ml-auto">
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span>Member since</span>
                        <span className="ml-auto">{user.createdAt}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("./update");
                  }}
                  className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                >
                  Update your Information
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Me;
