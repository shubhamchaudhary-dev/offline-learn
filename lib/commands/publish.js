// Publish command - publishes learning content
const fs = require("fs-extra");

module.exports = async (file) => {
  if (!fs.existsSync(file)) {
    console.log("File not found.");
    return;
  }

  console.log("Share this file with maintainers to add to registry.");
};