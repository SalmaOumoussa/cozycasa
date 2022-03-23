import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import LCard from "../components/LargeCard";
import Footer from "../components/Footer";
import Listing from "../components/Listing";
import { useRouter } from "next/router";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../redux/actions/roomActions";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";

export default function Home(/*{ exploreData, cardData }*/) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);
  // console.log(rooms);

  let { page = 1 } = router.query;
  page = Number(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, []);

  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`;
  };

  return (
    <>
      <div className="">
        <Head>
          <title>Cozy Casa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div> */}
          </section>
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
          <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="container">
              <div class="flex flex-wrap -mx-4">
                {rooms && rooms.length === 0 ? (
                  <p>No rooms were found!</p>
                ) : (
                  rooms.map((room) => <Listing key={room._id} room={room} />)
                )}
              </div>
            </div>
          </section>
          {/*))} */}
          <LCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Some Description"
            buttonText="Get Inspired"
          />
          {resPerPage < roomsCount && (
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
        </main>

        <Footer />
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
      await store.dispatch(getRooms(req, query.page, query.location));
    }
);
