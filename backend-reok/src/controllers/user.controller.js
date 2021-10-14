'use strict'   //modo de ejecutar el codigo
const User=require('./models/user.model')      //importamos el modelo


function getUser (req,res) {
    let userId=req.params.userId

    User.findById(userId,(err,user) =>{
    //retun sale de la funcion si hay error    
    if (err) return res.status(500).send({message:`Error al realizar consulta:${err}`})
    if(!user) return res.status(484).send({message:`El usuario no existe`})

    res.status(200).send({user:user})
   })
}

function getUsers (req,res) {
    User.find({}, (err,users)=>{
        if (err) return res.status(500).send({message:`Error al realizar consulta:${err}`})
        if(!users) return res.status(484).send({message:`No existen usuarios`})
       
        res.send(200,{users:users})       //para probarla, con array [] 
        
        })
}

function saveUser(req,res) {
    console.log('POST /api/user')
    console.log(req.body)
    //almacenar en DB
    let user=new User()
    user.usuarioID=req.body.usuarioID
    user.nombre=req.body.nombre
    user.apellido=req.body.apellido
    user.email=req.body.email
    user.telefono=req.body.telefono
    user.rol=req.body.rol

    user.save((err,userStored) =>{
      if(err) res.status (500).send({message:`Error al guardar en DB:${err}`})  

      res.status(200).send({user:userStored})
    })   //guardar producto y funcion callback
}

function updateUser (req,res) {
    let userId=req.params.userId
    let update=req.body
    User.findByIdAndUpdate(userId,update,(err, userUpdated) => { //le paso objeto con los campos a actualizar
    if (err)res.status(500).send({message:`Error al actualizar usuario:${err}`})
    res.status(200).send({user:userUpdated})
    })
}
function deleteUser (req,res) {
    let userId=req.params.userId
    User.findById(userId,(err,user) =>{
        //retun sale de la funcion si hay error    
        if (err)res.status(500).send({message:`Error al borar usuario:${err}`})
        user.remove(err => {  
            if (err)res.status(500).send({message:`Error al borar usuario:${err}`})
            res.status(200).send({message:`El usuario se ha borrado`})
        })
    }) 
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}