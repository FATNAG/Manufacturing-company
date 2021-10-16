const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');

const { usersController } = require('../controllers');


router.get('/:id', usersController.getUser);

router.get('/', usersController.getUsers);

//Rutas usuarios
//Crear un usuario
router.post('/',
    body('nombre', 'El nombre es requerido').exists(),    
    body('apellido', 'El apellido es requerido').exists(),
    body('email', 'El email es requerido').exists(),
    body('telefono', 'El numero telefonico es requerido y debe ser numerico').exists().isNumeric(),
    body('autorizar', 'La autorizacion es requerida(true/false)').isBoolean().exists(),
    body('rol', 'Debe seleccionar un rol, es requerida').exists()
    , usersController.createUser);

//Actualizar un usuario               
router.put('/:id',
    body('nombre', 'El nombre es requerido').exists(),    
    body('apellido', 'El apellido es requerido').exists(),
    body('email', 'El email es requerido').exists(),
    body('telefono', 'El numero telefonico es requerido y debe ser numerico').exists().isNumeric(),
    body('autorizar', 'La autorizacion es requerida(true/false)').isBoolean().exists(),
    body('rol', 'Debe seleccionar un rol, es requerida').exists()
    , usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;