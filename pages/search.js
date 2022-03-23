import React, { useEffect } from "react";
import Search from "../components/room/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function searchPage(/*{ searchResult }*/) {
  const router = useRouter();

  //ES6 Destructuring:
  const { location, startDate, endDate, noOfGuests } = router.query;

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  // const range = `${formattedStartDate} - ${formattedEndDate}`;
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  let { page = 1 } = router.query;
  page = Number(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);
  console.log("pathname" + router.pathname);
  return (
    <div>
      {/* <Search placeholder={`${location} | ${range} | ${noOfGuests} Guests`} /> */}
      <Header />
      <Search />
      {/* <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            +100 Stays -{range}- for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {" "}
            Stays in {location}
          </h1>

          <div className="flex hidden lg:inline-flex mb-6 space-x-3 text-gray-400 whitespace-nowrap">
            <p className="button">cancellation Flexibility</p>
            <p className="button">Types of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds </p>
            <p className="button">More filters </p>
          </div> */}
      {/* <div className="flex flex-col">
            {rooms ? (
              rooms.map((room) => <Listing key={room._id} room={room} />)
            ) : (
              <p>No rooms were found!</p>
            )} */}
      {/* {rooms ? (
              rooms.map((room) =>
                room.address.includes(location) ? (
                  <Listing key={room._id} room={room} />
                ) : (
                  <h3>No Rooms Were found with this address!</h3>
                )
              )
            ) : (
              <h3>No Rooms Were found!</h3>
            )} */}
      {/* </div>
        </section> */}

      <section className="hidden xl:inline-flex xl:min-w-[600px]">
        {/* <Map searchResult={searchResult} /> */}
      </section>
      {/* </main> */}
    </div>
  );
}

export default searchPage;

export async function getServerSideProps() {
  const searchResult = await fetch("http://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
