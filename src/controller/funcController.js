
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

exports.DeleteTask = async  (req, res) => {
    const {taskId} = req.body;
    if(!taskId) {
        return res.status(500).json({"error": "Id não informado corretamente"});  
    }
    try {
        const list = await Func.deleteOne({_id: taskId});

        return  res.status(200).json({ message: "Tarefa apagada com sucesso com sucesso!!!" });
    } catch (error) {
        return res.status(500).json({"error": error.message});  
    }

    
}

exports.ListTask = async  (req, res) => {

    try {
        const lists = await Func.find()

        console.log(lists)
        return res.status(200).json({lists});    
    } catch (error) {
        return res.status(500).json({"error": error.message});  
    }
    
}


exports.atualizarTask = async  (req, res) => {
    const {taskId, prazo, titulo, desc} = req.body;

    if(!taskId) {
        return res.status(500).json({"error": "Id não informado corretamente"});  
    }
    try {
        const list = await Func.findOne({_id: taskId});

        const att = Func.findByIdAndUpdate()

        return  res.status(200).json({ message: "Tarefa apagada com sucesso com sucesso!!!" });
    } catch (error) {
        return res.status(500).json({"error": error.message});  
    }
}
