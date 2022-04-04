// import React, { useEffect } from "react";
// import Link from "next/link";
// import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

// import { clearErrors } from "../../redux/actions/bookingActions";
// import BookingItem from "./BookingItem";

// function Booking() {
//   const dispatch = useDispatch();

//   const { bookings, error } = useSelector((state) => state.bookings);
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch]);

//   return (
//     <div>
//       {bookings.forEach((booking) => {
//         <BookingItem booking={booking} />;
//       })}
//     </div>
//   );
// }

// export default Booking;
import React, { useEffect } from "react";
import Link from "next/link";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import easyinvoice from "easyinvoice";

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

  const downloadInvoice = async (booking) => {
    const data = {
      documentTitle: "Booking INVOICE", //Defaults to INVOICE
      currency: "USD",
      taxNotation: "vat", //or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      logo: "https://res.cloudinary.com/drckds98u/image/upload/v1648410482/cc/logo_lklbov.png",
      sender: {
        company: "CozyCasa",
        address: "Km 9, Route d'Agadir, Essaouira Aljadida BP. 383, Essaouira",
        zip: "82000",
        city: "Essaouira",
        country: "Morocco",
      },
      client: {
        company: `${booking.user.firstName + " " + booking.user.lastName}`,
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
          quantity: `${booking.daysOfStay}`,
          description: `${booking.room.name}`,
          tax: 0,
          price: booking.room.pricePerNight,
        },
      ],
      bottomNotice:
        "This is auto generated Invoice of your booking on CozyCasa.",
    };

    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download(`CozyCasa_invoice_${booking._id}.pdf`, result.pdf);
  };

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
          <div className="flex justify-content align-items">
            <Link href={`/bookings/${booking._id}`}>
              <a>
                <EyeIcon className="h-8 w-8" />
              </a>
            </Link>

            <div onClick={() => downloadInvoice(booking)}>
              <DownloadIcon className="mx-6 h-8 w-8" />
            </div>
          </div>
        ),
      });
    });
  return (
    <div className="mx-12">
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
    </div>
  );
}

export default Booking;
