import React from "react";

const BookingItem = (booking) => {
  return (
    <table class="min-w-full leading-normal">
      <tbody>
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                <img
                  class="w-full h-full rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                  ezfherey{booking._id}
                </p>
              </div>
            </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
              2021{booking.checkInDate}
            </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
              1313{booking.checkOutDate}
            </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden
                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span class="relative">99{booking.amountPaid}</span>
            </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button
              type="button"
              class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              <EyeIcon />
              View
            </button>
            <button
              type="button"
              class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              <DownloadIcon />
              Download
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingItem;
