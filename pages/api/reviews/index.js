import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  createRoomReview,
  getRoomReviews,
  deleteReview,
} from "../../../controllers/roomControllers";

import onError from "../../../middlewares/errors";
import { isAuthenticated } from "../../../middlewares/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticated).put(createRoomReview);

handler.use(isAuthenticated).get(getRoomReviews);

handler.use(isAuthenticated).delete(deleteReview);

export default handler;
