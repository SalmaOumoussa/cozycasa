import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import AsyncCatchErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";

// get all Rooms => /api/rooms
const allRooms = AsyncCatchErrors(async (req, res) => {
  const resPerPage = 4;

  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// create new Room => /api/rooms
const newRoom = AsyncCatchErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// get Room details => /api/rooms/:id
const getSingleRoom = AsyncCatchErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

// Update Room details => /api/rooms/:id

const updateRoom = AsyncCatchErrors(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this", 404));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    room,
  });
});

// Delete Room details => /api/rooms/:id

const deleteRoom = AsyncCatchErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  await room.remove();
  res.status(200).json({
    success: true,
    message: "Room removed successfully",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
