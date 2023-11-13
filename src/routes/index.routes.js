import { Router } from "express";
import studentsRoutes from "./students.routes.js";

const rotas = Router();

rotas.use("/students", studentsRoutes);

rotas.get("/", (req, res) => {
   return res.status(200).send(
    {message :"Servidor ok!"});
    });

export default rotas;