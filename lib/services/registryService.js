// Registry service - handles content registry
const updateNotifier = require("update-notifier");
const pkg = require("../../package.json");

module.exports = () => {
  const notifier = updateNotifier({ pkg });
  notifier.notify();
};