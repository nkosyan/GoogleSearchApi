const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

const KeywordSchema = new mongoose.Schema({
  keyword: {
    type: String,
    default: '',
    trim: true,
  },
  device: {
    type: String,
    default: ''
  },
  searchedDate: {
    type: Date,
    default: Date.now()
  },
  searchedTimes: {
    type: Number,
    default: 1
  },
});

module.exports = mongoose.model('Keyword', KeywordSchema);
