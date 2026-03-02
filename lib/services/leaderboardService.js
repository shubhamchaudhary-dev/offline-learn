const axios = require("axios");
const progress = require("./progressService");
const badgeService = require("./badgeService");

const SERVER_URL = "http://localhost:4000";

exports.sync = async () => {
  try {
    const scores = await progress.getProgress();
    const badges = await badgeService.calculateBadges();

    await axios.post(`${SERVER_URL}/submit`, {
      scores,
      badges
    });

    console.log("✅ Synced with leaderboard.");
  } catch (err) {
    console.log("⚠ Leaderboard server not running. Skipping sync.");
  }
};

exports.fetchLeaderboard = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/leaderboard`);
    return res.data;
  } catch (err) {
    console.log("⚠ Leaderboard server not running.");
    return [];
  }
};