const p2p = require("../services/p2pService");

module.exports = (course) => {
  p2p.host(course);
};