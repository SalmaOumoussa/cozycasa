import React from "react";
import { getSession } from "next-auth/react";

import UpdateRoom from "../../../components/admin/UpdateRoom";
import Header from "../../../components/Header";

const UpdateRoomPage = () => {
  return (
    <>
      <Header />
      <UpdateRoom />
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

export default UpdateRoomPage;
