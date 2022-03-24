import { combineReducers } from "redux";
import { allRoomsReducer, RoomDetailsReducer } from "./roomReducers";
import { authReducer, userReducer } from "./userReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  RoomDetails: RoomDetailsReducer,
  auth: authReducer,
  user: userReducer,
});

export default reducer;
