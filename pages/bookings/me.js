import React, { useEffect } from "react";
import { getSession } from "next-auth/react";
import { EyeIcon, DownloadIcon } from "@heroicons/react/solid";

import Booking from "../../components/booking/Booking";
import Header from "../../components/Header";

import { myBookings } from "../../redux/actions/bookingActions";
import { wrapper } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";

const MyBookingsPage = () => {
  const dispatch = useDispatch();

  const { bookings, error } = useSelector((state) => state.bookings);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <Booking />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      await store.dispatch(myBookings(req.headers.cookie, req));
    }
);

export default MyBookingsPage;
