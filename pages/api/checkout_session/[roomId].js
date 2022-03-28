import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { stripCheckoutSession } from "../../../controllers/paymentControllers";
import { isAuthenticated } from "../../../middlewares/auth";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticated).get(stripCheckoutSession);

export default handler;
