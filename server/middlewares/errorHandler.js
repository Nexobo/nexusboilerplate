exports.errorHandler = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;
  if (err.statusCode === 500) console.error(err.message, err.stack);
  res.status(err.statusCode).json({ message: err.message });
};
