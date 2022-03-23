const mongoose = require("mongoose");

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.DB_LOCAL_URI, {})
    .then((con) => console.log("Connected to local database"))
    .catch((err) => console.log("DB Connection error => ", err));
};

export default dbConnect;
