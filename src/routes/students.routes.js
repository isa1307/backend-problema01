import { Router } from "express";
import{
    getStudents,
    getStudentsById,
    createStudents,
    updateStudents,
    deleteStudents,
} from "../controllers/students.controller.js";

const studentsRoutes = Router();

studentsRoutes.get("/", getStudents);

studentsRoutes.get("/:id", getStudentsById);

studentsRoutes.post("/",createStudents);

studentsRoutes.put("/:id", updateStudents);

studentsRoutes.delete("/:id", deleteStudents);

export default studentsRoutes;