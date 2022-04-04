import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

function InfoCard({ room }) {
  return (
    <div className="flex w-full ml-20 mr-20 mb-11 bg-slate-100 rounded py-5 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* Image */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src="/images/logo.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* left Div */}
      <div className="flex flex-col flex-grow pl-5 ">
        {/* Top */}
        <div className="flex justify-between">
          <p>{room.address}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        {/* Midd */}
        <h4 className="text-xl">{room.name}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-sm pt-2 text-gray-500 flex-grow">
          {room.description}
        </p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon
              className="h-5
                text-red-400"
            />
            {room.ratings}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pd-2">
              {room.pricePerNight}
            </p>
            <p className="text-right font-extralight">total</p>
          </div>
          <div>
            <Link href={`/room/${room._id}`}>
              <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
