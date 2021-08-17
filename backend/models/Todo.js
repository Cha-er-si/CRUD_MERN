const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  text: {
    type: String,
  },
  desription: {
    type: String,
  },
});

module.exports = mongoose.model('Todo', Todo);
