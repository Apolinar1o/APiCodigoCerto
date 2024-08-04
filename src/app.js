require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT

const routes = require("./routes")
const MongoConnection = require("./datebase/db.js");

MongoConnection().then(() => {

    app.listen(port, () => {
        console.log(`Rodou em http://localhost:${port}`); 
    });
})


app.use(express.json());
app.use("/api", routes);


