import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";

import { allAdminRooms } from "../../../../controllers/roomControllers";

import onError from "../../../../middlewares/errors";
import { isAuthenticated, authorizeRoles } from "../../../../middlewares/auth";

const handler = nc({ onError });

dbConnect();
handler.use(isAuthenticated, authorizeRoles("Admin")).get(allAdminRooms);

export default handler;
