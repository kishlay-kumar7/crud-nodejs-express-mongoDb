const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
  },
});
const Chat = new mongoose.model("Chat", chatSchema);
module.exports = Chat;
