const Zor = require("zoro-to-api");
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding routes

app.post("/api/search", async (req, res) => {
  const search = req.body.search;
  const data = await Zor.zoroSearch(`${search}`);
  res.send(data);
});

app.get("/gogo/search/:animeName", async (req, res) => {
  const animeName = req.params.animeName;
  try {
    const data = await fetch(
      `https://api.consumet.org/anime/gogoanime/${animeName}?page=1`
    );
    const json = await data.json();
    res.send(json);
  } catch (err) {
    res.send(err);
  }
});

app.get("/name/:name", (req, res) => {
  res.send("Hello " + req.params.name + " your age is " + req.query.age);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
