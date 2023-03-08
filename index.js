const Zor = require("zoro-to-api");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/search", async (req, res) => {
  const search = req.body.search;
  const data = await Zor.zoroSearch(`${search}`);
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
