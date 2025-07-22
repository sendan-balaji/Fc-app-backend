const mongoose = require('mongoose');
const RecordSchema = new mongoose.Schema({
  customer: String,
  date: Date,
  amount: Number,
  line: String,
  area: String
});
module.exports = mongoose.model('Record', RecordSchema);
