module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/tasks") {
    req.body.userId = 1;
    req.body.status = "OPEN";
  }
  next();
};
