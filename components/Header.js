import { React, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../redux/actions/userActions";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon,
  ArrowDownIcon,
} from "@heroicons/react/solid";

import { useRouter } from "next/router";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const handleLogout = () => {
    signOut();
  };
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const router = useRouter();
  const { location } = router.query;

  // Showing Or not/ toggling the dropdown
  const [showOptions, setShowOptions] = useState();
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const renderDropdown = () => {
    if (showOptions) {
      if (user) {
        return (
          <div class=" inline-block ">
            <div
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <Link href="/profile">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 font-semibold"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    {user && user.name}
                  </a>
                </Link>
                <Link href="/bookings">
                  <a
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 font-semibold"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    My bookings
                  </a>
                </Link>
                <a
                  onClick={handleLogout}
                  className="text-purple-800 block px-4 py-2 text-sm hover:bg-gray-200 font-semibold cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        );
      }
      if (!user) {
        return (
          <div class=" inline-block ">
            <div
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <Link href="/register">
                  <a
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Register
                  </a>
                </Link>
                <Link href="/login">
                  <a
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        {" "}
        <img
          style={{ height: 200, width: 200 }}
          src="/images/logo.png"
          alt="CozyCasa"
        />
      </div>
      {/* mid */}
      {location ? (
        <div className="flex items-center py-2 font-semibold text-lg">
          <button className="text-white bg-purple-500 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            {/* <SearchIcon className="h-2 cursor-pointer" /> */}
            <Link href="/search">
              <a>Get Back to Search</a>
            </Link>
          </button>
        </div>
      ) : router.pathname == "/search" ? (
        <div className="flex items-center py-2 font-semibold text-md">
          <h1 className="border-2 rounded-full p-2 border-purple-800 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
            Type Below Where You Want To Stay In!
          </h1>
        </div>
      ) : router.pathname == "/login" ? (
        <div className="flex items-center font-semibold text-base">
          <h1>
            Don't have an account? Register{" "}
            <button className="text-purple-500 bg-gray-300 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              {/* <SearchIcon className="h-2 cursor-pointer" /> */}
              <Link href="/register">
                <a> Here</a>
              </Link>
            </button>
          </h1>
        </div>
      ) : router.pathname == "/register" ? (
        <div className="flex items-center font-semibold text-base">
          <h1>
            Already have an Account? Login{" "}
            <button className="text-purple-500 bg-gray-300 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              {/* <SearchIcon className="h-2 cursor-pointer" /> */}
              <Link href="/login">
                <a> Here</a>
              </Link>
            </button>
          </h1>
        </div>
      ) : (
        <div className="flex items-center py-2 font-semibold text-base">
          <h1>
            Welcome to Cozy Casa!{" "}
            <button className="text-white bg-purple-500 px-5 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
              {/* <SearchIcon className="h-4 cursor-pointer" /> */}
              <Link href="/search">
                <a>Serach for stays?</a>
              </Link>
            </button>
          </h1>
        </div>
      )}
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon onClick={handleClick} className="h-6" />
        </div>
        {user ? (
          <Link href="/me/update">
            <figure>
              <Image
                src={user.avatar && user.avatar.url}
                alt={user && user.name}
                width="50px"
                height="50px"
                className="rounded-full cursor-pointer"
              />
            </figure>
          </Link>
        ) : (
          <UserCircleIcon className="h-6" />
        )}
      </div>
      {renderDropdown()}
    </header>
  );
}

export default Header;
