import React, { useEffect } from "react";
import Link from "next/link";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";
import BookingItem from "./BookingItem";
import Table from "react-tailwind-table";
import "react-tailwind-table/dist/index.css";

function Booking() {
  const dispatch = useDispatch();

  const { bookings, error } = useSelector((state) => state.bookings);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

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
              <a>
                <EyeIcon className="h-8 w-8 " />
              </a>
            </Link>

            <button
              className="btn btn-success mx-2"
              onClick={() => downloadInvoice(booking)}
            >
              <DownloadIcon />
            </button>
          </>
        ),
      });
    });
  return (
    <div>
      <Table
        columns={data.columns}
        rows={data.rows}
        per_page={5}
        table_header="My Bookings"
        should_export={false}
        className="mx-9 bg-red-900"
      />
    </div>
  );
}

export default Booking;
