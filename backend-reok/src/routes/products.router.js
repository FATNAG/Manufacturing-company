const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');

const { productsController } = require('../controllers');


router.get('/:id', productsController.getProduct);

router.get('/', productsController.getProducts);

//Rutas productos
//Crear un producto
router.post('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productsController.createProduct);

//Actualizar un producto               
router.put('/:id',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;