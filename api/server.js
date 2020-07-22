const express = require('express');

const dbRouter = require("../blog/posts.js");

const server = express();

server.use(express.json());

server.use("/api/posts", dbRouter);

module.exports = server;