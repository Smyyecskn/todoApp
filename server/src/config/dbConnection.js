"use strict";

const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB;

module.exports = function dbConnect() {
  mongoose
    .connect(MONGODB)
    .then(() => console.log("DB CONNECTED"))
    .catch(() => console.log("DB NOT CONNECTED"));
};
