// Fetch command - downloads learning content
const fs = require("fs-extra");
const path = require("path");
const storage = require("../services/storageService");

module.exports = async (course) => {
  const filePath = path.join(__dirname, "../../content", `${course}.json`);

  if (!fs.existsSync(filePath)) {
    console.log("Course not found.");
    return;
  }

  const data = await fs.readJson(filePath);
  await storage.saveCourse(course, data);
  console.log("Course downloaded.");
};