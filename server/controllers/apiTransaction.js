const Transaction = require("../models/Transaction");

module.exports = {
  transactionRead: async (req, res) => {
    try {
      const transaction = await Transaction.find();
      res.status(200).json(transaction);
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  transactionCreate: async (req, res) => {
    try {
      const transaction = await Transaction.create(req.body);
      res.status(201).json({
        success: true,
        message: "transaction have been added",
        transaction,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  transactionDelete: async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndRemove(req.params.id);
      res.status(201).json({
        success: true,
        message: "transaction have been deleted",
        transaction,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },

  transactionUpdate: async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json({
        success: true,
        message: "transaction have been updated",
        transaction,
      });
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "something wrong",
        err,
      });
    }
  },
}