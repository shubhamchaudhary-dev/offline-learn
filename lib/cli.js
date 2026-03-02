const { program } = require("commander");
const showBanner = require("./utils/banner");

// Always show banner
showBanner();

program
  .name("offline-learn")
  .description("Offline-first CLI learning platform")
  .version("1.0.0");

// Register commands
program.command("fetch <course>")
  .description("Download a course")
  .action(require("./commands/fetch"));

program.command("list")
  .description("List downloaded courses")
  .action(require("./commands/list"));

program.command("search <keyword>")
  .description("Search topics across courses")
  .action(require("./commands/search"));

program.command("test <course>")
  .description("Take quiz for a course")
  .action(require("./commands/test"));

program.command("progress")
  .description("View learning progress")
  .action(require("./commands/progress"));

program.command("dashboard")
  .description("Open analytics dashboard")
  .action(require("./commands/dashboard"));

program.command("export <course>")
  .description("Export course as PDF")
  .action(require("./commands/export"));

program.command("leaderboard")
  .description("View global leaderboard")
  .action(require("./commands/leaderboard"));

program.command("share <course>")
  .description("Share course over LAN")
  .action(require("./commands/share"));

program.command("join <url>")
  .description("Join shared course")
  .action(require("./commands/join"));

// If no command provided, show help
if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}