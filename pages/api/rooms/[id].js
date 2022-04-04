import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticated, authorizeRoles } from "../../../middlewares/auth";

const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom);
handler.use(isAuthenticated, authorizeRoles("Admin")).put(updateRoom);
handler.use(isAuthenticated, authorizeRoles("Admin")).delete(deleteRoom);

export default handler;
