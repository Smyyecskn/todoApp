"use strict";

module.exports = (error, req, res, next) => {
  return res.status(res?.errorStatusCode || 500).send({
    error: true,
    message: error.message,
    body: req.body,
    cause: error.cause,
    stack: error.stack,
  });
};
