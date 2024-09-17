const { body, validationResult } = require("express-validator");

const checkEmailAndPassword = [
  body("email").isEmail().withMessage("L'email est invalid"),
  body("password").notEmpty().withMessage("Le mot de passe n'est pas complété"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  },
];

module.exports = checkEmailAndPassword;
