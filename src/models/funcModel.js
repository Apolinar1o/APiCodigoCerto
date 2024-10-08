const { default: mongoose } = require("mongoose");

const FuncSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    prazo: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("tasks", FuncSchema);