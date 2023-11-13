import { Router } from "express";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res) => {
    return res.status(200).send(
        {message :"get all students!"});
});

studentsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        {message :`get student with id ${id}!`});
});

studentsRoutes.post("/", (req, res) => {
    const {name, email, age} = req.body;
  
    if(!name || !email || !age){
        return res.status(400).send(
            {message :"missing required informations!"});
    }

    return res.status(200).send(
        {message :`create student with name ${name}, email ${email} and age ${age}!`});
});

studentsRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;
  
    if(!name || !email || !age){
        return res.status(400).send(
            {message :"missing required informations!"});
    }

    return res.status(200).send(
        {message :`update student with id ${id} with name ${name}, email ${email} and age ${age}!`});
}
);

studentsRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        {message :`delete student with id ${id}!`});
}
);
export default studentsRoutes;

