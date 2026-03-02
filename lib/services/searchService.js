const Fuse = require("fuse.js");

exports.search = (topics, keyword) => {
  if (!topics || !topics.length) return [];

  const fuse = new Fuse(topics, {
    keys: ["name", "content"],
    threshold: 0.4
  });

  return fuse.search(keyword);
};