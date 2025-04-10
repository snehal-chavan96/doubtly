const express = require("express");
const router = express.Router();
const {
  askQuestion,
  getQuestions,
  upvoteQuestion,
} = require("../controllers/questionController");

router.post("/", askQuestion);
router.get("/", getQuestions);
router.post("/:id/upvote", upvoteQuestion);

module.exports = router;
