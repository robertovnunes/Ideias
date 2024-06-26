const express = require("express");
const mongoose = require("mongoose");

let consign = require("consign");


const server = express();
const port = 3000;

require('dotenv').config()

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@clusterideias.9hxxv5o.mongodb.net/ideias?retryWrites=true&w=majority`


server.use(
    express.urlencoded({
        extended: true
    }),
);
server.use(express.json());

consign().include('src/routes')
    .into(server);

server.get("/", (req, res) => {
    res.send("It's working!");
});

mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");
    server.listen(port, () => {
        console.log("Server listening on port 3000");
    });
})
    .catch((error) => {
        console.log("Error connecting to MongoDB");
        console.log(error);
    });


module.exports = server;