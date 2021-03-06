const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: String,
  position: Array,
  destination: Array,
  speed: Number,
  path: Array
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = {
  Vehicle
};

