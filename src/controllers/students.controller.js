import { Student } from "../models/students/Student.js";
import { StudentList } from "../models/students/StudentsList.js";

const list = new StudentList();

export const getStudents = (req, res) => {
    const students = list.getAllStudents();
    if (students.length) {
        return res.status(200).send(students);
    }
    return res.status(200).send({ message: "no students found!👩‍🎓" });

};

export const getStudentsById = (req, res) => {
    const { id } = req.params;

    const student = list.getStudent(id);
    if (!student) {
        return res.status(404).send({ message: `student ${id} not found!` })
    }

    return res.status(200).send(student);
};

export const createStudents = (req, res) => {
    const { name, email, age } = req.body;


    if (!name || !email || !age) {
        return res.status(404).send(
            { message: "parametros invalidos!" });
    }

    const student = new Student(name, email, age);
    list.addStudent(student);

    return res.status(201).send(
        { message: `student ${name} created!`, student });
}

export const updateStudents = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).send(
            { message: "missing required informations!" });
    }
    const student = list.getStudent(id);

    if (!student) {
        return res.status(404).send(
            { message: `student ${id} not found!` });
    }
    const updatedStudent = list.updateStudent(id, name, email, age);
    return res.status(200).send(
        { message: `student ${id} updated!`, student: updatedStudent });
}

export const deleteStudents = (req, res) => {
    const { id } = req.params;

    const student = list.getStudent(id);
    if (!student) {
        return res.status(404).send(
            { message: `student ${id} not found!` });
    }
    list.removeStudent(id);

    return res.status(200).send(
        { message: `delete student with id ${id}!`, student });
}

