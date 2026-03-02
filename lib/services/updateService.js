// Update service - handles content updates
const updateNotifier = require("update-notifier");
const pkg = require("../../package.json");

module.exports = () => {
  const notifier = updateNotifier({ pkg });
  notifier.notify();
};