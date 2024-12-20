const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    success: false,
    message: err.message || "An unexpected error occurred",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// exports.errorHandler = errorHandler;
module.exports = { errorHandler };
