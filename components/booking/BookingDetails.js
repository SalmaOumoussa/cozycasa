import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";

const BookingDetails = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/gh/Anas-Hamadi/cozycasa/scripts/booking.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const router = useRouter();

  const dispatch = useDispatch();

  const { booking, error } = useSelector((state) => state.bookingDetails);
  const { user } = useSelector((state) => state.loadedUser);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, booking]);

  const isPaid =
    booking.paymentInfo && booking.paymentInfo.status === "paid" ? true : false;

  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 bg-purple-50">
        {booking && booking.room && booking.user && (
          <>
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src="/images/logo.png"
              />
              <img
                className="mt-6 w-full"
                alt="image of a girl posing"
                src="/images/logo.png"
              />
            </div>
            <div className="md:hidden">
              <img
                className="w-full"
                alt="image of a girl posing"
                src="/images/logo.png"
              />
              <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                <img
                  alt={booking.room.name}
                  className="md:w-48 md:h-48 w-full"
                  src="/images/logo.png"
                />
                <img
                  alt={booking.room.name}
                  className="md:w-48 md:h-48 w-full"
                  src="/images/logo.png"
                />
                <img
                  alt={booking.room.name}
                  className="md:w-48 md:h-48 w-full"
                  src="/images/logo.png"
                />
                <img
                  alt={booking.room.name}
                  className="md:w-48 md:h-48 w-full"
                  src="/images/logo.png"
                />
              </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 m-3">
                <p className="text-sm font-semibold leading-none text-black">
                  Booking ID #{" "}
                  <p className="text-purple-800 font-semibold">{booking._id}</p>
                </p>
                <h1 className="lg:text-2xl text-xl font-bold lg:leading-6 leading-7 text-purple-900 m-2">
                  User Info
                </h1>
              </div>
              <div className="py-3 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">
                  <b>Name:</b> {booking.user && booking.user.firstName}
                </p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600">
                    <b>Email:</b> {booking.user && booking.user.email}
                  </p>
                  <svg
                    className="cursor-pointer text-gray-300"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Amount:</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 mr-3">
                    ${booking.amountPaid}
                  </p>
                  <svg
                    className="text-gray-300 cursor-pointer"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="lg:text-2xl text-xl font-bold lg:leading-6 leading-7 text-purple-900 p-2 m-3">
                Booking Info
              </h1>
              <div>
                <div className="mb-2">
                  <p>
                    <b>Check In:</b>{" "}
                    {new Date(booking.checkInDate).toLocaleString("en-US")}
                  </p>

                  <p>
                    <b>Check Out:</b>{" "}
                    {new Date(booking.checkOutDate).toLocaleString("en-US")}
                  </p>
                </div>
                <hr />
                <h2 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-purple-900 p-2 m-3">
                  Payment Status
                </h2>
                <p className={isPaid ? "greenColor" : "redColor"}>
                  <b>{isPaid ? "Paid" : "Not Paid"}</b>
                </p>

                {user && user.role === "Admin" && (
                  <>
                    <h4 className="my-4">Stripe Payment ID</h4>
                    <p className="redColor">
                      <b>{booking.paymentInfo.id}</b>
                    </p>
                  </>
                )}
              </div>
              <div>
                <h2 className="lg:text-2xl text-xl font-bold lg:leading-6 leading-7 text-purple-900 p-2 m-3">
                  Booked Room:
                </h2>
                <button
                  onClick={() => router.push(`/room/${booking.room._id}`)}
                  className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
                >
                  <svg
                    className="mr-3 text-white dark:text-gray-900"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.66699 4.83333V4.84166"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.333 11.5V11.5083"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-purple-800 font-semibold">
                    {booking.room.name}
                  </span>
                </button>
                <div className="border-t border-b py-4 mt-7 border-gray-200">
                  <div
                    data-menu
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Price Per Night:
                    </p>
                    <button
                      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                      role="button"
                      aria-label="show or hide"
                    >
                      <svg
                        className="transform text-purple-600"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
                    id="sect"
                  >
                    ${booking.room.pricePerNight}
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b py-4 border-gray-200">
                  <div
                    data-menu
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Total Days of Stay:
                    </p>
                    <button
                      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                      role="button"
                      aria-label="show or hide"
                    >
                      <svg
                        className="transform text-purple-600"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600"
                    id="sect"
                  >
                    {booking.daysOfStay} Day(s)
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookingDetails;
