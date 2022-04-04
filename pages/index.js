import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import InfoCard from "../components/InfoCard";
import LCard from "../components/LargeCard";
import Footer from "../components/Footer";
import SmallCard from "../components/SmallCard";
import Link from "next/link";

import Listing from "../components/Listing";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
// import Pagination from "rc-pagination";
export default function Home(/*{ exploreData, cardData }*/) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { location, startDate, endDate, guestCapacity } = router.query;
  const { rooms, error } = useSelector((state) => state.allRooms);
  console.log(rooms);
  // let { page = 1 } = router.query;
  // page = Number(page);
  // let count = roomsCount;
  // if (location) {
  //   count = filteredRoomsCount;
  // }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`;
  };
  if (location) {
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `from ${formattedStartDate} to ${formattedEndDate}`;
  }

  return (
    <>
      <div className="">
        <Head>
          <title>Cozy Casa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {location ? (
          <>
            <Header />
            <section className="flex-grow pt-14 px-6">
              <h2 className="text-l font-semibold p-1">
                Stays in{" "}
                <span className="text-purple-900 text-l">
                  {location} - {range} - for {guestCapacity} Guests
                </span>{" "}
              </h2>
              <div className="flex hidden lg:inline-flex mb-6 space-x-3 text-gray-400 whitespace-nowrap">
                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;">
                  cancellation Flexibility
                </p>
                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;">
                  Types of places
                </p>
                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;">
                  Price
                </p>
                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;">
                  Rooms and beds{" "}
                </p>
                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;">
                  More filters{" "}
                </p>
              </div>
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  {rooms && rooms.length === 0 ? (
                    <p className="font-bold m-10 p-2 text-black border-4 border-black bg-purple-300">
                      No rooms were found !
                    </p>
                  ) : (
                    rooms.map((room) => <InfoCard key={room._id} room={room} />)
                  )}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="bg-white">
            <Header />
            <Banner />
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
              <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5">
                  What our clients loves{" "}
                </h2>
                <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {rooms.map(
                    (room) =>
                      room.ratings >= 0 && (
                        <Link href={`/rooms/${room._id}`}>
                          <div>
                            <SmallCard
                              key={room._id}
                              img={room.Images[0].url}
                              location={room.address}
                              title={room.name}
                              ratings={room.ratings}
                            />
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </section>
<<<<<<< HEAD
              <h2 className="mb-8 text-4xl font-semibold pb-5">
                Live Anywhere
              </h2>
              <Section />
=======
              <section>
                <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
                <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                  {/* {cardData.map(({ img, title }) => ( */}
                  {rooms && rooms.length === 0 ? (
                    <p>No rooms were found!</p>
                  ) : (
                    rooms.map((room) => <Cards key={room._id} room={room} />)
                  )}
                  {/*))} */}
                </div>
              </section>

              {/*))} */}
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
                    itemclassName="page-item"
                    linkclassName="page-link"
                  />
                </div>
              )}
>>>>>>> 38e12906cc2ae948b254bc0ee3a825aad8bc990a
              <LCard
                img="https://res.cloudinary.com/drckds98u/image/upload/v1648631820/cc/lcards_pzm6am.jpg"
                title="  Be A Part of Our Community, Get Notified by our Offers !"
                description="Best Weekly offers Reminder just for YOU"
                buttonText="Get Inspired"
              />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
//     res.json()
//   );

//   return {
//     props: {
//       exploreData,
//       cardData,
//     },
//   };
// }

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
