// UI utility - handles CLI user interface
const chalk = require("chalk");

exports.success = msg => console.log(chalk.green("✔ " + msg));
exports.error = msg => console.log(chalk.red("✖ " + msg));
exports.info = msg => console.log(chalk.blue("ℹ " + msg));