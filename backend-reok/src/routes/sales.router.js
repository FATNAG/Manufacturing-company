const { Router } = require("express");
const router = Router();
const { body } = require("express-validator");

const { salesController } = require("../controllers");

router.get("/:id", salesController.getSale);

router.get("/", salesController.getSales);

router.post("/", salesController.createSale);

router.put("/:id", salesController.editSale);

router.delete("/:id", salesController.deleteSale);

module.exports = router;
