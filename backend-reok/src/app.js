'use strict'
const express=require('express');
const bodyParser=require('body-parser');
const app = express();
const router=require ('./routes/routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())                           //agrego el middleware
app.use('/api',router)

app.get('/', function (req, res) { 
    res.send('Servidor OK');
 }); 


 module.exports=app