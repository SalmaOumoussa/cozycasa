import React, { useEffect } from "react";
import Link from "next/link";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
import { MDBDataTable } from "mdbreact";
// import easyinvoice from "easyinvoice";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";

const MyBookings = () => {
  const dispatch = useDispatch();

  const { bookings, error } = useSelector((state) => state.bookings);
  console.log(bookings);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

  const setBookings = () => {
    const data = {
      columns: [
        {
          label: "Booking ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Check In",
          field: "checkIn",
          sort: "asc",
        },
        {
          label: "Check Out",
          field: "checkOut",
          sort: "asc",
        },
        {
          label: "Amount Paid",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };
    bookings &&
      bookings.forEach((booking) => {
        data.rows.push({
          id: booking._id,
          checkIn: new Date(booking.checkInDate).toLocaleString("en-US"),
          checkOut: new Date(booking.checkOutDate).toLocaleString("en-US"),
          amount: `$${booking.amountPaid}`,
          actions: (
            <>
              <Link href={`/bookings/${booking._id}`}>
                <a className="btn btn-primary">
                  <EyeIcon />
                </a>
              </Link>

              <button
                className="btn btn-success mx-2"
                // onClick={() => downloadInvoice(booking)}
              >
                <DownloadIcon />
              </button>
            </>
          ),
        });
      });

    return data;
  };
  return (
    <>
      <h1 className="font-bold text-2xl">My Bookings</h1>
      <MDBDataTable
        data={setBookings()}
        className="px-3"
        bordered
        striped
        hover
      />
    </>
  );
};

export default MyBookings;
