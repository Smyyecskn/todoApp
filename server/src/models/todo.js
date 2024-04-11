"use strict";
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "todos", timeStamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
