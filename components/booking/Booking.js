import React, { useEffect } from "react";
import Link from "next/link";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";
import BookingItem from "./BookingItem";

function Booking() {
  const dispatch = useDispatch();

  const { bookings, error } = useSelector((state) => state.bookings);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

  return (
    <div>
      {bookings.forEach((booking) => {
        <BookingItem booking={booking} />;
      })}
    </div>
  );
}

export default Booking;
