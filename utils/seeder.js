const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms.json");

mongoose.connect("mongodb://127.0.0.1:27017/bookit", {});

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("Rooms are inserted");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

seedRooms();
