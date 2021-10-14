'use strict'

const express =require('express');  
const router = express.Router();  //traigo libreria router
const UserCtrl = require('../controllers/user.controller'); //creo UserCtrl e importo las funciiones


// rutas de usuarios
//ruta leer todos
router.get('/user', UserCtrl.getUsers)       //llamo la funcion getUsers
 
 //ruta Leer por ID
router.get('/user/:userId', UserCtrl.getUser)
 
 //ruta tipo Post, enviar datos -almacenar
router.post('/user/',UserCtrl.saveUser)
   
     /* console.log(req.body)                                //para probarla se accede al body (parser)
     //res.send(200,{message:'El usuario se ha recibido'}) // respuesta, envia el status 
     res.status(200).send({message:'El usuario se ha recibido'})  //respuesta, incluye el .status */
  
 //ruta de actualizaciones por ID
router.put('/user/:userId',UserCtrl.updateUser)
 
 //ruta borrar por ID
router.delete('/user/:userId',UserCtrl.deleteUser)


module.exports=router; 