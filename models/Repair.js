const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const repairSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name es obligatorio"]
  },
  description: {
    type: String,
    required: [true, "Descripción es obligatorio"],
  },
  carRegistration: {
    type: String,
    required: [true, "Matrícula es obligatorio"],
  },
  contactNumber: {
    type: Number,
    required: [true, "Tiempo de ejecución es obligatorio"]
  },
  image: {
    type: String,
    required: [true, "Imagen es obligatorio"]
  },
  time: {
    type: Number,
    required: [true, "Tiempo de ejecución es obligatorio"]
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

repairSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Repair", repairSchema);
