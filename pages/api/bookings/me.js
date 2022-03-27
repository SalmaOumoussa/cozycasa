import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { myBookings } from "../../../controllers/bookingControllers";

import { isAuthenticated } from "../../../middlewares/auth";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticated).get(myBookings);

export default handler;
