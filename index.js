const Zor = require("zoro-to-api");
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const router = require("express").Router();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/search", async (req, res) => {
  const search = req.body.search;
  const data = await Zor.zoroSearch(`${search}`);
  res.send(data);
});
app.get("/name/:name", (req, res) => {
  res.send("Hello " + req.params.name + " your age is " + req.query.age);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
