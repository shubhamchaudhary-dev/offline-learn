const p2p = require("../services/p2pService");

module.exports = (address) => {
  p2p.join(address);
};