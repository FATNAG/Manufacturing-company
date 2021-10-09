const {Router} =require('express');   //traigo libreria router
const userCtrl = require('../controllers/user.controller');
const router=Router();

//create
router.post('/',userCtrl.createOne)
//read
router.get('/', userCtrl.getAll)    //llamo la funcion de userCtrl
//update
router.put('/', userCtrl.editOne)
//delete
router.delete('/',userCtrl.deleteOne)
 
module.exports=router; 