// Banner utility - displays CLI banner
const figlet = require("figlet");
const gradient = require("gradient-string");
const boxen = require("boxen");

module.exports = () => {
  console.log(
    gradient.pastel(
      figlet.textSync("Offline Learn", { horizontalLayout: "full" })
    )
  );

  console.log(
    boxen("Learn Anywhere. Internet Optional.", {
      padding: 1,
      borderStyle: "round",
      borderColor: "cyan"
    })
  );
};