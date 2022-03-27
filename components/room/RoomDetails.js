import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import RoomReview from "../../components/room/RoomReview";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import {
  checkBooking,
  getBookedDates,
} from "../../redux/actions/bookingActions";
import { CHECK_BOOKING_RESET } from "../../redux/constants/bookingConstants";

function RoomDetails() {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [daysOfStay, setDaysOfStay] = useState();
  const [paymentLoading, setPaymentLoading] = useState(false);
  const dispatch = useDispatch();
  function check(exists) {
    if (exists) {
      return <CheckIcon className="h-8 w-8 text-green-600 p-2" />;
    }
    if (!exists) {
      return <XIcon className="h-8 w-8 text-red-600 p-2" />;
    }
  }

  const { dates } = useSelector((state) => state.bookedDates);
  const { user } = useSelector((state) => state.loadedUser);
  const { room, error } = useSelector((state) => state.RoomDetails);
  const { available, loading: bookingLoading } = useSelector(
    (state) => state.checkBooking
  );

  const excludedDates = [];
  dates.forEach((date) => {
    excludedDates.push(new Date(date));
  });

  useEffect(() => {
    dispatch(getBookedDates(id));
    toast.error(error);
    dispatch(clearErrors());
  }, [dispatch, id]);

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    if (checkInDate && checkOutDate) {
      // Calclate days of stay
      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 + 1
      );

      setDaysOfStay(days);

      dispatch(
        checkBooking(id, checkInDate.toISOString(), checkOutDate.toISOString())
      );
    }
  };

  const { id } = router.query;

  const newBookingHandler = async () => {
    const bookingData = {
      room: router.query.id,
      checkInDate,
      checkOutDate,
      daysOfStay,
      amountPaid: 90,
      paymentInfo: {
        id: "STRIPE_PAYMENT_ID",
        status: "STRIPE_PAYMENT_STATUS",
      },
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/bookings", bookingData, config);

      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Head>
        <title>{room.name} - CozyCasa</title>
      </Head>
      <div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-2 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border hover:scale-110 transition duration-300 ease-in-out border-gray-200"
                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {room.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {room.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">{room.ratings}</span>
                  </span>
                </div>
                <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                  {room.description}
                </p>
                <div className=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 className="text-gray-900 te text-xl font-medium">
                    {" "}
                    Address :{" "}
                  </h1>
                  <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-900">
                    {room.address}
                  </p>
                </div>
                <div className=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <h1 className="text-gray-900 text-xl font-medium">
                    {" "}
                    Features
                  </h1>
                  <ol>
                    <li className="flex text-gray-900 p-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.guestCapacity}
                      </span>{" "}
                      Guests
                    </li>
                    <li className="flex text-gray-900 pl-2 pb-2">
                      <span className="font-semibold pr-1 text-purple-900">
                        {room.numOfBeds}
                      </span>{" "}
                      Beds
                    </li>
                    <li className="flex text-gray-900">
                      {check(room.breakfast)}
                      Breakfast
                    </li>
                    <li className="flex text-gray-900">
                      {check(room.internet)}
                      Internet
                    </li>
                    <li className="flex text-gray-900">
                      {check(room.airConditioned)}
                      Air Conditioned
                    </li>
                    <li className="flex text-gray-900">
                      {check(room.petsAllowed)}
                      Pets Allowed
                    </li>
                    <li className="flex text-gray-900">
                      {check(room.roomCleaning)}
                      Room Cleaning
                    </li>
                  </ol>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {room.pricePerNight}
                  </span>
                </div>
              </div>
              <hr />
              <div className="m-auto mt-10 bg-gray-300 rounded-lg">
                <p className="font-semibold text-purple-900 text-lg">
                  Pick Check In & Check Out Date
                </p>
                <DatePicker
                  className="w-full"
                  selected={checkInDate}
                  onChange={onChange}
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  excludeDates={excludedDates}
                  selectsRange
                  inline
                />
                {available === true && (
                  <div className="alert alert-success my-3 font-weight-bold">
                    Room is available. Book now.
                  </div>
                )}

                {available === false && (
                  <div className="alert alert-danger my-3 font-weight-bold">
                    Room not available. Try different dates.
                  </div>
                )}

                {available && !user && (
                  <div className="alert alert-danger my-3 font-weight-bold">
                    Login to book room.
                  </div>
                )}

                {available && user && (
                  <button
                    onClick={newBookingHandler}
                    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
                  >
                    Book It
                  </button>
                )}
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
