import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {} from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { CHECK_BOOKING_RESET } from "../../redux/constants/bookingConstants";
import getStripe from "../../utils/getStripe";
import {
  checkBooking,
  getBookedDates,
} from "../../redux/actions/bookingActions";
import ListReviews from "../review/ListReviews";
import DaisyModal from "../review/DaisyModal";
import RoomCarousel from "./RoomCarousel";
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

  const bookRoom = async (id, pricePerNight) => {
    setPaymentLoading(true);

    const amount = pricePerNight * daysOfStay;

    try {
      const link = `/api/checkout_session/${id}?checkInDate=${checkInDate.toISOString()}&checkOutDate=${checkOutDate.toISOString()}&daysOfStay=${daysOfStay}`;

      const { data } = await axios.get(link, { params: { amount } });

      const stripe = await getStripe();

      // Redirect to checkout
      stripe.redirectToCheckout({ sessionId: data.id });

      setPaymentLoading(false);
    } catch (error) {
      setPaymentLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };
  const { id } = router.query;

  useEffect(() => {
    dispatch(getBookedDates(id));

    toast.error(error);
    dispatch(clearErrors());

    return () => {
      dispatch({ type: CHECK_BOOKING_RESET });
    };
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
          <div className="container py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-col">
              {/* CAROUSEL */}
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
                    <span className="text-gray-600 ml-3">{room.ratings}</span>
                  </span>
                </div>
                {/*  */}
              </div>
              <RoomCarousel room={room} />

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
                <h1 className="text-gray-900 text-xl font-medium"> Features</h1>
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
                <span className="title-font font-bold text-base text-gray-900">
                  CHARGING{" "}
                  <span className="text-purple-900 underline">
                    ${room.pricePerNight}
                  </span>
                </span>
              </div>
              <br />
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
                    onClick={() => bookRoom(room._id, room.pricePerNight)}
                    disabled={bookingLoading || paymentLoading ? true : false}
                    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
                  >
                    Book It - ${daysOfStay * room.pricePerNight}
                  </button>
                )}
              </div>
              <br />
              <DaisyModal />
              {room.reviews && room.reviews.length > 0 ? (
                <ListReviews reviews={room.reviews} />
              ) : (
                <p className="text-xl text-rose-900 font-semibold m-auto">
                  No Reviews were found
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomDetails;
