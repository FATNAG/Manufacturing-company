const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const dbConfig = require('./config/dbConfig');
//Conexion con la base de datos mongoDB
mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))


//Middleware para las solicitudes HTTP  
app.use(morgan("combined"));


require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`)
})

//ruta base de nuestra API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})

//importamos todas las rutas que definimos en ./routes/index.js
const routes = require('./src/routes/index');

/*usando las rutas de productos para toda las peticiones
 que llegen a nuestra API con /productos */
app.use('/productos', routes.productsRouter);