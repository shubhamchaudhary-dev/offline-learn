#!/usr/bin/env node
process.argv.splice(2, 0, "export");
require("../lib/cli");