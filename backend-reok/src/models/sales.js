const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sales = Schema({
  name: String,
  description: String,
  value: Number,
  amount: Number,
  total: Number,
});

module.exports = mongoose.model("sales", Sales);
