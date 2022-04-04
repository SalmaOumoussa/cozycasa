import React from "react";
import { getSession } from "next-auth/react";

import NewRoom from "../../../components/admin/NewRoom";
import Header from "../../../components/Header";

const NewRoomPage = () => {
  return (
    <>
      <Header />
      <NewRoom />
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

export default NewRoomPage;
