import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import RoomDetails from "../../components/room/RoomDetails";

export default function RoomDetailsPage() {
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
