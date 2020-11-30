const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("todo", TodoSchema);
