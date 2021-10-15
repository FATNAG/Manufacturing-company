const mongoose = require("mongoose");

const dbConnection = async()=>{
    try{
    await mongoose.connect('mongodb+srv://admin:1234@cluster0.edu3m.mongodb.net/reok?retryWrites=true&w=majority')
    console.log("conectado a la base de datos");
    }catch (error){
        console.log("Fallo la conexion a la base de datos", error);
    }
};

module.exports = {dbConnection};