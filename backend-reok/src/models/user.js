const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre:String,
    apellido:String,
    email:String,
    telefono:Number,
    autorizar:Boolean,
    rol:String
    //rol:{type:String,enum:['administrador','usuario','vendedor']}
})

module.exports = mongoose.model('users', UserSchema);