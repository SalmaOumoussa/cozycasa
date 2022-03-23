import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import RoomDetails from "../../components/room/RoomDetails";

export default function RoomDetailsPage() {
  const { rooms } = useSelector((state) => state.allRooms);
  // console.log(rooms);
  return (
    <div className="">
      <Head>
        <title>Cozy Casa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RoomDetails title="Room Details" />
      <Footer />
    </div>
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
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
