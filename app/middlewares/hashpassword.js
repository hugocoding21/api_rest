const bcrypt = require("bcrypt");

const hashPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Le mot de passe est requis" });
  }

  req.body.password = bcrypt.hashSync(password, 10);

  next();
};

module.exports = hashPassword;
