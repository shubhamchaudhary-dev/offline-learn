// Progress command - tracks learning progress
const progress = require("../services/progressService");

module.exports = async () => {
  const scores = await progress.getProgress();
  scores.forEach(s =>
    console.log(`${s.course} → ${s.score}/${s.total}`)
  );
};