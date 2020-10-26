module.exports = (req, res, next) => {
  res.header("Content-Range", "tasks 0-10/10");
  next();
};
