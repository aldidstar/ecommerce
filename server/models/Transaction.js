const { Schema, model } = require("mongoose");

const transactionSchema = new Schema(
  {
    title: {
      type: String,
    },
    brand: {
      type: String,
    },
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    color: {
      type: String,
    },
    capacity: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Transaction", transactionSchema);
