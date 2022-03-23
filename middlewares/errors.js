import ErrorHandler from "../utils/errorHandler";

export default (err, req, res, next) => {
  err.status = err.status || 500;
  let error = { ...err };
  error.message = err.message;

  // Handling mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  // wrong Mogoose Object ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ID: ${req.query.id}`;
    error = new ErrorHandler(message, 400);
  }

  res.status(err.status).json({
    success: false,
    error,
    message: error.message,
    stack: error.satck,
  });
};
