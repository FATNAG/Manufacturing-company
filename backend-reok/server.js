import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import { conectDB } from "./db/db.js";
import salesRoutes from "./views/sales/routes.js";
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

dotenv.config({ path: "./.env" });

const app = Express();

app.use(Cors());
app.use(Express.json());

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
app.use(salesRoutes);

const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log("Listen port", process.env.PORT);
  });
};

conectDB(main);
