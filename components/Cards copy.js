import React from "react";
import Image from "next/image";
import Link from "next/link";

function Cards({ room } /*{ img, title }*/) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src="/images/logo.png" height="100" width="100" />
      </div>
      <h3 className="text-2xl mt-3">{}</h3>
      <Link href={`/rooms/${room._id}`}>
        <a>{room.name}</a>
      </Link>
      <p>${room.pricePerNight} / Night</p>
    </div>
  );
}

export default Cards;
