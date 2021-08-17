const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  text: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Todo = mongoose.model('Todo', todoSchema);
