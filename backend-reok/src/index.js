'use strict'
//importar librerias
const mongoose=require('mongoose');   
const app=require('./app')
// crear servidor

const port =process.env.PORT || 3000                 //definir puerto
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.edu3m.mongodb.net/reok?retryWrites=true&w=majority'


 
// Conexion a mongo atlas  
mongoose.connect(MONGODB_URI ||'mongodb://localhost:27017/reok', (err,res) =>{      //conectar a DB

    if (err) {
     return console.log(`Error al conectar a la DB: ${err}`)   
    }

    console.log('conexion con db establecida')

    app.listen(port, ()=> {                            
         console.log(`API listening on port:${port}`);  //abro puerto de escucha, imprime cuando lo abre
    });

});

