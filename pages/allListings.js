import Listing from "../components/Listing";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";

const allListings = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { location, startDate, endDate, guestCapacity } = router.query;
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  let { page = 1 } = router.query;
  page = Number(page);
  let count = roomsCount;
  if (location) {
    count = filteredRoomsCount;
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  const handlePagination = (pageNumber) => {
    window.location.href = `allListings/?page=${pageNumber}`;
  };
  if (location) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `from ${formattedStartDate} to ${formattedEndDate}`;
  }
  return (
    <>
      <Header />
      {rooms && rooms.length === 0 ? (
        <p>No rooms were found!</p>
      ) : (
        rooms.map((room) => <Listing key={room._id} room={room} />)
      )}
      {resPerPage < count && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            className=""
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default allListings;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query, res }) => {
      await store.dispatch(
        getRooms(
          req,
          query.page,
          query.location,
          query.guestCapacity,
          query.startDate,
          query.endDate
        )
      );
    }
);
