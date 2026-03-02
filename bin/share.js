#!/usr/bin/env node
process.argv.splice(2, 0, "share");
require("../lib/cli");