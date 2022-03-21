const express = require("express");
const { randomBytes } = require("crypto");
const { server } = require("./util");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

const posts = {};

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  // sending the event
  await axios.post("http://localhost:5005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("event Received", req.body.type);
});

app.listen(4000, () => {
  console.log(server("POST SERVICE on port 4000"));
});
