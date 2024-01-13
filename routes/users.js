const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const usersController = require("../controllers/users_controller");

router.get("/profile", usersController.profile);
router.get("/post", usersController.post);
router.post("/create", usersController.createUser);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

module.exports = router;
