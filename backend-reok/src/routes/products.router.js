const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');

const { productsController } = require('../controllers');

router.get('/:id', productsController.getProduct);

router.get('/', productsController.getProducts);

router.post('/', productsController.createProduct);
              
router.put('/:id', productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;