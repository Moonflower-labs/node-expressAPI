const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.get("/", registerController.handleNewUserForm);
router.post("/", registerController.handleNewUser);

module.exports = router;
