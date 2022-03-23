import nc from "next-connect";
import dbConnect from "../../config/dbConnect";
import { currentUserProfile } from "../../controllers/authControllers";
import { isAuthenticated } from "../../middlewares/auth";
import onError from "../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticated).get(currentUserProfile);

export default handler;
