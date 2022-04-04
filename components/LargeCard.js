import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

function LCard({ img, title, description, buttonText }) {
  const { rooms } = useSelector((state) => state.allRooms);
  // console.log(rooms);
  const { user, loading } = useSelector((state) => state.loadedUser);

  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-3xl mb-3 w-64 text-white">{title}</h3>
        <p>{description}</p>
        {/* <ToastContainer /> */}
        {user ? (
          <button
            onClick={() =>
              toast.success("You'll Get Notified Of our Best Listing")
            }
            className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
          >
            <ToastContainer />
            {buttonText}
          </button>
        ) : (
          <Link href={"/login"}>
            <button
              onClick={() => toast.error("Login to your account First")}
              className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5"
            >
              <ToastContainer />
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default LCard;
