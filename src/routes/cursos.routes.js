    import { Router } from "express";
    import{
        getCursos,
        getCursosById ,
        createCursos,
        updateCursos,
        deleteCursos,
    } from "../controllers/cursos.controller.js";

    const cursosRoutes = Router();

    cursosRoutes.get("/", getCursos);

    cursosRoutes.get("/:id", getCursosById );

    cursosRoutes.post("/",createCursos);

    cursosRoutes.put("/:id", updateCursos);

    cursosRoutes.delete("/:id", deleteCursos);

    export default cursosRoutes;