

exports.CreateUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "Nenhum dado enviado" });
    }

    const {senha, login} = req.body;
    
    if (!senha || senha.length > 4) {
        return res.status(200).json({ message: "Senha não informada corretamente!!" });
    } 
    if (login) {
        return res.status(200).json({ message: "email não informada corretamente!!" });
    } 
    try {
        
    } catch (error) {
        return res.status(500).json({"error": error})
    }
   
};

