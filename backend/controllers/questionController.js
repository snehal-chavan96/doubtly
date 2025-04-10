const Question = require("../models/question");

exports.askQuestion = async (req, res) => {
  const { content, tags, codeSnippet, imageUrl } = req.body;
  const question = new Question({ content, tags, codeSnippet, imageUrl });
  await question.save();
  res.status(201).json(question);
};

exports.getQuestions = async (req, res) => {
  const questions = await Question.find().sort({ createdAt: -1 });
  res.json(questions);
};

exports.upvoteQuestion = async (req, res) => {
  const question = await Question.findById(req.params.id);
  question.upvotes += 1;
  await question.save();
  res.json(question);
};
