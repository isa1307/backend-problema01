export const getCursos = (req, res) => {
    return res.status(200).send({ message: "get all cursos controller" })
};

export const getCursosById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `get cursos by id ${id} controller` })
};

export const createCursos = (req, res) => {
    const { name, descricao, quantidade } = req.body;

    
    quantidade >= 100 ? res.status(201).send({
        message: `create curso with name ${name}, ${descricao} and ${quantidade} alunos! curso com mais de 100 alunos`
    })
        : res.status(201).send({
            message: `create curso with name ${name}, ${descricao} and ${quantidade} alunos! curso com menos de 100 alunos`
        });

    if (!name || !descricao || !quantidade) {
        return res.status(400).send(
            { message: "missing required informations!" });
    }
}
export const updateCursos = (req, res) => {
    const { id } = req.params;
    const { name, descricao, quantidade } = req.body;

    if (!name || !descricao || !quantidade) {
        return res.status(400).send(
            { message: "missing required informations!" });
    }

    return res.status(200).send(
        { message: `update curso with id ${id} with name ${name}, ${descricao} and ${quantidade} alunos!` });
}

export const deleteCursos = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        { message: `delete cursos with id ${id}!` });
}
