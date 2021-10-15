'use strict'
const { request, response } = require("express");
const{dbConnection} = require(".")
const express = require("express");

const app = express();

dbConnection();

app.use(express.json());

app.get("/", (request, response)=>{
    response.json({
        "mensaje": "appCargo"
    })
})


app.use("/api/sale", require("./routes/sale"));

app.listen(3000, ()=>{
    console.log('servidor arriba y esta escuchando por el puerto 3000');

});


 
