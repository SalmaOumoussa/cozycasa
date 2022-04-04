import React, { useEffect } from "react";
import Link from "next/link";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
import { MDBDataTable } from "mdbreact";
import easyinvoice from "easyinvoice";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";

const MyBookings = () => {
  const dispatch = useDispatch();

  const { bookings, error } = useSelector((state) => state.bookings);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

  const downloadInvoice = async (booking) => {
    const data = {
      documentTitle: "Booking INVOICE", //Defaults to INVOICE
      currency: "USD",
      taxNotation: "vat", //or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "/images/logo.png",
      sender: {
        company: "CozyCasa",
        address: "Km 9, Route d'Agadir, Essaouira Aljadida BP. 383, Essaouira",
        zip: "10001",
        city: "Essaouira",
        country: "Morocco",
      },
      client: {
        company: `${booking.user.firstName}`,
        address: `${booking.user.email}`,
        zip: "",
        city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
          "en-US"
        )}`,
        country: `Check In: ${new Date(booking.checkOutDate).toLocaleString(
          "en-US"
        )}`,
      },
      invoiceNumber: `${booking._id}`,
      invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
      products: [
        {
          Days_Of_Stay: `${booking.daysOfStay}`,
          Room_ID: `${booking.room}`,
          tax: 0,
          price: booking.amountPaid,
        },
      ],
      bottomNotice:
        "This is auto generated Invoice of your booking on CozyCasa.",
    };

    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf);
  };

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
                <a>
                  <EyeIcon />
                </a>
              </Link>

              <div onClick={() => downloadInvoice(booking)}>
                <DownloadIcon />
              </div>
            </>
          ),
        });
      });

    return data;
  };
  return (
    <div className="container container-fluid">
      <h1 className="font-bold text-2xl">My Bookings</h1>
      <MDBDataTable
        data={setBookings()}
        className="px-3"
        bordered
        striped
        hover
      />
    </div>
  );
};

export default MyBookings;
