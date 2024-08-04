
const Func = require("../models/funcModel");

exports.CreateTask = async (req, res) => {

    const {titulo, descricao, prazo} = req.body;

    if(!titulo || titulo.length < 4) {
        return res.status(500).json({"error": "Titulo não foi informado corretamente"});
    }
    if(!descricao || descricao.length < 5) {
        return res.status(500).json({"error": "descrição não foi informada corretamente"});
    }
    if(!prazo) {
        return res.status(500).json({"error": "prazo não foi informado corretamente"});
    }


    try {
        const funcoes = new Func({titulo, descricao, prazo});
        await funcoes.save();

        return  res.status(200).json({ message: "Tarefa criada com sucesso" });
    } catch (error) {
        return res.status(500).json({"error": error})
    }
   
};

