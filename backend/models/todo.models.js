const mongoose = require("mongoose");
const { stringify } = require("querystring");

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("todo", TodoSchema);
