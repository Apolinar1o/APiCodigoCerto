const User = require("../models/userModel")
exports.register = async (req, res) => {
    try {
        const {senha, email, nome} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            res.status(400).json({ message: "Email não informado corretamente" });
        } 
        if (!senha || senha.length < 4) {
            res.status(400).json({ message: "Senha não informado corretamente" });
        } 
        if (!nome || nome.length < 4) {
            res.status(400).json({ message: "Nome não informado corretamente" });
        } 

        try {
            const novo = new User({email, senha, nome});
            await novo.save()
            res.status(200).json({ message: "Usuário criado com sucesso" });

        } catch (error) {
            console.log("Deu error: ", error.message)
            res.status(200).json({ message: error.message });
        }


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.login = async (req, res) => {
    try {
        const { senha, email } = req.body;

        const usuario = await User.findOne({ email });

        if (usuario) {
            if (usuario.senha === senha) {
                res.status(200).json({ message: "Login bem-sucedido" });
            } else {
                res.status(400).json({ message: "Senha incorreta" });
            }
        } else {
            res.status(404).json({ error: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};