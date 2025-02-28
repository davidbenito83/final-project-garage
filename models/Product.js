const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name es obligatorio"]
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: [true, "Imagen es obligatorio"]
  },
  quantity: {
    type: Number,
    required: [true, "Cantidad es obligatorio"]
  },
  price: {
    type: Number,
    required: [true, "Precio unitario es obligatorio"]
  },
  sellPrice: {
    type: Number,
    required: [true, "Precio de venta es obligatorio"]
  },
  state: {
    type: Boolean,
    default: true
  },
  userAssoc: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { 
    timeStamps: true,
    createdAt: true 
    });

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Product", productSchema);
