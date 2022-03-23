import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import RoomReview from "../../components/room/RoomReview";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-bootstrap";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

function RoomDetails() {
  const dispatch = useDispatch();
  function check(exists) {
    if (exists) {
      return <CheckIcon className="h-8 w-8 text-green-600 p-2" />;
    }
    if (!exists) {
      return <XIcon className="h-8 w-8 text-red-600 p-2" />;
    }
  }

  const { room, error } = useSelector((state) => state.RoomDetails || {});
  //   console.log(room);

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, []);

  return (
    <>
      <Head>
        <title>{room.name} - CozyCasa</title>
      </Head>
      <div>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-2 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border hover:scale-110 transition duration-300 ease-in-out border-gray-200"
                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
              />

              {/* Bootstarp Carousel 
                <Carousel>
                    {room.Images && room.images.map((image)=>(
                <Carousel.Item key={image.public._id}>
                        <div>
                            <Image />
                        </div>
                </Carousel.Item>
                    ))}
                </Carousel>
            */}

              {/* CAROUSEL
              
              <div
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>
  <!-- Indicators -->
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner relative w-full overflow-hidden">
    <!-- Single item -->
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        class="block w-full"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        class="block w-full"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              */}
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {room.category}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {room.name}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">{room.ratings}</span>
                  </span>
                </div>
                <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                  {room.description}
                </p>
                <div class=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 class="text-gray-900 te text-xl font-medium">
                    {" "}
                    Address :{" "}
                  </h1>
                  <p class="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                    {room.address}
                  </p>
                </div>
                <div class=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 class="text-gray-900 text-xl font-medium"> Features</h1>
                  <ol>
                    <li class="flex text-gray-900 p-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.guestCapacity}
                      </span>{" "}
                      Guests
                    </li>
                    <li class="flex text-gray-900 pl-2 pb-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.numOfBeds}
                      </span>{" "}
                      Beds
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.breakfast)}
                      Breakfast
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.internet)}
                      Internet
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.airConditioned)}
                      Air Conditioned
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.petsAllowed)}
                      Pets Allowed
                    </li>
                    <li class="flex text-gray-900">
                      {check(room.roomCleaning)}
                      Room Cleaning
                    </li>
                  </ol>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    {room.pricePerNight}
                  </span>
                  <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                    Book It
                  </button>
                </div>
              </div>
              <br />
              <RoomReview />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomDetails;
