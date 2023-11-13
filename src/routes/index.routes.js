import { Router } from "express";
import studentsRoutes from "./students.routes.js";
import cursosRoutes from "./cursos.routes.js";

const rotas = Router();

rotas.use("/students", studentsRoutes);
rotas.use("/cursos", cursosRoutes);

rotas.get("/", (req, res) => {
   return res.status(200).send(
    {message :"Servidor ok!"});
    });

export default rotas;