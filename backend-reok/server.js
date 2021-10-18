import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import { conectDB } from "./db/db.js";
import salesRoutes from "./views/sales/routes.js";

dotenv.config({ path: "./.env" });

const app = Express();

app.use(Cors());
app.use(Express.json());
app.use(salesRoutes);

const main = () => {
  return app.listen(process.env.PORT, () => {
    console.log("Listen port", process.env.PORT);
  });
};

conectDB(main);
