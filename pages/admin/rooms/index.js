import React from "react";
import { getSession } from "next-auth/react";

import AllRooms from "../../../components/admin/AllRooms";
import Header from "../../../components/Header";

const AllRoomsPage = () => {
  return (
    <>
      <body className="bg-white">
        <Header />
        <AllRooms />
      </body>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session || session.user.role !== "Admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default AllRoomsPage;
