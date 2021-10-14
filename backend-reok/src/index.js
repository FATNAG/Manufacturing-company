//importar librerias

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');   

// crear servidor
const app = express();
const port =process.env.PORT || 3000                 //definir puerto
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.edu3m.mongodb.net/reok?retryWrites=true&w=majority'

const UserCtrl =require('./controllers/user.controller')    //creo UserCtrl e importo las funciiones
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())                           //agrego el middleware

app.get('/', function (req, res) { 
    res.send('Hello World!');
 }); 

//ruta leer todos
app.get('/api/user', UserCtrl.getUsers)       //llamo la funcion getUsers
 
 //ruta Leer por ID
 app.get('/api/user/:userId', UserCtrl.getUser)
 
 //ruta tipo Post, enviar datos -almacenar
 app.post('/api/user/',UserCtrl.saveUser)
   
     /* console.log(req.body)                                //para probarla se accede al body (parser)
     //res.send(200,{message:'El usuario se ha recibido'}) // respuesta, envia el status 
     res.status(200).send({message:'El usuario se ha recibido'})  //respuesta, incluye el .status */
  
 //ruta de actualizaciones por ID
 app.put('/api/user/:userId',UserCtrl.updateUser)
 
 //ruta borrar por ID
 app.delete('/api/user/:userId',UserCtrl.deleteUser)
 
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

module.exports=app