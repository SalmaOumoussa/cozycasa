import Register from "../components/auth/Register";
import Header from "../components/Header";
import { getSession } from "next-auth/react";

export default function registerPage() {
  return (
    <>
      <Header />
      <Register />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanant: false,
      },
    };
  }
  return {
    props: {},
  };
}
