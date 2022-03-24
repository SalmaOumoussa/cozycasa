import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { updateProfile } from "../../../controllers/authControllers";
import { isAuthenticated } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticated).put(updateProfile);

export default handler;
