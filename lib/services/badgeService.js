const progress = require("./progressService");

exports.calculateBadges = async () => {
  const scores = await progress.getProgress();

  let badges = [];

  scores.forEach(s => {
    const percent = (s.score / s.total) * 100;

    if (percent === 100) badges.push("🏆 Perfectionist");
    else if (percent >= 80) badges.push("🔥 Scholar");
    else if (percent >= 50) badges.push("📘 Learner");
  });

  if (scores.length >= 5) badges.push("💪 Consistent");

  return [...new Set(badges)];
};