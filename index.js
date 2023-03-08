const Zor = require("zoro-to-api");
const express = require("express");
const app = express();
const cors = require("cors");

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

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
