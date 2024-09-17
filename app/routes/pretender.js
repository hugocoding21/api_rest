const express = require("express");
const PretenderController = require("../controllers/pretender");
const checkEmailAndPassword = require("../middlewares/checkEmailAndPassword");
const checkValidationResult = require("../middlewares/checkValidationResult");
const hashPassword = require("../middlewares/hashpassword");
const checkAuth = require("../middlewares/checkAuth");
const { param } = require("express-validator");

const router = express.Router();

router.post("/", checkEmailAndPassword, hashPassword, checkValidationResult, PretenderController.createOne);
router.get("/login", checkEmailAndPassword, checkValidationResult, PretenderController.login);
router.get("/", PretenderController.getAll);
router.get("/:id", param("id"), checkAuth, PretenderController.getOneById);
router.post("/:id", PretenderController.updateOneById);

module.exports = router;
