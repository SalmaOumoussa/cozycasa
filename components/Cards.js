import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Cards({ room } /*{ img, title }*/) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/room/${room._id}`)}>
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
      <h3 className="text-2xl mt-3">{}</h3>
      <Link href={`/room/${room._id}`}>
        <a>{room.name}</a>
      </Link>
      <p>${room.pricePerNight} / Night</p>
    </div>
  );
}

export default Cards;
