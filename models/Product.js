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
    required: [true, "Descripción es obligatorio"],
  },
  image: {
    type: String,
    required: [true, "Imagen es obligatorio"]
  },
  quantity: {
    type: Number,
    required: [true, "Cantidad es obligatorio"]
  },
  state: {
    type: Boolean,
    default: true
  },
  userAssoc: {
    type: String,
    required: [true, "User es obligatorio"]
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
