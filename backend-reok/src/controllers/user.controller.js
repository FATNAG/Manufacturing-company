const userCtrl={}             //creo funcion que obtenga todos los usuarios

//crear
userCtrl.createOne=async(req,res)=>{
    
    var user=req.body                //carga en variable el archivo
    // database.save(user)        // almacenar en DB
    res.json({msg:'Data received'}) 
}

//read
userCtrl.getAll= async(req,res)=>{
    res.json({msg:'Funciona'})
}

//update
userCtrl.editOne= async(req,res)=>{
    res.json({msg:'Funciona'})

//delete
userCtrl.deleteOne= async(req,res)=>{
    res.json({msg:'Funciona'})

module.exports=userCtrl