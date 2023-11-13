export class StudentList {
    constructor() {
        this.students = [];
    }
    //adicionar
    addStudent(student) {
        this.students.push(student);
    }
    //pegar pelo id
    getStudent(id) {
        return this.students.find((student) => student.id == id);
    }
    //pegar todos
    getAllStudents() {
        return this.students;
    }
    //atualizar
    updateStudent(id, name, email, age) {
        this.students = this.students.map((student) => {
            if (student.id === id) {
                student.name = name;
                student.email = email;
                student.age = age;
            }
            return student;
        });
        return this.getStudent(id);
    }
    
    //remover
    removeStudent(id) {
        this.students = this.students.
            filter((student) => student.id !== id);
    }



}