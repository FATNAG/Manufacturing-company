const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sales = Schema({
  name: String,
  descripcion: String,
  value: Number,
  amount: Number,
  total: Number,
});

module.exports = mongoose.model("sales", Sales);
