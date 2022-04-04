import React from "react";
import Link from "next/link";

const Listing = ({ room }) => {
  console.log(room.images[0].url);
  return (
    <>
      <div className="bg-white">
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />

        <div className=" m-4 h-15 w-full max-w-sm rounded overflow-hidden shadow-lg px-4 py-3">
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <img src={room.images[0].url} alt={room.name} className="w-full" />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <a
                  href="javascript:void(0)"
                  className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                >
                  {room.name}
                </a>
              </h3>
              <p className="text-base text-body-color leading-relaxed mb-7">
                {room.description}
              </p>
              <Link href={`/room/${room._id}`}>
                <a
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#c265ca]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-purple-400 hover:bg-purple-400 hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
