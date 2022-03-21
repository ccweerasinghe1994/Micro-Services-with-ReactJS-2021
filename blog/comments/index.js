const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const { logSuccess } = require("./util");
const { default: axios } = require("axios");
const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

// to get all comments
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});
// to create a comment
app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:5005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("event Received", req.body.type);
});

app.listen(4001, () => {
  logSuccess(`COMMENT SERVICE on port 4001`);
});
