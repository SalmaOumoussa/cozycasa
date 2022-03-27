import React from "react";
import { getSession } from "next-auth/react";

import BookingDetails from "../../components/booking/BookingDetails";
import Header from "../../components/Header";

import { getBookingDetails } from "../../redux/actions/bookingActions";
import { wrapper } from "../../redux/store";

const BookingDetailsPage = () => {
  return (
    <>
      <Header title="Booking Details" />
      <BookingDetails />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      await store.dispatch(
        getBookingDetails(req.headers.cookie, req, params.id)
      );
    }
);

export default BookingDetailsPage;
