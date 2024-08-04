const { default: mongoose } = require("mongoose");

const USerSchama = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", USerSchama);