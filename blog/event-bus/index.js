const { default: axios } = require("axios");
const express = require("express");
const { logSuccess } = require("./util");

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "ok" });
});

app.listen(5005, () => {
  logSuccess("Event Bus Is listening on PORT 5005");
});
