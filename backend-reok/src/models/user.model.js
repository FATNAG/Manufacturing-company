const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=Schema({
    usuarioID:String,
    nombre:String,
    apellido:String,
    email:String,
    telefono:Number,
    rol:{type:String,enum:['administrador','usuario','vendedor']}
    
})

module.exports=mongoose.model('User',UserSchema)      //se genera el modelo y se exporta a la API