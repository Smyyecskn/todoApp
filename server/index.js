"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

const dbConnection = require("./src/config/dbConnection");
dbConnection();

app.all("/", (req, res) => {
  res.send({
    message: "Hello Todo App ",
  });
});

app.use("/todos", require("./src/routes/router"));

app.use(require("./src/middlewares/errorHandler"));

//!SERVER LİSTEN
app.listen(PORT, () =>
  console.log(`TodoApp listening on port ${HOST}:${PORT}`)
);
