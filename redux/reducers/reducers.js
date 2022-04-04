import { combineReducers } from "redux";
import {
  allRoomsReducer,
  RoomDetailsReducer,
  newReviewReducer,
  checkReviewReducer,
  roomReviewsReducer,
  reviewReducer,
  roomReducer,
  newRoomReducer,
} from "./roomReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadedUserReducer,
} from "./userReducers";
import {
  checkBookingReducer,
  bookedDatesReducer,
  bookingsReducer,
  bookingDetailsReducer,
} from "./bookingReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  RoomDetails: RoomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  loadedUser: loadedUserReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
  roomReviews: roomReviewsReducer,
  review: reviewReducer,
  room: roomReducer,
  newRoom: newRoomReducer,
});

export default reducer;
