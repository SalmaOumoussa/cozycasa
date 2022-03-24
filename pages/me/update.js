import React from "react";
import { getSession } from "next-auth/react";
import Profile from "../../components/user/Profile";
import Header from "../../components/Header";

const UpdateProfilePage = () => {
  return (
    <>
      <Header />
      <Profile />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanant: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default UpdateProfilePage;
