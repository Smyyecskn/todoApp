"use strict";
const Todo = require("../models/todo");

module.exports = {
  list: async (req, res) => {
    const data = await Todo.find();
    res.status(200).send({
      error: false,
      message: "Todos listed successfully",
      data,
    });
  },

  create: async (req, res) => {
    const data = await Todo.create(req.body);
    res.status(200).send({
      error: false,
      message: "Todo created successfully",
      data,
    });
  },

  read: async (req, res) => {
    const data = await Todo.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      message: "Todo listed successfully",
      data,
    });
  },

  update: async (req, res) => {
    const data = await Todo.updateOne({ _id: req.params }, req.body);
    res.status(201).send({
      error: false,
      message: "Todo update successfully",
      data,
    });
  },

  delete: async (req, res) => {
    const data = await Todo.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 201 : 404).send({
      error: !data.deletedCount,
      message: data.deletedCount ? "Bu todo silindi" : "Todo Not Found",
    });
  },
};
