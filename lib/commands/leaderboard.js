const leaderboardService = require("../services/leaderboardService");

module.exports = async () => {
  await leaderboardService.sync();   // MUST exist

  const board = await leaderboardService.fetchLeaderboard();

  console.log("\n🌍 Global Leaderboard\n");

  if (!board.length) {
    console.log("No entries yet.");
    return;
  }

  board.forEach((u, i) => {
    console.log(`${i + 1}. ${u.name || "User"} → ${u.score}`);
  });
};