const express = require("express");
const app = express();

app.use(express.json());

let leaderboard = [];

app.post("/submit", (req, res) => {
  const total = req.body.scores.reduce((sum, s) => sum + s.score, 0);

  leaderboard.push({
    name: "User",
    score: total
  });

  leaderboard.sort((a, b) => b.score - a.score);

  res.sendStatus(200);
});

app.get("/leaderboard", (req, res) => {
  res.json(leaderboard);
});

app.listen(4000, () =>
  console.log("Leaderboard server running")
);