const express = require("express");
const PretenderController = require("../controllers/pretender");
const checkEmail = require("../middlewares/checkEmail");
const checkValidationResult = require("../middlewares/checkValidationResult");
const hashPassword = require("../middlewares/hashpassword");

const router = express.Router();

router.post("/", checkEmail, checkValidationResult, hashPassword, checkValidationResult, PretenderController.createOne);
router.get("/", PretenderController.getAll);
router.get("/:id", PretenderController.getOneById);
router.post("/:id", PretenderController.updateOneById);

module.exports = router;
