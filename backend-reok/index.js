const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const app = express();

app.use(express.json())
app.use(cors())

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      "https://manufacturing-company-reok.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "authentication-manufacturing-company-reok-fatnag",
  issuer: "https://manufacturing-company-reok.us.auth0.com/",
  algorithms: ["RS256"],
});

app.use(jwtCheck);

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

//ruta base de la API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})

//importamos todas las rutas que definimos en ./routes/index.js
const routes = require('./src/routes/index');

/*Ruta peticiones API con /productos */
app.use('/productos', routes.productsRouter);
app.use('/usuarios', routes.usersRouter);
app.use('/sales', routes.salesRouter);