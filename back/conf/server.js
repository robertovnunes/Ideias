const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = 3000;

const url = "mongodb+srv://ideias:7RNqCm9RZxXnUWZ5@clusterideias.9hxxv5o.mongodb.net/?retryWrites=true&w=majority"


server.use(
    express.urlencoded({
        extended: true
    }),
);
server.use(express.json());

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