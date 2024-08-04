const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: 'Token não informado' });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = authorization;