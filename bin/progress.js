#!/usr/bin/env node
process.argv.splice(2, 0, "progress");
require("../lib/cli");