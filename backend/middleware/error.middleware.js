export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid resource ID",
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: Object.values(err.errors).map((error) => ({
        field: error.path,
        message: error.message,
      })),
    });
  }

  // Duplicate MongoDB unique field
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A record with this value already exists",
    });
  }

  // Default server error
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};