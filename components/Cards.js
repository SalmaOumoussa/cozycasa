import React from "react";
import Image from "next/image";
import Link from "next/link";

function Cards({ room } /*{ img, title }*/) {
  return (
    <Link href={`/rooms/${room._id}`}>
      <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80  w-80">
          <Image
            src="/images/man.png"
            className="object-fit"
            height="100"
            width="100"
          />
        </div>
        <h3 className="text-2xl mt-3 texe-semibold text-black">{room.name}</h3>

        <p className="text-sm  texe-semibold text-black">
          ${room.pricePerNight} / Night
        </p>
      </div>
    </Link>
  );
}

export default Cards;
