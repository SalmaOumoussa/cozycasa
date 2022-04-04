import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRoom } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/errors";
import { isAuthenticated, authorizeRoles } from "../../../middlewares/auth";

const handler = nc({ onError });
dbConnect();

handler.get(allRooms);
handler.use(isAuthenticated, authorizeRoles("Admin")).post(newRoom);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

export default handler;
