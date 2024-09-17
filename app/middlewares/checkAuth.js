const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Invalid auth header" });
  }

  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT);
  console.log(decoded);

  if (!decoded) {
    res.status(400).json({ message: "Invalid token" });
  }
  req.auth = decoded.email;
  next();
};

module.exports = checkAuth;
