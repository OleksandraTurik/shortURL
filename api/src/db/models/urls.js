const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  originUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Url', URLSchema);