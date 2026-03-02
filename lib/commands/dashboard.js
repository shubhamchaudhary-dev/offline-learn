const blessed = require("blessed");
const contrib = require("blessed-contrib");
const progressService = require("../services/progressService");
const badgeService = require("../services/badgeService");

module.exports = async () => {
  const screen = blessed.screen({
    smartCSR: true,
    title: "Offline Learn Dashboard"
  });

  const grid = new contrib.grid({
    rows: 12,
    cols: 12,
    screen: screen
  });

  // 🔥 1. Badges Box
  const badgeBox = grid.set(0, 0, 3, 12, blessed.box, {
    label: "Badges",
    border: "line",
    padding: 1
  });

  const badges = await badgeService.calculateBadges();
  badgeBox.setContent(
    badges.length ? badges.join("\n") : "No badges earned yet."
  );

  // 🔥 2. Progress Table
  const table = grid.set(3, 0, 4, 12, contrib.table, {
    label: "Progress History",
    columnWidth: [20, 10]
  });

  const scores = await progressService.getProgress();

  table.setData({
    headers: ["Course", "Score"],
    data: scores.length
      ? scores.map(s => [s.course, `${s.score}/${s.total}`])
      : [["No attempts yet", "-"]]
  });

  // 🔥 3. Performance Chart
  const line = grid.set(7, 0, 5, 12, contrib.line, {
    label: "Performance Trend",
    showLegend: true
  });

  line.setData([
    {
      title: "Scores",
      x: scores.map((_, i) => i.toString()),
      y: scores.map(s => s.score)
    }
  ]);

  screen.key(["escape", "q", "C-c"], () => process.exit(0));

  screen.render();
};