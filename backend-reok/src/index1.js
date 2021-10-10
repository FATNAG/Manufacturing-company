const app=require('./index')

/*  
app.listen(app.get('PORT'), () => {
    console.log('Server on port: ',app.get('PORT'))
}) */ 

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
    res.send(200,{message:'El usuario se ha recibido'})  //respuesta
})

//ruta de actualizaciones por ID
app.put('/api/user/:userId',(req,res)=>{
    
})

//ruta borrar por ID
app.delete('/api/user/:userId',(req,res)=>{
    
})



