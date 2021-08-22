const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    title: {
      type: String,
      
    },
    rate: {
      type: Number,
    },
    description: {
        type: String,
    },
    price: {
         type: Number,
    },
    brand: {
        type: String,
      },
    detail: {
        type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Item", itemSchema);