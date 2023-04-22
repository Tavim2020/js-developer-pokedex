const express = require("express");

const server = express();
server.use(express.static("assets"));

server.get("/", (_, res) => res.status(200).sendFile(__dirname + "/index.html"));

server.listen("3000", () => console.log("server on"));