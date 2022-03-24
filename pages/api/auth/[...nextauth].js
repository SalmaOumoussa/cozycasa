import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();
        const { email, password } = credentials;
        // Check if email and pwd is entered
        if (!email || !password) {
          throw new Error("Please enter both email and password");
        }

        // Find User in db
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error("Invalid Email or Password");
        }
        // Check if password is correct
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
