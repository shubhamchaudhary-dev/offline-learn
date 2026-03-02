const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");
const path = require("path");
const fs = require("fs-extra");

const file = path.join(__dirname, "../../storage/progress.json");

// Ensure storage folder exists
fs.ensureDirSync(path.dirname(file));

const adapter = new JSONFile(file);

// ✅ IMPORTANT: provide default data here
const db = new Low(adapter, { scores: [] });

exports.init = async () => {
  await db.read();
  db.data ||= { scores: [] };
  await db.write();
};

exports.saveScore = async (course, score, total) => {
  await exports.init();

  db.data.scores.push({
    course,
    score,
    total,
    date: new Date().toISOString()
  });

  await db.write();
};

exports.getProgress = async () => {
  await exports.init();
  return db.data.scores;
};