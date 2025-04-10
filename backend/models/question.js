const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  content: String,
  tags: [String],
  codeSnippet: String,
  imageUrl: String,
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", questionSchema);
