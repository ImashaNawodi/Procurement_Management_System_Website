const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const supplyerSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,

  },
  supplierName: {
    type: String,
    required: true,
  },
  supplierId: {
    type: String,
    required: true,
  },
  emails: [{
    type: String,
  }],
  address: {
    type: String,
  },
  contactOfficer: {
    type: String,
  },
  contactNumbers: [{
    type: String,
  }],
  faxNumber: {
    type: String,
  },
  typeofBusiness: {
    type: String,
    default: 'SoleImporter',
    enum: ['SoleImporter', 'SoleDistributor', 'LocalAgent', 'contractors']
  },
  classOfAssets: {
    type: String,
  },
});

module.exports = mongoose.model('Supplyer', supplyerSchema);
