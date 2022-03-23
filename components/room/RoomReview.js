import React from "react";

const RoomReview = () => {
  return (
    <div class="flex items-start  mt-12">
      <div class="flex-shrink-0">
        <div class="inline-block relative">
          <div class="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
              src="https://picsum.photos/id/646/200/200"
              alt="Profile picture"
            />
            <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>
      <div class="ml-6">
        <p class="flex items-baseline">
          <span class="text-gray-600 font-bold">Mary T.</span>
        </p>
        <div class="flex items-center mt-1">
          <svg
            class="w-4 h-4 fill-current text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            class="w-4 h-4 fill-current text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            class="w-4 h-4 fill-current text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            class="w-4 h-4 fill-current text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <svg
            class="w-4 h-4 fill-current text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        </div>
        <div class="flex items-center mt-4 text-gray-600"></div>
        <div class="mt-3">
          <span class="font-bold">Sapien consequat eleifend!</span>
          <p class="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
          <button class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomReview;
