exports.CreateUser = async (req, res) => {
    try {
        const {senha} = req.body;
        res.status(200).json({ message: "Usuário criado com sucesso" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};