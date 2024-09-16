const express = require("express");
const PretenderController = require("../controllers/pretender");

const router = express.Router();

router.post("/", PretenderController.createOne);
router.get("/", PretenderController.getAll);
router.get("/:id", PretenderController.getOneById);
router.post("/:id", PretenderController.updateOneById);

module.exports = router;
