//importar librerias

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');   

// crear servidor
const app = express();
const port =process.env.PORT || 3000                 //definir puerto
const MONGODB_URI='mongodb+srv://admin:1234@cluster0.edu3m.mongodb.net/reok?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())                           //agrego el middleware

app.get('/', function (req, res) { 
    res.send('Hello World!');
 }); 

//ruta leer todos
app.get('/api/user',(req,res)=>{
     res.send(200,{users:[]})       //para probarla
 })
 
 //ruta Leer por ID
 app.get('/api/user/:userId',(req,res)=>{
     
 })
 
 //ruta tipo Post, enviar datos
 app.post('/api/user/',(req,res)=>{
     console.log(req.body)                                //para probarla se accede al body (parser)
     //res.send(200,{message:'El usuario se ha recibido'}) // respuesta, envia el status 
     res.status(200).send({message:'El usuario se ha recibido'})  //respuesta, incluye el .status
 })
 
 //ruta de actualizaciones por ID
 app.put('/api/user/:userId',(req,res)=>{
     
 })
 
 //ruta borrar por ID
 app.delete('/api/user/:userId',(req,res)=>{
     
 })
 
// Conexion a mongo atlas  
mongoose.connect(MONGODB_URI ||'mongodb://localhost:27017/reok', (err,res) =>{      //conectar a DB

if (err) {
 return console.log(`Error al conectar a la DB: ${err}`)   
}

console.log('conexion con db establecida')

app.listen(port, ()=> {                            
     console.log(`Example app listening on port:${port}`);  //abro puerto de escucha, imprime cuando lo abre
});

});

module.exports=app