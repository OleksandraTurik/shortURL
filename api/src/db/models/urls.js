const mongoose = require('mongoose');

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema);
