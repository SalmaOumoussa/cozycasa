import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
function Banner() {
  const router = useRouter();
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://res.cloudinary.com/drckds98u/image/upload/v1648631480/cc/banner_oi7yaz.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lh font-bold text-white sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button
          onClick={() => router.push("/allListings")}
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
