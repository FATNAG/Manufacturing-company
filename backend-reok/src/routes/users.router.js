const { Router } = require("express");
const router = Router();
const { body } = require("express-validator");

const { usersController } = require("../controllers");

router.get("/:id", usersController.getUser);

router.get("/", usersController.getUsers);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;
