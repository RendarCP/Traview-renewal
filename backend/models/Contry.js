const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contrySchema = new Schema({
  contryId: Number,
  name: String,
  tile: Date,
  flyingTime: String,
  visa: String,
  electric: String,
})

module.exports = mongoose.model('contry',contrySchema)