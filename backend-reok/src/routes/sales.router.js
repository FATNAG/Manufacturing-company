const { Router } = require("express");
const router = Router();
const { body } = require("express-validator");

const { salesController } = require("../controllers");

router.get("/:id", salesController.getSale);

router.get("/", salesController.getSales);

//Rutas productos
//Crear un producto
router.post(
  "/",
  body("name", "The name of the sale is required").exists().isNumeric(),
  body(
    "description",
    "The description is required and you have to detail the sale"
  ).exists(),
  body("value", "The value is required and need to be a number")
    .exists()
    .isNumeric(),
  body("amount", "The amount is required and need to be a number")
    .exists()
    .isNumeric(),
  body("total", "The total is required and need to be a number")
    .exists()
    .isNumeric(),
  salesController.createSale
);

//Actualizar un producto
router.put(
  "/:id",
  body(
    "name",
    "El valor del producto es requerido y debe ser numerico"
  ).exists(),
  body("description", "La descripción del producto es requerida").exists(),
  body("value", "El estado del producto es requerido(true/false)")
    .isNumeric()
    .exists(),
  body("amount", "El valor del producto es requerido y debe ser numerico")
    .exists()
    .isNumeric(),
  body("total", "El valor del producto es requerido y debe ser numerico")
    .exists()
    .isNumeric(),
  salesController.editSale
);

router.delete("/:id", salesController.deleteSale);

module.exports = router;
